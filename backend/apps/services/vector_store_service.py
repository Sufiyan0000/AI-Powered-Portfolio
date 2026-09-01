from langchain_chroma import Chroma
from langchain_huggingface import HuggingFaceEmbeddings

from apps.core.config import settings


class VectorStoreService:

    def __init__(self):
        self._embeddings = None
        self._vector_store = None

    @property
    def embeddings(self):
        if self._embeddings is None:
            self._embeddings = HuggingFaceEmbeddings(
                model_name=settings.EMBEDDING_MODEL
            )

        return self._embeddings

    @property
    def vector_store(self):
        if self._vector_store is None:
            self._vector_store = Chroma(
                collection_name=settings.COLLECTION_NAME,
                embedding_function=self.embeddings,
                persist_directory=settings.CHROMA_PERSIST_DIR,
            )

        return self._vector_store

    def search(self, query: str, k: int = 4):
        return self.vector_store.similarity_search(
            query=query,
            k=k,
        )

    def reset_collection(self):
        try:
            self.vector_store.delete_collection()
        except Exception:
            pass

        self._vector_store = Chroma(
            collection_name=settings.COLLECTION_NAME,
            embedding_function=self.embeddings,
            persist_directory=settings.CHROMA_PERSIST_DIR,
        )


vector_store_service = VectorStoreService()