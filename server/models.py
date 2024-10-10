import datetime
from typing import Optional
from pydantic import BaseModel, ConfigDict, EmailStr

class Profile(BaseModel):
    """
    Container for a profile object of any user.
    """
    id: str
    name: str
    designation: str
    email: EmailStr
    phone: str
    password: str
    role: str

#  model for login request
class LoginRequest(BaseModel):
    id: str
    password: str

class Appointment(BaseModel):
    """
    Container for a single appointment record, every detail of the appointment, current satus, report and skribbl pad url.
    """
    patient_id: str
    doctor_id: str = ""
    datatime: datetime.datetime 
    current_status: str = 'R'
    previous_status:list = []
    description: str
    skribbl_pad_url: list = []
    report_url: list = []
    model_config = ConfigDict(
        # This setting allows fields to be populated using their alias (_id in this case) or their actual field name (id). 
        # This is useful when converting between different representations, such as MongoDB documents and API responses.
        populate_by_name=True,
        # This allows arbitrary types like PyObjectId to be used in the model, 
        # even if they are not standard types like str or int.
        arbitrary_types_allowed=True,
    )
    
# model for create appointment request
class CreateAppointmentRequest(BaseModel):
    date: str # Expected format: 'YYYY-MM-DD'
    time: str # Expected format: 'HH:MM'
    description: str

# model for update appointment status request
class UpdateStatusRequest(BaseModel):
    status: str
    description: str
    doctor_id: Optional[str] = None