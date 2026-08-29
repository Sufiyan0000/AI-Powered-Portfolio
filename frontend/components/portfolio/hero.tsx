"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Bot,
  Briefcase,
  Building2,
  Clock,
  Code,
  FileText,
  Globe,
  GraduationCap,
  Lightbulb,
  MessageCircle,
  Send,
  Sparkles,
  User,
  Wallet,
} from "lucide-react";
import { useChat } from "@/hooks/useChat";

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const chatPreviewRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create subtle particles
      if (particlesRef.current) {
        for (let i = 0; i < 60; i++) {
          const particle = document.createElement("div");
          particle.className = "particle absolute rounded-full";
          particle.style.width = `${Math.random() * 6 + 3}px`;
          particle.style.height = particle.style.width;
          particle.style.left = `${Math.random() * 100}%`;
          particle.style.top = `${Math.random() * 100}%`;
          particle.style.background = `oklch(0.45 0.18 ${250 + Math.random() * 30} / ${0.1 + Math.random() * 0.15})`;
          particle.style.animationDelay = `${Math.random() * 5}s`;
          particlesRef.current.appendChild(particle);
        }
      }

      // Animate title
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      );

      // Animate subtitle
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power3.out" },
      );

      // Animate buttons
      gsap.fromTo(
        buttonsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.6, ease: "power3.out" },
      );

      // Animate chat preview
      gsap.fromTo(
        chatPreviewRef.current,
        { opacity: 0, x: 50, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          delay: 0.5,
          ease: "power3.out",
        },
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleChatClick = () => {
    inputRef.current?.focus();
  };

  const chat = useChat();

  const initialPrompts = [
    {
      id: "skills",
      icon: Code,
      text: "What are your main skills?",
    },
    {
      id: "genai-projects",
      icon: GraduationCap,
      text: "What GenAI projects have you built?",
    },
    {
      id: "problem-solving",
      icon: Lightbulb,
      text: "How do you approach problem-solving?",
    },
    {
      id: "experience",
      icon: Briefcase,
      text: "Tell me about your experience",
    },
    {
      id: "remote-work",
      icon: Globe,
      text: "Are you open to remote work?",
    },
    {
      id: "hybrid-work",
      icon: Building2,
      text: "Are you comfortable with hybrid work?",
    },
    {
      id: "contract-work",
      icon: FileText,
      text: "Are you open to contract work?",
    },
    {
      id: "freelance",
      icon: Briefcase,
      text: "Do you take freelance projects?",
    },
    {
      id: "hourly-work",
      icon: Clock,
      text: "Do you take hourly projects?",
    },
    {
      id: "salary",
      icon: Wallet,
      text: "What are your salary expectations?",
    },
  ];

  const [suggestedPrompts, setSuggestedPrompts] = useState(initialPrompts);

  // BACKEND FASTAPI (CHATBOT ) INTEGRATION
  // const {messages, isTyping, input, setInput, handleSend} = useChat()

  const handlePromptClick = async (promptId: string, promptText: string) => {
    setSuggestedPrompts((prev) =>
      prev.filter((prompt) => prompt.id !== promptId),
    );

    await chat.handleSend(promptText);
  };

  const messagesEndRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden animated-gradient"
    >
      {/* Particles container */}
      <div
        ref={particlesRef}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Subtle gradient overlays */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-sm text-muted-foreground">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>GenAI • RAG • Full Stack</span>
            </div>

            <h1
              ref={titleRef}
              className="text-3xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance text-foreground"
            >
              <span className="gradient-text">Md Sufiyan Ali</span>
              <br />
              <span className="font-semibold">
                GenAI Engineer & Full Stack Developer
              </span>
            </h1>

            <p
              ref={subtitleRef}
              className="text-lg md:text-xl text-muted-foreground max-w-lg text-pretty"
            >
              I build intelligent{" "}
              <span className="gradient-text">
                AI Applications, RAG systems
              </span>{" "}
              and{" "}
              <span className="gradient-text">
                and Modern Full-Stack products that solve real-world problems.
              </span>
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
                <div className="text-2xl md:text-3xl font-bold gradient-text">
                  15+
                </div>
                <div className="text-sm text-muted-foreground">
                  Projects Built
                </div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold gradient-text">
                  2
                </div>
                <div className="text-sm text-muted-foreground">AI Projects</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold gradient-text">
                  2+
                </div>
                <div className="text-sm text-muted-foreground">
                  {" "}
                  Full-Stack Apps
                </div>
              </div>
            </div>
          </div>

          {/* Right content - Chat Preview */}
          <div
            className=" w-full max-w-[650px] glass rounded-2xl overflow-hidden flex flex-col h-[620px] sm:h-[600px] lg:h-[600px]"
            ref={chatPreviewRef}
          >
            {/* Chat Header */}
            <div className="flex items-center gap-3 p-4 border-b border-border">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Bot className="w-6 h-5 text-primary" />
              </div>
              <div>
                <div className="font-semibold text-foreground">
                  <span className="gradient-text">SufiQ</span> - Sufiyan's AI
                  Assistant
                </div>
                <div className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  Online
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {chat.messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${message.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                      message.role === "user" ? "bg-secondary" : "bg-primary/10"
                    }`}
                  >
                    {message.role === "user" ? (
                      <User className="w-4 h-4 text-secondary-foreground" />
                    ) : (
                      <Bot className="w-6 h-5 text-primary" />
                    )}
                  </div>
                  <div
                    className={`rounded-xl px-4 py-3 max-w-[80%] ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground rounded-tr-none"
                        : "bg-secondary rounded-tl-none"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">
                      {message.content}
                    </p>
                  </div>
                </div>
              ))}

              {chat.isTyping && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-primary" />
                  </div>
                  <div className="bg-secondary rounded-xl rounded-tl-none px-4 py-3">
                    <div className="flex gap-1">
                      <span
                        className="w-2 h-2 rounded-full bg-primary animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      />
                      <span
                        className="w-2 h-2 rounded-full bg-primary animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      />
                      <span
                        className="w-2 h-2 rounded-full bg-primary animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Prompts */}
            {suggestedPrompts.length !== 0 && (
              <div className="chat-animate mx-3 mt-2 space-y-3">
                <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">
                  Suggested Questions
                </h3>
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                  {suggestedPrompts.map((prompt) => {
                    const Icon = prompt.icon;

                    return (
                      <button
                        key={prompt.id}
                        type="button"
                        onClick={() =>
                          handlePromptClick(prompt.id, prompt.text)
                        }
                        disabled={chat.isTyping}
                        className="
          flex shrink-0 items-center gap-2
          rounded-full
          border border-border
          bg-secondary/60
          px-4 py-2
          text-sm font-medium
          text-foreground
          whitespace-nowrap
          transition-all duration-200
          hover:border-primary/30
          hover:bg-primary/5
          hover:text-primary
          disabled:cursor-not-allowed
          disabled:opacity-50
        "
                      >
                        <Icon className="h-4 w-4 text-primary" />

                        <span>{prompt.text}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-border">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  chat.handleSend();
                }}
                className="flex gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={chat.input}
                  disabled={chat.isTyping}
                  onChange={(e) => chat.setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-secondary rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <Button
                  type="submit"
                  size="icon"
                  className="bg-primary hover:bg-primary/90 rounded-xl"
                  disabled={!chat.input.trim() || chat.isTyping}
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
  );
}
