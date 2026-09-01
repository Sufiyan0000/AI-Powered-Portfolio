from fastapi import APIRouter, Header, HTTPException

from apps.services.vector_store_service import vector_store_service
from apps.services.ingestion import ingestion_service
from apps.core.config import settings


router = APIRouter()


@router.post("/reindex")
def reindex(x_admin_token: str | None = Header(default=None)):

    if x_admin_token != settings.ADMIN_REINDEX_TOKEN:
        raise HTTPException(
            status_code=401,
            detail="Invalid admin token",
        )

    vector_store_service.reset_collection()

    chunks = ingestion_service.ingest_portfolio()

    return {
        "message": "Portfolio reindex successful",
        "chunks": chunks,
    }