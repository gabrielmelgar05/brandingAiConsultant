import os, pathlib, time
from app.utils.settings import settings

def make_teaser_mp4(brand: str, accent: str = "#ffc700") -> str:
    # Stub simples: cria um MP4 vazio só pra testar fluxo (você pode trocar por FFmpeg depois)
    fname = f"{brand.lower()}-teaser-{int(time.time())}.mp4"
    path = os.path.join(settings.static_dir, fname)
    pathlib.Path(path).write_bytes(b"")  # placeholder
    return path
