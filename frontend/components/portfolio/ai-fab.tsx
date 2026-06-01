"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, X, Send, Sparkles, User, Minimize2 } from "lucide-react"
import { gsap } from "gsap"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
}

const responses: Record<string, string> = {
  skills: "I specialize in React, Next.js, TypeScript, Python, and AI/ML technologies. My expertise spans frontend, backend, and machine learning applications.",
  experience: "I have 5+ years of experience building web applications and AI solutions for startups and enterprises.",
  projects: "Check out my projects section! I've built AI content generators, analytics dashboards, and e-commerce platforms.",
  contact: "You can reach me at hello@alexchen.dev or connect with me on LinkedIn and GitHub!",
  default: "Hi! I'm Alex's AI assistant. Ask me about his skills, experience, or projects!"
}

function getResponse(input: string): string {
  const lower = input.toLowerCase()
  if (lower.includes("skill") || lower.includes("tech")) return responses.skills
  if (lower.includes("experience") || lower.includes("work")) return responses.experience
  if (lower.includes("project")) return responses.projects
  if (lower.includes("contact") || lower.includes("email") || lower.includes("reach")) return responses.contact
  return responses.default
}

export function AIFab() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hi! I'm Alex's AI assistant. How can I help you today?"
    }
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const fabRef = useRef<HTMLButtonElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  useEffect(() => {
    if (isOpen && panelRef.current) {
      gsap.fromTo(
        panelRef.current,
        { opacity: 0, scale: 0.9, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.3, ease: "back.out(1.7)" }
      )
    }
  }, [isOpen])

  // Pulse animation for FAB
  useEffect(() => {
    if (!isOpen && fabRef.current) {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 3 })
      tl.to(fabRef.current, { scale: 1.1, duration: 0.3, ease: "power2.out" })
        .to(fabRef.current, { scale: 1, duration: 0.3, ease: "power2.in" })
    }
  }, [isOpen])

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input
    }

    setMessages(prev => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 800))

    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: "assistant",
      content: getResponse(input)
    }

    setIsTyping(false)
    setMessages(prev => [...prev, assistantMessage])
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Panel */}
      {isOpen && (
        <div
          ref={panelRef}
          className="absolute bottom-16 right-0 w-80 sm:w-96 bg-background border border-border rounded-2xl overflow-hidden shadow-xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border bg-secondary/30">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-sm text-foreground">AI Assistant</p>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  Online
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-secondary"
              onClick={() => setIsOpen(false)}
            >
              <Minimize2 className="w-4 h-4" />
            </Button>
          </div>

          {/* Messages */}
          <div className="h-72 overflow-y-auto p-4 space-y-3 bg-background">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-2 ${message.role === "user" ? "flex-row-reverse" : ""}`}
              >
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs ${
                    message.role === "user" ? "bg-secondary" : "bg-primary/10"
                  }`}
                >
                  {message.role === "user" ? (
                    <User className="w-3 h-3 text-secondary-foreground" />
                  ) : (
                    <Sparkles className="w-3 h-3 text-primary" />
                  )}
                </div>
                <div
                  className={`rounded-xl px-3 py-2 max-w-[75%] text-sm ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground rounded-tr-none"
                      : "bg-secondary text-secondary-foreground rounded-tl-none"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <Sparkles className="w-3 h-3 text-primary" />
                </div>
                <div className="bg-secondary rounded-xl rounded-tl-none px-3 py-2">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSend()
            }}
            className="p-3 border-t border-border flex gap-2 bg-background"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 bg-secondary rounded-xl px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <Button
              type="submit"
              size="icon"
              className="bg-primary hover:bg-primary/90 rounded-xl"
              disabled={!input.trim() || isTyping}
            >
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </div>
      )}

      {/* FAB Button */}
      <button
        ref={fabRef}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center transition-all shadow-lg ${
          isOpen
            ? "bg-secondary text-foreground"
            : "bg-primary text-primary-foreground hover:bg-primary/90"
        }`}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>
    </div>
  )
}
