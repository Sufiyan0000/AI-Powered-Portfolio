// 'use client'

// import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

// import { ChatMessage } from "@/types/chat";
// import { sendMessage } from "@/api/chatApi";

// interface ChatContextType {
//   messages: ChatMessage[];

//   isTyping: boolean;

//   input: string;
//   setInput: Dispatch<SetStateAction<string>>;

//   handleSend: (message?: string) => Promise<void>;
// }

// const ChatContext = createContext<ChatContextType | null>(null);

// export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
//   const [messages, setMessages] = useState<ChatMessage[]>([
//     {
//       id: crypto.randomUUID(),
//       role: "assistant",
//       content: "Hi ! I'm Sufiyan's AI assistant.",
//     },
//   ]);
//   const [input, setInput] = useState('')
//   const [isTyping, setIsTyping] = useState(false);

//   const handleSend = async (promptText ?: string) => {

//     const messageText = promptText || input

//     if (!messageText.trim() || isTyping) return;

//     if (!promptText){
//       setInput('')
//     }

//     const userMessage: ChatMessage = {
//       id: crypto.randomUUID(),
//       role: "user",
//       content: messageText,
//     };

//     setMessages((prev) => [...prev, userMessage]);

//     setIsTyping(true);

//     try {
//       const resp = await sendMessage({
//         message: messageText,
//       });

//       const assistantMessage: ChatMessage = {
//         id: crypto.randomUUID(),
//         role: "assistant",
//         content: resp.answer,
//       };

//       setMessages((prev) => [...prev, assistantMessage]);
//     } catch (error) {
//       console.log(error);

//       const errorMessage: ChatMessage = {
//         id: crypto.randomUUID(),
//         role: "assistant",
//         content:
//           "Sorry, I'm having trouble connecting to the server right now.",
//       };

//       setMessages((prev) => [...prev, errorMessage]);
//     } finally {
//         setIsTyping(false)
//     }
//   };

//   return (
//     <ChatContext.Provider value={{
//         messages,
//         isTyping,
//         handleSend,
//         input,
//         setInput
//     }}>
//         {children}
//     </ChatContext.Provider>
//   )
// };


// export const useChat = () => {
//     const context = useContext(ChatContext);

//     if (!context){
//         throw new Error(
//             'useChat must be used inside ChatProvider.'
//         )
//     }

//     return context;
// }