from apps.services.llm_service import llm_service
from apps.services.vector_store_service import vector_store_service

from apps.core.prompts import SYSTEM_PROMPT

class ChatService:

    GREETINGS = {
        "hi",
        "hello",
        "hey",
        "good morning",
        "good afternoon",
        "good evening",
        "who are you",
        "how are you",
    }

    def chat(self, question: str) -> str:

        normalized_question = question.lower().strip()

        if normalized_question in self.GREETINGS:
            return (
                "Hello! 👋 I'm Sufiyan's AI Portfolio Assistant. "
                "I can help you know about Sufiyan's projects, "
                "skills, experience, and education."
            )

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