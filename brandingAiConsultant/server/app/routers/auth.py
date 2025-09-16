from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import Session, select
from pydantic import BaseModel
from ..db import engine
from ..models import User
from ..security import verify_password, hash_password, create_access_token
from ..deps import get_db, get_current_user

router = APIRouter(prefix="/auth", tags=["auth"])

class RegisterIn(BaseModel):
    name: str
    email: str
    password: str

@router.post("/register")
def register(data: RegisterIn, db: Session = Depends(get_db)):
    if db.exec(select(User).where(User.email == data.email)).first():
        raise HTTPException(400, "Email já cadastrado")
    u = User(name=data.name, email=data.email, password_hash=hash_password(data.password))
    db.add(u); db.commit(); db.refresh(u)
    return {"id": u.id, "email": u.email}

class LoginIn(BaseModel):
    email: str
    password: str

@router.post("/login")
def login(data: LoginIn, db: Session = Depends(get_db)):
    u = db.exec(select(User).where(User.email == data.email)).first()
    if not u or not verify_password(data.password, u.password_hash):
        raise HTTPException(401, "Credenciais inválidas")
    token = create_access_token({"sub": u.id, "email": u.email, "is_admin": u.is_admin})
    return {"access_token": token, "token_type": "bearer"}

@router.get("/me")
def me(user: User = Depends(get_current_user)):
    return {"id": user.id, "name": user.name, "email": user.email, "is_admin": user.is_admin}
