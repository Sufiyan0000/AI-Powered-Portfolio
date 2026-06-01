"use client"

import { Sparkles, Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react"

const socials = [
  { icon: Github, href: "https://github.com/Sufiyan0000", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/muhammad-sufiyan-ali-5559aa295/", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "mailto:alimdsufiyan89@gmail.com", label: "Email" }
]

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative overflow-hidden border-t border-border bg-background">
      {/* Subtle background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Description */}
          <div className="space-y-4">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <span className="font-bold text-xl text-foreground">
                Sufiyan<span className="gradient-text">Ali</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground max-w-xs">
              Full-stack developer crafting intelligent digital experiences with 
              cutting-edge technology.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center justify-end gap-4">
            <div className="flex gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} <span></span> 
             Sufiyan Ali. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/60 mt-2">
            Built with{" "}
            <span className="gradient-text">Next.js</span>,{" "}
            <span className="gradient-text">Tailwind</span>, and{" "}
            <span className="gradient-text">AI</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
