from datetime import datetime

import os

from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

from fastapi.responses import JSONResponse
import bcrypt
from fastapi import Depends, FastAPI, HTTPException, status


from models import CreateAppointmentRequest, LoginRequest, Profile, Appointment, UpdateStatusRequest

from bson import ObjectId
import motor.motor_asyncio
from pymongo import ReturnDocument

from jwttoken import create_access_token, verify_jwt_token

app = FastAPI(
    title="Healthcare system API",
    summary="A API service for a healthcare system management.",
)

# Connect to the MongoDB database
try:
    client = motor.motor_asyncio.AsyncIOMotorClient(os.environ["MONGODB_URL"])
    db = client.db
    profile_collection = db.get_collection("profile")
    appointment_collection = db.get_collection("appointment")
    # check if the connection is successful by pinging the server
    client.admin.command('ping')
except Exception as e:
    raise Exception(f"Failed to connect to MongoDB: {e}")

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


# Create a new appointment
@app.post("/create-appointment",
          response_description="Create a new appointment",
          status_code=status.HTTP_201_CREATED,
          )
async def create_appointment(appointment: CreateAppointmentRequest, jwt_payload: dict = Depends(verify_jwt_token)):
    # Combine date and time into a datetime object
    try:
        appointment_datetime = datetime.strptime(f"{appointment.date} {appointment.time}", "%Y-%m-%d %H:%M")
    except ValueError:
        raise HTTPException(status_code=400, detail="Invalid date or time format")
    
    # Check if the datetime is in the future
    if appointment_datetime <= datetime.now():
        raise HTTPException(status_code=400, detail="Appointment must be in the future")
    
    # TODO: Check if the appointment time is available need to implement, 
    # TODO: better way would be to provide the sutdent available time slots

    # Create the appointment object
    new_appointment = Appointment(
        patient_id=jwt_payload["id"],
        datatime=appointment_datetime,
        description=appointment.description,
    )
    # Insert the appointment data into the database
    created_appointment = await appointment_collection.insert_one(new_appointment.model_dump(by_alias=True))
    
    return {"message": "Appointment created", "appointment_id": str(created_appointment.inserted_id)}



@app.put("/change-status/{appointment_id}")
async def change_appointment_status(appointment_id: str ,update: UpdateStatusRequest, jwt_payload: dict = Depends(verify_jwt_token)):
    # Check if valid role
    if jwt_payload["role"] == "S":
        raise HTTPException(status_code=403, detail="You are not authorized to change the status")
    # find the appointment
    appointment = await appointment_collection.find_one({"_id": ObjectId(appointment_id)})
    if not appointment:
        raise HTTPException(status_code=404, detail="Appointment not found")
    if update.status not in ['R', 'D', 'T', 'P', 'C']:
        raise HTTPException(status_code=400, detail="Invalid status")
    
    # Update query formation
    update_query = {}
    update_query["current_status"] = update.status
    update_query["description"] = update.description

    # in python it updates the list on its place itself 
    previous_status = list(appointment["previous_status"])  # Get a copy of the list
    previous_status.append({appointment["current_status"]: appointment["description"]})  # Append the new status
    update_query["previous_status"] = previous_status  # Assign the modified list back to the update query


    if appointment["doctor_id"] == "" and not update.doctor_id:
        raise HTTPException(status_code=400, detail="Doctor not assigned")
    if update.doctor_id:
        # TODO: extract it as a function
        doctor = await profile_collection.find_one({"id": update.doctor_id})
        if not doctor:
            raise HTTPException(status_code=404, detail="Doctor not found")
        update_query["doctor_id"] = update.doctor_id

    # Update the status
    updated_appointment = await appointment_collection.find_one_and_update(
        {"_id": ObjectId(appointment_id)},
        {"$set": update_query},
    )
    if updated_appointment:
        return {"message": "Appointment status updated"}
    raise HTTPException(status_code=400, detail="Failed to update appointment status")
    
    