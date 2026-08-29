from apps.services.llm_service import llm_service
from apps.services.vector_store_service import vector_store_service

from apps.core.prompts import SYSTEM_PROMPT
from apps.core.chat_responses import get_predefined_answer


class ChatService:

    GREETINGS = {
        "hi",
        "hello",
        "hey",
        "good morning",
        "good afternoon",
        "good evening",
    }

    def chat(self, question: str) -> str:

        normalized_question = question.lower().strip()

        # -------------------------------------------------
        # 1. Greetings
        # -------------------------------------------------
        if normalized_question in self.GREETINGS:
            return (
                "👋 Hello! I'm SufiQ, Sufiyan's AI Portfolio Assistant. "
                "I can help you learn about his skills, projects, "
                "experience, education, and development journey."
            )

        # -------------------------------------------------
        # 2. Predefined answers
        # -------------------------------------------------
        predefined_answer = get_predefined_answer(question)

        if predefined_answer:
            return predefined_answer

        # -------------------------------------------------
        # 3. RAG fallback
        # -------------------------------------------------
        docs = vector_store_service.search(question)

        context = "\n\n".join(
            doc.page_content
            for doc in docs
        )

        prompt = f"""
{SYSTEM_PROMPT}

CONTEXT:
{context}

QUESTION:
{question}
"""

        return llm_service.generate(
            prompt=prompt
        )


chat_service = ChatService()