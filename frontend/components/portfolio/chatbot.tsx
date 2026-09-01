"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import {
  Send,
  Sparkles,
  User,
  Code2,
  Briefcase,
  GraduationCap,
  Lightbulb,
  Bot,
} from "lucide-react";
import { useChat } from "@/hooks/useChat";

gsap.registerPlugin(ScrollTrigger);

const suggestedPrompts = [
  {
    id: "skills",
    icon: Code2,
    emoji: "🧑‍💻",
    text: "What are your main skills?",
  },
  
  {
    id: "projects",
    icon: GraduationCap,
    emoji: "🚀",
    text: "What projects have you built?",
  },
  {
    id: "remote-work",
    icon: Briefcase,
    emoji: "🌍",
    text: "Are you open to remote work?",
  },
  {
    id: "freelance",
    icon: Code2,
    emoji: "🚀",
    text: "Do you take freelance projects?",
  },
  {
    id: "hourly-work",
    icon: Briefcase,
    emoji: "⏱️",
    text: "Do you take hourly projects?",
  },
  {
    id: "salary",
    icon: Briefcase,
    emoji: "💰",
    text: "What are your salary expectations?",
  },
]

export function Chatbot() {
  const sectionRef = useRef<HTMLElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".chat-animate",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  //  BACKEND CHATBOT(FASTAPI) CALL
  const chat = useChat();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chat.messages]);

  return (
    <section
      ref={sectionRef}
      id="chat"
      className="py-24 relative overflow-hidden bg-secondary/30"
    >
      {/* Subtle background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <div className="chat-animate inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-sm text-muted-foreground">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>AI-Powered</span>
          </div>
          <h2 className="chat-animate text-4xl md:text-5xl font-bold text-foreground">
            Chat with{" "}
            <span className="gradient-text">SufiQ - AI Assistant</span>
          </h2>
          <p className="chat-animate text-muted-foreground text-lg">
            Have questions? <span className="gradient-text">SufiQ</span> is here
            to help you learn more about my skills, experience, and projects.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-4 gap-6">
          {/* Suggested Prompts */}
          <div className="chat-animate hidden space-y-4 lg:col-span-1 lg:block">
            <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">
              Suggested Questions
            </h3>
            <div className="mx-10 md:mx-0 space-y-2 ">
              {suggestedPrompts.map((prompt, index) => (
                <button
                  key={index}
                  onClick={() => chat.handleSend(prompt.text)}
                  className="w-full glass rounded-xl p-4 text-left card-hover group"
                >
                  <prompt.icon className="w-5 h-5 text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-sm text-foreground">{prompt.text}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Chat Interface */}
          <div className="chat-animate lg:col-span-3 glass rounded-2xl overflow-hidden flex flex-col h-[650px] lg:h-[600px]">
            {/* Chat Header */}
            <div className="flex items-center gap-3 p-4 border-b border-border">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Bot className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="font-semibold text-foreground">
                  SufiQ - AI Portfolio Guide
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
                      <User className="w-5 h-5 text-secondary-foreground" />
                    ) : (
                      <Bot className="w-5 h-5 text-primary" />
                    )}
                  </div>
                  <div
                    className={`rounded-xl px-4 py-3 max-w-[80%] ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground rounded-tr-none"
                        : "bg-secondary rounded-tl-none"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.content}</p>
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

            {/* Input */}
            {/* Mobile Suggested Questions + Input */}
            <div className="border-t border-border">
              {/* Mobile Suggested Questions */}
              <div className="border-b border-border px-4 py-3 lg:hidden">
                <div className="mb-2 flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Suggested questions
                  </p>
                </div>

                <div className="flex gap-2 overflow-x-auto scrollbar-hide">
                  {suggestedPrompts.map((prompt) => {
                    const Icon = prompt.icon;

                    return (
                      <button
                        key={prompt.text}
                        type="button"
                        onClick={() => chat.handleSend(prompt.text)}
                        disabled={chat.isTyping}
                        className="
              flex
              shrink-0
              items-center
              gap-2
              rounded-full
              border
              border-border
              bg-secondary/60
              px-4
              py-2.5
              text-sm
              font-medium
              text-foreground
              transition-all
              duration-200
              hover:border-primary/30
              hover:bg-primary/5
              hover:text-primary
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
                      >
                        <Icon className="h-4 w-4 shrink-0 text-primary" />

                        <span>{prompt.text}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Input */}
              <div className="p-4">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    chat.handleSend();
                  }}
                  className="flex gap-2"
                >
                  <input
                    type="text"
                    value={chat.input}
                    disabled={chat.isTyping}
                    onChange={(e) => chat.setInput(e.target.value)}
                    placeholder="Ask SufiQ anything..."
                    className="
          min-w-0
          flex-1
          rounded-xl
          border
          border-border
          bg-secondary/70
          px-4
          py-3
          text-sm
          text-foreground
          placeholder:text-muted-foreground
          focus:outline-none
          focus:ring-2
          focus:ring-primary/40
        "
                  />

                  <Button
                    type="submit"
                    size="icon"
                    disabled={!chat.input.trim() || chat.isTyping}
                    className="
          h-11
          w-11
          shrink-0
          rounded-xl
          bg-primary
          hover:bg-primary/90
        "
                  >
                    <Send className="h-4 w-4" />

                    <span className="sr-only">Send message</span>
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
