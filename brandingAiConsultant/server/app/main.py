from fastapi import FastAPI
from .routers import auth, admin
from .db import init_db

app = FastAPI()

@app.on_event("startup")
def on_startup():
    init_db()

app.include_router(auth.router)
app.include_router(admin.router)

@app.get("/")
def root():
    return {"ok": True}
