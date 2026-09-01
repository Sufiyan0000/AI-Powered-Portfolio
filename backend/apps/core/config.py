from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    GEMINI_API_KEY: str

    CHROMA_PERSIST_DIR: str = "./chroma_db"

    EMBEDDING_MODEL: str = "BAAI/bge-small-en-v1.5"

    COLLECTION_NAME: str = "portfolio"

    APP_NAME: str = "AI-Powered Portfolio"

    DEBUG: bool = False

    CORS_ORIGINS: str = "http://localhost:3000"

    ADMIN_REINDEX_TOKEN: str

    model_config = SettingsConfigDict(
        env_file=".env",
        extra="ignore",
        case_sensitive=True,
    )

    @property
    def cors_origins_list(self) -> list[str]:
        return [
            origin.strip()
            for origin in self.CORS_ORIGINS.split(",")
            if origin.strip()
        ]


settings = Settings()