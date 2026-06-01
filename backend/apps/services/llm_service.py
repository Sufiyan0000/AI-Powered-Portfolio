from langchain_google_genai import ChatGoogleGenerativeAI

from apps.core.config import settings

class LLMService:

    def __init__(self):
        self.llm = ChatGoogleGenerativeAI(
            model= 'gemini-2.5-flash',
            google_api_key= settings.GEMINI_API_KEY,
            temperature= 0.3
        )

    def generate(self,prompt:str) -> str:

        resp = self.llm.invoke(prompt)
        return resp.content

llm_service = LLMService()