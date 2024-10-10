import os
from datetime import datetime, timedelta
from fastapi import HTTPException, Request
from jose import jwt

ACCESS_TOKEN_EXPIRE_MINUTES = 30 # 30 minutes
ALGORITHM = "HS256"
JWT_SECRET_KEY = os.environ['JWT_SECRET_KEY'] # should be kept secret

def create_access_token(role: str, id: str , expires_delta: int = None) -> str:
    if expires_delta is not None:
        expires_delta = datetime.now() + expires_delta
    else:
        expires_delta = datetime.now() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)

    to_encode = {"exp": expires_delta, "role": role, "id": id}
    print(datetime.now())
    encoded_jwt = jwt.encode(to_encode, JWT_SECRET_KEY, ALGORITHM)
    return encoded_jwt

def decode_access_token(token: str):
    try:
        payload = jwt.decode(token, JWT_SECRET_KEY, algorithms=[ALGORITHM])
        return payload
    except jwt.ExpiredSignatureError:
        return "Signature has expired"
    except jwt.JWTError:
        return "Invalid token"
    return payload

# Dependency function to check JWT token from cookie
async def verify_jwt_token(request: Request):
    # Get JWT token from cookies
    token = request.cookies.get("jwt-token")
    
    if token is None:
        raise HTTPException(status_code=401, detail="Not authenticated")
    
    # Verify token
    payload = decode_access_token(token)
    
    return payload  # Payload contains user data (role, id, etc.)
