from langchain_community.document_loaders import TextLoader, DirectoryLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter

from apps.services.vector_store_service import vector_store_service

from pathlib import Path

class IngestionService:
    
    def ingest_portfolio(self):

        loader = DirectoryLoader(
            'apps/data',
            glob='**/*.md',
            loader_cls=TextLoader
        )

        documents = loader.load()

        for doc in documents:
            doc.metadata['source_file'] = (
                Path(doc.metadata['source']).name
            )

        splitter = RecursiveCharacterTextSplitter(
            chunk_size=800,
            chunk_overlap=150
        )

        chunks = splitter.split_documents(
            documents
        )

        vector_store_service.vector_store.add_documents(
            chunks
        )

        return len(chunks)

ingestion_service = IngestionService()