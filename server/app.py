import os

from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

from fastapi.responses import JSONResponse
import bcrypt
from fastapi import Depends, FastAPI, HTTPException, status


from models import LoginRequest, Profile, Appointment

from bson import ObjectId
import motor.motor_asyncio
from pymongo import ReturnDocument

from jwttoken import create_access_token, verify_jwt_token

app = FastAPI(
    title="Healthcare system API",
    summary="A API service for a healthcare system management.",
)

# connect to the MongoDB database
client = motor.motor_asyncio.AsyncIOMotorClient(os.environ["MONGODB_URL"])
db = client.db
profile_collection = db.get_collection("profile")
appointment_collection = db.get_collection("appointment")

@app.get("/hello")
def test():
    return {"hello": "world"}

# Login request
@app.post("/login", 
          response_description="Login to the system", 
        status_code=status.HTTP_200_OK,
          responses={
              404: {"description": "Profile not found"},
              400: {"description": "Invalid password"},
          })
async def login(login_data: LoginRequest):
    # Extract id and password from the request body
    id = login_data.id
    password = login_data.password
    # Find the profile with the given id
    profile = await profile_collection.find_one({"id": id})
    if not profile:
        raise HTTPException(status_code=404, detail="Profile not found")
    if bcrypt.checkpw(password.encode('utf-8'), profile["password"].encode('utf-8')):
        access_token = create_access_token(profile["role"], profile["id"])
        response = JSONResponse({"message": "login successful"}, status_code=200)
        response.set_cookie(key="jwt-token", value=access_token)
        return response
    raise HTTPException(status_code=400, detail="Invalid password")



# Register a new user profile
@app.post("/register/",
          response_description="Register a new user",
          status_code=status.HTTP_201_CREATED,
          responses={
            400: {
                "description": "Profile with this id already exists"
                }
            },
        )
async def register(profile_data: Profile):
    # check if the id already exists
    if await profile_collection.find_one({"id": profile_data.id}):
        raise HTTPException(status_code=400, detail="Profile with this id already exists")
    
    # Adding the salt to password
    salt = bcrypt.gensalt()
    # Hashing the password
    profile_data.password = bcrypt.hashpw(profile_data.password.encode('utf-8'), salt).decode('utf-8')
    # Insert the profile data into the database
    new_profile = await profile_collection.insert_one(profile_data.model_dump(by_alias=True))
    return {"message": "registration successful",
            "profile_id": str(new_profile.inserted_id)}




# Get profiles details
@app.get("/personal-profile",
         response_description="Get a single profile",
         response_model=Profile,
         response_model_exclude={"password"},
         responses={
            404: {
                "description": "Profile not found"
                }
            },
        )
async def find_profile(jwt_payload: dict = Depends(verify_jwt_token)):
    profile = await profile_collection.find_one({"id": jwt_payload["id"]})
    if profile:
        return profile
    raise HTTPException(status_code=404, detail="Profile not found")
    