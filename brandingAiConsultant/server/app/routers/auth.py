from fastapi import APIRouter, Depends, HTTPException, Response
from sqlmodel import Session, select
from app.db import get_session
from app.models.user import User
from app.models.schemas import RegisterIn, LoginIn, UserOut
from app.services.auth import hash_password, verify_password, create_token, get_current_user

router = APIRouter(prefix="/auth", tags=["auth"])

@router.post("/register", response_model=UserOut)
def register(data: RegisterIn, s: Session = Depends(get_session)):
    if s.exec(select(User).where(User.email == data.email)).first():
        raise HTTPException(status_code=400, detail="E-mail já cadastrado")
    u = User(email=data.email, name=data.name, hashed_password=hash_password(data.password))
    s.add(u); s.commit(); s.refresh(u)
    return UserOut(id=u.id, email=u.email, name=u.name, role=u.role)

@router.post("/login", response_model=UserOut)
def login(data: LoginIn, res: Response, s: Session = Depends(get_session)):
    u = s.exec(select(User).where(User.email == data.email)).first()
    if not u or not verify_password(data.password, u.hashed_password):
        raise HTTPException(status_code=401, detail="Credenciais inválidas")
    res.set_cookie("access_token", create_token(u.email), httponly=True, samesite="lax", secure=False, max_age=7200, path="/")
    return UserOut(id=u.id, email=u.email, name=u.name, role=u.role)

@router.post("/logout")
def logout(res: Response):
    res.delete_cookie("access_token", path="/")
    return {"ok": True}

@router.get("/me", response_model=UserOut)
def me(current=Depends(get_current_user)):
    return current
