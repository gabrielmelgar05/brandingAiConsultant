from sqlmodel import SQLModel, create_engine, Session
from app.utils.settings import settings

engine = create_engine(settings.database_url, echo=False)

def init_db() -> None:
    from app.models.user import User  # garante import dos modelos
    SQLModel.metadata.create_all(engine)

def get_session():
    with Session(engine) as session:
        yield session
