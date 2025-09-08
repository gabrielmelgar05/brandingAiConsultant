import os, re, svgwrite
from app.utils.settings import settings

def _slug(s: str) -> str:
    return re.sub(r"[^a-z0-9\-]+", "-", s.strip().lower())

def generate_logo_svg(name: str, palette: list[str], style: str, with_icon: bool, layout: str) -> str:
    primary = palette[0] if palette else "#000000"
    secondary = palette[1] if len(palette) > 1 else "#ffffff"
    accent = palette[2] if len(palette) > 2 else "#ffc700"

    dwg = svgwrite.Drawing(size=("1200px","400px"), profile="tiny")
    bg = dwg.rect(insert=(0,0), size=("100%","100%"), fill=secondary)
    dwg.add(bg)

    # ícone simples
    if with_icon:
        dwg.add(dwg.circle(center=(100,200), r=70, fill=accent, opacity=0.9))
        dwg.add(dwg.rect(insert=(75,175), size=(50,50), fill=primary, rx=8))

    # texto
    dwg.add(dwg.text(name, insert=(220,230), fill=primary, font_size="120px", font_weight="700", font_family="Arial"))

    # linha estilística
    dwg.add(dwg.line(start=(220,250), end=(900,250), stroke=accent, stroke_width=8))

    fname = f"{_slug(name)}-logo-{layout}{'-icon' if with_icon else ''}.svg"
    path = os.path.join(settings.static_dir, fname)
    dwg.saveas(path)
    return path
