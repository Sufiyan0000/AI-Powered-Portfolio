export interface ChatMessage {
    id: string,
    role: 'user' | 'assistant',
    content: string
}

export interface ChatRequest{
    message: string
}

export interface ChatResponse{
    answer: string
}