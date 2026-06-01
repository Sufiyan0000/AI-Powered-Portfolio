import { ChatRequest, ChatResponse } from "@/types/chat";
import api from "./axios";

export const sendMessage = async (
    data: {message: string}
) => {
    const resp = await api.post('/chat', data);

    return resp.data;
}