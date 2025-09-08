from pydantic import BaseModel, Field
from typing import Optional, List

class RegisterIn(BaseModel):
    email: str
    name: Optional[str] = None
    password: str = Field(min_length=6)

class LoginIn(BaseModel):
    email: str
    password: str

class UserOut(BaseModel):
    id: int
    email: str
    name: Optional[str] = None
    role: str

# Brief e geração
class BriefIn(BaseModel):
    idea: str
    segment: Optional[str] = None
    audience: Optional[str] = None
    budget: Optional[str] = None
    goal: Optional[str] = None

class LogoIn(BaseModel):
    name: str
    palette: List[str]
    style: str = "default"
    with_icon: bool = True
    layout: str = "horizontal"  # horizontal|stack|only-icon
