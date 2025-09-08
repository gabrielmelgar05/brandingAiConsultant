from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from app.utils.settings import settings
from app.db import init_db
from app.routers import auth, brief, generate
import os

# >>> ESSA VARIÁVEL PRECISA EXISTIR <<<
app = FastAPI(title="Branding AI (Local)")

# CORS (permite o front acessar)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[settings.web_origin],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# arquivos estáticos
os.makedirs(settings.static_dir, exist_ok=True)
app.mount("/static", StaticFiles(directory=settings.static_dir), name="static")

# rotas
app.include_router(auth.router)
app.include_router(brief.router)
app.include_router(generate.router)

@app.on_event("startup")
def on_startup():
    init_db()

@app.get("/")
def ping():
    return {"ok": True}
