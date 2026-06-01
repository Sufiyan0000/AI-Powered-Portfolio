from apps.services.llm_service import llm_service
from apps.services.vector_store_service import vector_store_service

from apps.core.prompts import SYSTEM_PROMPT

class ChatService:

    def chat(self, question: str) -> str:

        docs = vector_store_service.search(
            question
        )

        context = '\n\n'.join(
            doc.page_content
            for doc in docs
        )

        prompt = f"""
        {SYSTEM_PROMPT}

        CONTEXT: {context}

        QUESTION: {question}
        
        """

        answer = llm_service.generate(prompt=prompt)

        return answer

chat_service = ChatService()