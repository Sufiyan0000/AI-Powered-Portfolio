from langchain_chroma import Chroma
from langchain_huggingface import HuggingFaceEmbeddings

from apps.core.config import settings


class VectorStoreService:

    def __init__(self):

        self.embeddings = HuggingFaceEmbeddings(
            model_name=settings.EMBEDDING_MODEL
        )

        self.vector_store = Chroma(
            collection_name=settings.COLLECTION_NAME,
            embedding_function=self.embeddings,
            persist_directory=settings.CHROMA_PERSIST_DIR
        )

    def search(self, query: str, k: int = 4):

        return self.vector_store.similarity_search(
            query=query,
            k=k
        )

    def reset_collection(self):

        try:
            self.vector_store.delete_collection()
        except Exception:
            pass

        self.vector_store = Chroma(
            collection_name=settings.COLLECTION_NAME,
            embedding_function=self.embeddings,
            persist_directory=settings.CHROMA_PERSIST_DIR
        )


vector_store_service = VectorStoreService()