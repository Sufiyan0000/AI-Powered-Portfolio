from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):

    GEMINI_API_KEY: str

    CHROMA_PERSIST_DIR: str = './chroma_db'

    EMBEDDING_MODEL: str = 'BAAI/bge-small-en-v1.5'

    COLLECTION_NAME: str = 'portfolio'
    APP_NAME: str = "AI-Powered Portfolio"

    DEBUG: bool = True

    model_config = SettingsConfigDict(
        env_file = '.env',
        extra = 'ignore',
        case_sensitive= True
    )

settings = Settings()