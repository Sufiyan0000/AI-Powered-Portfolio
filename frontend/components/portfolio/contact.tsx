"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { 
  Send, 
  Github, 
  Linkedin, 
  Twitter, 
  Mail,
  MapPin,
  ArrowUpRight
} from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const socials = [
  { icon: Github, label: "GitHub", href: "#", username: "@sufiyan0000" },
  { icon: Linkedin, label: "LinkedIn", href: "#", username: "Muhammad Sufiyan Ali" },
  { icon: Twitter, label: "Twitter", href: "#", username: "@alexchendev" },
  { icon: Mail, label: "Email", href: "mailto:alimdsufiyan89@gmail.com", username: "alimdsufiyan89@gmail.com" }
]

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-animate",
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
            toggleActions: "play none none reverse"
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setSubmitted(true)
    setFormState({ name: "", email: "", message: "" })
    
    // Reset after showing success
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-24 relative overflow-hidden bg-secondary/30"
    >
      {/* Subtle background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <p className="contact-animate text-primary font-medium">Get In Touch</p>
          <h2 className="contact-animate text-4xl md:text-5xl font-bold text-foreground">
            Let&apos;s Build Something{" "}
            <span className="gradient-text">Amazing</span>
          </h2>
          <p className="contact-animate text-muted-foreground text-lg">
            Have a project in mind or just want to chat? I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="contact-animate space-y-8">
            <div className="glass rounded-2xl p-8 space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">Contact Information</h3>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <a href="mailto:alimdsufiyan89@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    alimdsufiyan89@gmail.com                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p className="text-muted-foreground">Ranchi, Jharkhand</p>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">Connect with me</p>
                <div className="flex gap-3">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all group"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5 group-hover:text-primary transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass rounded-xl p-4 flex items-center justify-between card-hover group"
                >
                  <div className="flex items-center gap-4">
                    <social.icon className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">{social.label}</p>
                      <p className="text-sm text-muted-foreground">{social.username}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-animate">
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">Send a Message</h3>

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) => setFormState(s => ({ ...s, name: e.target.value }))}
                    required
                    className="w-full bg-secondary rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={(e) => setFormState(s => ({ ...s, email: e.target.value }))}
                    required
                    className="w-full bg-secondary rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState(s => ({ ...s, message: e.target.value }))}
                    required
                    className="w-full bg-secondary rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90"
                disabled={isSubmitting || submitted}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : submitted ? (
                  "Message Sent!"
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
