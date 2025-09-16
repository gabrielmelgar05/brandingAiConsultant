import os
from sqlmodel import Session, select
from dotenv import load_dotenv
from app.db import engine
from app.models import User
from app.security import hash_password

load_dotenv()

def ensure_admin(name: str, email: str, password: str):
    with Session(engine) as db:
        u = db.exec(select(User).where(User.email == email)).first()
        if u:
            u.is_admin = True
            if password:
                u.password_hash = hash_password(password)
            db.add(u); db.commit(); db.refresh(u)
            print(f"[OK] Promovido a admin: {u.email}")
            return
        u = User(name=name, email=email, password_hash=hash_password(password), is_admin=True)
        db.add(u); db.commit(); db.refresh(u)
        print(f"[OK] Admin criado: {u.email}")

if __name__ == "__main__":
    name = os.getenv("ADMIN_NAME", "Admin")
    email = os.getenv("ADMIN_EMAIL", "admin@example.com")
    password = os.getenv("ADMIN_PASSWORD", "TroqueEssaSenha123")
    ensure_admin(name, email, password)
