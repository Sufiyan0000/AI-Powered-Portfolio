"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { Button } from "@/components/ui/button"
import { ArrowRight, BotMessageSquare, Briefcase, Code, GraduationCap, Lightbulb, MessageCircle, Send, Sparkles, User } from "lucide-react"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
}

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const chatPreviewRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create subtle particles
      if (particlesRef.current) {
        for (let i = 0; i < 100; i++) {
          const particle = document.createElement("div")
          particle.className = "particle absolute rounded-full"
          particle.style.width = `${Math.random() * 6 + 3}px`
          particle.style.height = particle.style.width
          particle.style.left = `${Math.random() * 100}%`
          particle.style.top = `${Math.random() * 100}%`
          particle.style.background = `oklch(0.45 0.18 ${250 + Math.random() * 30} / ${0.1 + Math.random() * 0.15})`
          particle.style.animationDelay = `${Math.random() * 5}s`
          particlesRef.current.appendChild(particle)
        }
      }

      // Animate title
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      )

      // Animate subtitle
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power3.out" }
      )

      // Animate buttons
      gsap.fromTo(
        buttonsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.6, ease: "power3.out" }
      )

      // Animate chat preview
      gsap.fromTo(
        chatPreviewRef.current,
        { opacity: 0, x: 50, scale: 0.95 },
        { opacity: 1, x: 0, scale: 1, duration: 1, delay: 0.5, ease: "power3.out" }
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const handleChatClick = () => {
    inputRef.current?.focus()
  }

  const responses: Record<string, string> = {
    "skills": "I specialize in full-stack development with React, Next.js, TypeScript, and Python. I'm also experienced in AI/ML with TensorFlow and PyTorch, cloud services (AWS, Vercel), and database technologies like PostgreSQL and MongoDB.",
    "experience": "I have 5+ years of experience building web applications and AI solutions. I've worked with startups and enterprises, leading teams to deliver scalable products. Currently, I focus on building intelligent applications that leverage the latest in AI technology.",
    "projects": "Some of my notable projects include an AI content generator (SaaS), a neural style transfer app, real-time analytics dashboards, and various e-commerce solutions. Each project showcases different aspects of my technical abilities.",
    "problem": "I approach problems by first understanding the core issue, then breaking it down into smaller, manageable tasks. I believe in iterative development, testing early, and always keeping the end-user in mind. Communication and collaboration are key parts of my process.",
    "default": "Thanks for your question! I'm Alex's AI assistant. I can tell you about his skills, experience, projects, and approach to development. What would you like to know?"
  }

  const initialPrompts = [
    { id: 'skills', icon: Code, text: "What are your main skills?" },
    { id: 'projects', icon: GraduationCap, text: "What projects have you worked on?" },
    { id: 'problem-solving', icon: Lightbulb, text: "How do you approach problem-solving?" }
  ]

  const [suggestedPrompts, setSuggestedPrompts] = useState(initialPrompts)

  const handlePromptClick = async (
    promptId: string,
    promptText: string
  ) => {
    setSuggestedPrompts((prev) =>
      prev.filter((prompt) => prompt.id !== promptId)
    )

    await handleSend(promptText)
  }

  function getResponse(input: string): string {
    const lower = input.toLowerCase()
    if (lower.includes("skill") || lower.includes("technology") || lower.includes("tech stack")) {
      return responses.skills
    }
    if (lower.includes("experience") || lower.includes("work") || lower.includes("career")) {
      return responses.experience
    }
    if (lower.includes("project") || lower.includes("portfolio") || lower.includes("built")) {
      return responses.projects
    }
    if (lower.includes("problem") || lower.includes("approach") || lower.includes("process") || lower.includes("solve")) {
      return responses.problem
    }
    return responses.default
  }

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hi! I'm Alex's AI assistant. Feel free to ask me anything about his skills, experience, or projects. How can I help you today?"
    }
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const handleSend = async (text?: string) => {
    const messageText = text || input
    if (!messageText.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: messageText
    }

    setMessages(prev => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // Simulate AI response delay
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000))

    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: "assistant",
      content: getResponse(messageText)
    }

    setIsTyping(false)
    setMessages(prev => [...prev, assistantMessage])
  }


  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden animated-gradient"
    >
      {/* Particles container */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none" />

      {/* Subtle gradient overlays */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-sm text-muted-foreground">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>React • FastAPI • LangChain</span>
            </div>

            <h1
              ref={titleRef}
              className="text-3xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance text-foreground"
            >
              <span className="gradient-text">GenAI & Full Stack</span>
              <br />
              <p>Developer Portfolio</p>
            </h1>

            <p
              ref={subtitleRef}
              className="text-lg md:text-xl text-muted-foreground max-w-lg text-pretty"
            >
              Building <span className="gradient-text">AI chatbots</span>, <span className="gradient-text">RAG applications</span>, and scalable web
              platforms using React, Next.js, FastAPI, Django, and
              LangChain.
            </p>

            <div ref={buttonsRef} className="flex flex-wrap gap-4">
              <a
                className="bg-primary px-3 py-2 flex items-center rounded-md hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-all group"
                href="#about"
              >
                Explore Portfolio
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-secondary group"
                onClick={handleChatClick}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat with AI
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-2xl md:text-3xl font-bold gradient-text">15+</div>
                <div className="text-sm text-muted-foreground">Projects Built</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold gradient-text">AI</div>
                <div className="text-sm text-muted-foreground">Chatbots & RAG Apps</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold gradient-text">Open</div>
                <div className="text-sm text-muted-foreground">For Opportunities</div>
              </div>
            </div>
          </div>

          {/* Right content - Chat Preview */}
          <div className="chat-animate w-full max-w-[650px] glass rounded-2xl overflow-hidden flex flex-col h-[500px]">
            {/* Chat Header */}
            <div className="flex items-center gap-3 p-4 border-b border-border">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="font-semibold text-foreground">AI Assistant</div>
                <div className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  Online
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${message.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${message.role === "user"
                        ? "bg-secondary"
                        : "bg-primary/10"
                      }`}
                  >
                    {message.role === "user" ? (
                      <User className="w-4 h-4 text-secondary-foreground" />
                    ) : (
                      <Sparkles className="w-4 h-4 text-primary" />
                    )}
                  </div>
                  <div
                    className={`rounded-xl px-4 py-3 max-w-[80%] ${message.role === "user"
                        ? "bg-primary text-primary-foreground rounded-tr-none"
                        : "bg-secondary rounded-tl-none"
                      }`}
                  >
                    <p className="text-sm">{message.content}</p>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-primary" />
                  </div>
                  <div className="bg-secondary rounded-xl rounded-tl-none px-4 py-3">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Prompts */}
            {suggestedPrompts.length !== 0 &&
              <div className="chat-animate mx-3 mt-2 space-y-4 lg:col-span-1">
                <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">
                  Suggested Questions
                </h3>
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {suggestedPrompts.map((prompt, index) => (
                    <button
                      key={index}
                      onClick={() => handlePromptClick(prompt.id, prompt.text)}
                      className="shrink-0 rounded-full border border-border px-4 py-2 text-sm whitespace-nowrap hover:border-primary hover:text-primary transition-all"
                    >
                      {/* <prompt.icon className="w-5 h-5 text-primary mb-2 group-hover:scale-110 transition-transform" /> */}
                      <p className="text-sm text-foreground">{prompt.text}</p>
                    </button>
                  ))}
                </div>
              </div>

            }

            {/* Input */}
            <div className="p-4 border-t border-border">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  handleSend()
                }}
                className="flex gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-secondary rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <Button
                  type="submit"
                  size="icon"
                  className="bg-primary hover:bg-primary/90 rounded-xl"
                  disabled={!input.trim() || isTyping}
                >
                  <Send className="w-4 h-4" />
                  <span className="sr-only">Send message</span>
                </Button>
              </form>
            </div>

          </div>
        </div>
      </div>


      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border-2 border-border flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  )
}
