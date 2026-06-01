from fastapi import FastAPI
from fastapi import APIRouter

from apps.schemas.chat import ChatRequest, ChatResponse
from apps.services.chat_service import chat_service

router = APIRouter()

@router.post('/', response_model=ChatResponse)
def chat(request: ChatRequest):

    answer = chat_service.chat(
        request.message
    )

    return ChatResponse(
        message=answer
    )