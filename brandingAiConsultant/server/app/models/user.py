from sqlmodel import SQLModel, Field
from typing import Optional
from datetime import datetime

class User(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    email: str = Field(index=True, unique=True)
    name: Optional[str] = None
    hashed_password: str
    role: str = Field(default="USER")
    created_at: datetime = Field(default_factory=datetime.utcnow)
