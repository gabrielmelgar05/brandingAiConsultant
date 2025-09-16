from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from sqlmodel import Session, select
from .db import engine
from .models import User
from .security import decode_token

bearer = HTTPBearer(auto_error=False)

def get_db():
    with Session(engine) as session:
        yield session

def get_current_user(
    cred: HTTPAuthorizationCredentials = Depends(bearer),
    db: Session = Depends(get_db),
) -> User:
    if cred is None:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Faltando token")
    try:
        data = decode_token(cred.credentials)
    except Exception:
        raise HTTPException(status_code=401, detail="Token inválido/expirado")

    user = db.exec(select(User).where(User.id == data.get("sub"))).first()
    if not user:
        raise HTTPException(status_code=401, detail="Usuário não encontrado")
    return user

def admin_required(user: User = Depends(get_current_user)) -> User:
    if not user.is_admin:
        raise HTTPException(status_code=403, detail="Apenas admin")
    return user
