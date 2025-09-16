from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import Session, select
from ..deps import admin_required, get_db
from ..models import User

router = APIRouter(prefix="/admin", tags=["admin"])

@router.get("/users")
def list_users(_: User = Depends(admin_required), db: Session = Depends(get_db)):
    users = db.exec(select(User)).all()
    return [
        {"id": u.id, "name": u.name, "email": u.email, "is_admin": u.is_admin, "created_at": u.created_at}
        for u in users
    ]

@router.patch("/users/{user_id}/admin")
def set_admin(user_id: int, make_admin: bool, _: User = Depends(admin_required), db: Session = Depends(get_db)):
    u = db.get(User, user_id)
    if not u:
        raise HTTPException(404, "Usuário não encontrado")
    u.is_admin = bool(make_admin)
    db.add(u)
    db.commit()
    db.refresh(u)
    return {"ok": True, "id": u.id, "is_admin": u.is_admin}
