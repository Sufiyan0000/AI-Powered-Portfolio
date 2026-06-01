"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowUpRight } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    title: "AI Content Generator",
    description: "Full-stack SaaS platform that generates marketing content using GPT-4. Features real-time collaboration and analytics dashboard.",
    image: "/project-1.jpg",
    tags: ["Next.js", "OpenAI", "Prisma", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    title: "Neural Style Transfer",
    description: "Deep learning application that applies artistic styles to images using convolutional neural networks.",
    image: "/project-2.jpg",
    tags: ["Python", "PyTorch", "FastAPI", "React"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    title: "Real-time Analytics",
    description: "Dashboard for monitoring business metrics with live updates, custom visualizations, and AI-powered insights.",
    image: "/project-3.jpg",
    tags: ["TypeScript", "D3.js", "WebSockets", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    title: "Smart Task Manager",
    description: "Productivity app with AI-powered task prioritization, natural language processing, and smart scheduling.",
    image: "/project-4.jpg",
    tags: ["React Native", "Node.js", "MongoDB", "NLP"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    title: "E-commerce Platform",
    description: "Headless commerce solution with personalized recommendations and automated inventory management.",
    image: "/project-5.jpg",
    tags: ["Next.js", "Shopify", "GraphQL", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    title: "Voice Assistant API",
    description: "Conversational AI API supporting multiple languages with emotion detection and context awareness.",
    image: "/project-6.jpg",
    tags: ["Python", "TensorFlow", "gRPC", "Docker"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  }
]

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-card",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".projects-grid",
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const getBentoClass = (index: number) => {
    switch (index) {
      case 0: 
        return 'md:col-span-2'
      
      case 1:
        return 'md:col-span-1'

    case 2:
        return 'md:col-span-1'

    case 3:
        return 'md:col-span-1'

    case 4:
        return 'md:col-span-1'

    case 5:
        return 'md:col-span-2'

    default :
        return 'md:col-span-1'
  }
}

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-24 relative overflow-hidden bg-secondary/30"
    >
      {/* Subtle backgrounds */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <p className="text-primary font-medium">Featured Work</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Projects That{" "}
            <span className="gradient-text">Define Me</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A selection of projects showcasing my expertise in full-stack development 
            and AI integration.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid grid auto-rows-[500px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 lg:mx-20">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`project-card group relative ${getBentoClass(index) }`}
            >
              <div className="glass rounded-2xl overflow-hidden h-full flex flex-col card-hover">
                {/* Image */}
                <div className="relative aspect-video h-[200px] md:h-auto overflow-hidden bg-gradient-to-br from-primary/10 via-secondary to-primary/5">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-bold text-foreground/10">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button
                      size="icon"
                      variant="outline"
                      className="rounded-full border-border hover:border-primary hover:bg-primary/10"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-5 h-5" />
                        <span className="sr-only">View live demo</span>
                      </a>
                    </Button>
                    <Button
                      size="icon"
                      variant="outline"
                      className="rounded-full border-border hover:border-primary hover:bg-primary/10"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5" />
                        <span className="sr-only">View source code</span>
                      </a>
                    </Button>
                  </div>

                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-white border border-border rounded-full px-3 py-1 text-xs font-medium shadow-sm">
                      Featured
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  
                  <p className="text-muted-foreground text-sm flex-1 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs bg-secondary/80 hover:bg-secondary"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="group border-border hover:border-primary"
          >
            View All Projects
            <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
