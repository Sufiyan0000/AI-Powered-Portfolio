from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from apps.api.chat import router as chat_router
from apps.api.admin import router as admin_router
from apps.core.config import settings


app = FastAPI(
    title=settings.APP_NAME,
    version="1.0.0",
    debug=settings.DEBUG,
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins_list,
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["Content-Type", "Authorization"],
)


app.include_router(
    chat_router,
    prefix="/api/chat",
    tags=["Chat"],
)


app.include_router(
    admin_router,
    prefix="/admin",
    tags=["Admin"],
)