import { Navbar } from "@/components/portfolio/navbar"
import { Hero } from "@/components/portfolio/hero"
import { About } from "@/components/portfolio/about"
import { Projects } from "@/components/portfolio/projects"
import { Skills } from "@/components/portfolio/skills"
import { Chatbot } from "@/components/portfolio/chatbot"
import { Experience } from "@/components/portfolio/experience"
import { Contact } from "@/components/portfolio/contact"
import { Footer } from "@/components/portfolio/footer"
import { AIFab } from "@/components/portfolio/ai-fab"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Chatbot />
      <Experience />
      <Contact />
      <Footer />
      <AIFab />
    </main>
  )
}
