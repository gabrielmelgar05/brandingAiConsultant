from datetime import datetime, timedelta
from fastapi import Depends, HTTPException, Request, status
from passlib.context import CryptContext
import jwt
from sqlmodel import select, Session
from app.db import get_session
from app.models.user import User
from app.utils.settings import settings

pwd = CryptContext(schemes=["bcrypt"], deprecated="auto")

def hash_password(p: str) -> str:
    return pwd.hash(p)

def verify_password(p: str, h: str) -> bool:
    return pwd.verify(p, h)

def create_token(sub: str) -> str:
    exp = datetime.utcnow() + timedelta(minutes=settings.jwt_expires_min)
    return jwt.encode({"sub": sub, "exp": exp}, settings.secret_key, algorithm="HS256")

def decode_token(tok: str | None):
    try:
        return jwt.decode(tok or "", settings.secret_key, algorithms=["HS256"]).get("sub")
    except Exception:
        return None

async def get_current_user(req: Request, s: Session = Depends(get_session)) -> User:
    sub = decode_token(req.cookies.get("access_token"))
    if not sub:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Not authenticated")
    user = s.exec(select(User).where(User.email == sub)).first()
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="User not found")
    return user
