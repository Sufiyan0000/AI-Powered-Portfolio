from pydantic import BaseModel, Field

class ChatRequest(BaseModel):
    message: str 

class ChatResponse(BaseModel):
    message: str