import ollama
from app.utils.settings import settings

def chat(prompt: str) -> str:
    res = ollama.chat(
        model=settings.ollama_model,
        messages=[{"role": "user", "content": prompt}],
    )
    return res["message"]["content"]
