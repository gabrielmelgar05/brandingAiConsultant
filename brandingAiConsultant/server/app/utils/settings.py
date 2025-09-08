from pydantic import BaseModel
from dotenv import load_dotenv
import os, pathlib

load_dotenv()

class Settings(BaseModel):
    web_origin: str = os.getenv("WEB_ORIGIN", "http://localhost:3000")
    database_url: str = os.getenv("DATABASE_URL", "")
    secret_key: str = os.getenv("SECRET_KEY", "dev")
    jwt_expires_min: int = int(os.getenv("JWT_EXPIRES_MIN", "120"))
    static_dir: str = str(pathlib.Path(os.getenv("STATIC_DIR", "./static")).resolve())
    ollama_model: str = os.getenv("OLLAMA_MODEL", "qwen2.5:3b")

settings = Settings()
pathlib.Path(settings.static_dir).mkdir(parents=True, exist_ok=True)
