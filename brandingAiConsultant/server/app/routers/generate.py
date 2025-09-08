from fastapi import APIRouter, Depends
from app.models.schemas import LogoIn
from app.services.svg_logo import generate_logo_svg
from app.services.video import make_teaser_mp4
from app.services.auth import get_current_user
from app.utils.settings import settings
import os

router = APIRouter(prefix="/generate", tags=["generate"])

@router.post("/logo")
def gen_logo(data: LogoIn, user=Depends(get_current_user)):
    path = generate_logo_svg(data.name, data.palette, data.style, data.with_icon, data.layout)
    url = "/static/" + os.path.basename(path)
    return {"url": url, "path": path}

@router.post("/video/teaser")
def gen_teaser(brand: str, user=Depends(get_current_user)):
    path = make_teaser_mp4(brand)
    url = "/static/" + os.path.basename(path)
    return {"url": url, "path": path}
