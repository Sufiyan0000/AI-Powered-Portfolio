from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from apps.api.chat import router as chat_router
from apps.api.admin import router as admin_router

app = FastAPI(
    title="AI-Powered Portfolio API",
    version= '1.0.0'
)

## CORS-MIDDLEWARE
app.add_middleware(
    CORSMiddleware,
    allow_origins=['http://localhost:3000','http:127.0.0.1:3000'],
    allow_credentials= True,
    allow_methods= ['*'],
    allow_headers= ['*']
)

app.include_router(
    chat_router,
    prefix='/api/chat',
    tags=['Chat']
)

app.include_router(
    admin_router,
    prefix='/admin',
    tags=['admin']
)