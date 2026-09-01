// hooks/useChat.ts

import { useCallback, useRef, useState } from "react";
import { ChatMessage } from "@/types/chat";
import { sendMessage } from "@/api/chatApi";

export const useChat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([{
    id: '1',
    role: 'assistant',
    content: "👋 Welcome! I'm Sufiyan's AI Assistant. I can help you learn about his projects, skills, technologies, certifications, education, and development journey. Ask me anything, and I'll be happy to help."
  }]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const abortControllerRef = useRef<AbortController | null>(null);

  const handleSend = useCallback(
    async (promptText?: string) => {
      const messageText = promptText ?? input;

      if (!messageText.trim()) return;

      if (isTyping) return;

      const userMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: "user",
        content: messageText,
      };

      setMessages((prev) => [...prev, userMessage]);

      if (!promptText) {
        setInput("");
      }

      setIsTyping(true);

      try {
        abortControllerRef.current?.abort();

        const controller = new AbortController();
        abortControllerRef.current = controller;

        const response = await sendMessage({message: messageText});

        // console.log(response)

        const assistantMessage: ChatMessage = {
          id: crypto.randomUUID(),
          role: "assistant",
          content: response.message,
        };

        setMessages((prev) => [...prev, assistantMessage]);
      } catch (error) {
        console.error(error);

        const errorMessage: ChatMessage = {
          id: crypto.randomUUID(),
          role: "assistant",
          content:
            "Sorry, I'm having trouble connecting right now. Please try again.",
        };

        setMessages((prev) => [...prev, errorMessage]);
      } finally {
        setIsTyping(false);
      }
    },
    [input, isTyping]
  );

  const clearChat = useCallback(() => {
    setMessages([]);
  }, []);

  return {
    messages,
    input,
    setInput,
    isTyping,
    handleSend,
    clearChat,
  };
};