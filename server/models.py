from typing import Optional
from pydantic import BaseModel, ConfigDict, EmailStr, Field
from pydantic.functional_validators import BeforeValidator
from typing_extensions import Annotated

# Represents an ObjectId field in the database.
# It will be represented as a `str` on the model so that it can be serialized to JSON.
PyObjectId = Annotated[str, BeforeValidator(str)]

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

class Appointment(BaseModel):
    """
    Container for a single appointment record, every detail of the appointment, current satus, report and skribbl pad url.
    """
    id: Optional[PyObjectId] = Field(alias="_id", default=None)
    patient_id: str
    doctor_id: str
    date: str
    time: str
    current_status: str
    description: str
    skribbl_pad_url: str
    report_url: list = []
    model_config = ConfigDict(
        # This setting allows fields to be populated using their alias (_id in this case) or their actual field name (id). 
        # This is useful when converting between different representations, such as MongoDB documents and API responses.
        populate_by_name=True,
        # This allows arbitrary types like PyObjectId to be used in the model, 
        # even if they are not standard types like str or int.
        arbitrary_types_allowed=True,
    )
    
#  model for login request
class LoginRequest(BaseModel):
    id: str
    password: str
    