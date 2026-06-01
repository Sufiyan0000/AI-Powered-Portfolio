from fastapi import APIRouter

from apps.services.vector_store_service import vector_store_service
from apps.services.ingestion import ingestion_service

router = APIRouter()

@router.post('/reindex')
def reindex():

    vector_store_service.reset_collection()

    chunks = ingestion_service.ingest_portfolio()

    return {
        'message': 'Portfolio reindex',
        'chunks': chunks
    }