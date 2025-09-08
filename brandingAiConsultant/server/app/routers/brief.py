from fastapi import APIRouter, Depends
from app.models.schemas import BriefIn
from app.services.llm import chat
from app.services.auth import get_current_user

router = APIRouter(prefix="/brief", tags=["brief"])

@router.post("/analyze")
def analyze_brief(data: BriefIn, user=Depends(get_current_user)):
    prompt = f"""
Você é um consultor de branding. Analise o brief abaixo e devolva:
- Público-alvo (objetivo e realista)
- Proposta de valor (1 frase)
- Tom de voz (3 bullets)
- Paleta sugerida (hex)
- Roteiro de próximos 30 dias (realista, orçamento: {data.budget})

Brief:
ideia="{data.idea}"
segmento="{data.segment}"
público="{data.audience}"
meta="{data.goal}"
""".strip()
    result = chat(prompt)
    return {"analysis": result}
