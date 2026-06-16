import { sendMessage } from "@/api/chatApi";
import { ChatMessage } from "@/types/chat";
import { Dispatch, SetStateAction, useState } from "react";


  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (
      setMessages : Dispatch<SetStateAction<ChatMessage[]>>,
      promptText ?: string, 
   ) => {

    const messageText = promptText || input

    if (!messageText.trim() || isTyping) return;

    if (!promptText){
      setInput('')
    }

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: messageText,
    };

    setMessages((prev) => [...prev, userMessage]);

    setIsTyping(true);

    try {
      const resp = await sendMessage({
        message: messageText,
      });

      const assistantMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: resp.answer,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.log(error);

      const errorMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content:
          "Sorry, I'm having trouble connecting to the server right now.",
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
        setIsTyping(false)
    }
  };