"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ExternalLink,
  Github,
  ArrowUpRight,
} from "lucide-react"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

type Project = {
  title: string
  description: string
  image: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
  status?: "live"
}

const projects: Project[] = [
  {
    title: "DocAnalyzer",
    description:
      "An AI-powered document assistant that enables users to upload PDFs and ask questions using RAG, semantic search, and LLM-powered responses.",
    image: "/projects/DocAnalyzer.png",
    tags: [
      "Python",
      "FastAPI",
      "LangChain",
      "OpenAI",
      "ChromaDB",
      "RAG",
    ],
    liveUrl: "https://analyze-doc.streamlit.app/",
    githubUrl: "https://github.com/Sufiyan0000/DocAnalyzer",
    featured: true,
    status: "live",
  },

  {
    title: "AI-Powered Portfolio",
    description:
      "An interactive developer portfolio powered by SufiQ, a personal AI assistant that provides contextual insights into my projects, skills, experience, and development journey.",
    image: "/projects/ai-powered-portfolio.png",
    tags: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "LangChain",
      "RAG",
    ],
    githubUrl: "https://github.com/Sufiyan0000/AI-Powered-Portfolio",
    featured: true,
  },

  {
    title: "BookMyShow",
    description:
      "A full-stack movie booking platform with movie discovery, show scheduling, interactive seat selection, and end-to-end booking workflows backed by REST APIs.",
    image: "/projects/BookMyShow.png",
    tags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Django",
      "DRF",
    ],
    githubUrl: "https://github.com/Sufiyan0000/BookMyShow",
  },

  {
    title: "StrideX",
    description:
      "A full-stack e-commerce platform inspired by modern sneaker experiences, featuring product discovery, filtering, cart management, and a responsive shopping interface.",
    image: "/projects/StrideX.png",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Django",
      "DRF",
    ],
    githubUrl: "https://github.com/Sufiyan0000/StrideX",
  },

  {
    title: "Villa Agency",
    description:
      "A responsive real estate experience featuring property listings, reusable UI components, and a clean, modern interface designed for intuitive property discovery.",
    image: "/projects/Villa.png",
    tags: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "Responsive Design",
    ],
    githubUrl:
      "https://github.com/Sufiyan0000/Villa-Agency-Project",
  },
]

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-card",
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const featuredProject = projects.find(
    (project) => project.featured
  ) ?? projects[0]

  const secondaryProjects = projects.filter(
    (project) => project !== featuredProject
  )

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative overflow-hidden bg-secondary/30 py-24"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-2xl space-y-4 text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">
            Featured Work
          </p>

          <h2 className="text-4xl font-bold text-foreground md:text-5xl">
            Selected{" "}
            <span className="gradient-text">Projects</span>
          </h2>

          <p className="text-lg text-muted-foreground">
            A selection of projects showcasing my work across
            GenAI, full-stack development, and modern web
            applications.
          </p>
        </div>

        {/* =========================================================
            FEATURED PROJECT
        ========================================================= */}
        <article className="project-card group mb-6">
          <div className="glass overflow-hidden rounded-3xl card-hover">
            <div className="grid lg:grid-cols-2">
              {/* Featured Image */}
              <a
                href={
                  featuredProject.liveUrl ??
                  featuredProject.githubUrl
                }
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${featuredProject.title} project`}
                className="group/image relative block h-64 overflow-hidden bg-muted lg:h-[360px]"
              >
                <Image
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  fill
                  priority
                  className="object-cover transition-transform duration-500 group-hover/image:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                {/* Image Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />

                {/* View Project Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover/image:opacity-100">
                  <div className="flex items-center gap-2 rounded-full border border-border bg-background/90 px-4 py-2 text-sm font-medium shadow-lg backdrop-blur-sm">
                    View Project

                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/image:-translate-y-0.5 group-hover/image:translate-x-0.5" />
                  </div>
                </div>

                {/* Project Status */}
                <div className="absolute left-5 top-5 flex items-center gap-2">
                  <span className="rounded-full border border-border bg-white/90 px-3 py-1 text-xs font-medium shadow-sm backdrop-blur-sm">
                    Featured
                  </span>

                  {featuredProject.status === "live" && (
                    <span className="flex items-center gap-1.5 rounded-full border border-border bg-white/90 px-3 py-1 text-xs font-medium shadow-sm backdrop-blur-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                      Live
                    </span>
                  )}
                </div>
              </a>

              {/* Featured Content */}
              <div className="flex flex-col justify-center p-7 lg:p-8">
                <div className="mb-5">
                  <p className="mb-2 text-sm font-medium text-primary">
                    AI / RAG
                  </p>

                  <h3 className="mb-3 text-3xl font-bold text-foreground">
                    {featuredProject.title}
                  </h3>

                  <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
                    {featuredProject.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-7 flex flex-wrap gap-2">
                  {featuredProject.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-secondary/80 px-3 py-1"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-2">
                  {featuredProject.liveUrl && (
                    <Button
                      asChild
                      size="sm"
                      className="group/btn"
                    >
                      <a
                        href={featuredProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo

                        <ExternalLink className="ml-2 h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                      </a>
                    </Button>
                  )}

                  {featuredProject.githubUrl && (
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="group/btn border-border hover:border-primary hover:bg-primary/5"
                    >
                      <a
                        href={featuredProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub

                        <Github className="ml-2 h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* =========================================================
            SECONDARY PROJECTS
        ========================================================= */}
        <div className="grid gap-6 md:grid-cols-2">
          {secondaryProjects.map((project) => (
            <article
              key={project.title}
              className="project-card group"
            >
              <div className="glass flex h-full flex-col overflow-hidden rounded-2xl card-hover">
                {/* Project Image */}
                <a
                  href={
                    project.liveUrl ??
                    project.githubUrl
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} project`}
                  className="group/image relative block h-52 overflow-hidden bg-muted"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-[center_40%] transition-transform duration-500 group-hover/image:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-background/20 opacity-0 transition-all duration-300 group-hover/image:bg-background/30 group-hover/image:opacity-100">
                    <div className="flex items-center gap-2 rounded-full border border-border bg-background/90 px-4 py-2 text-sm font-medium shadow-lg backdrop-blur-sm">
                      View Project

                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/image:-translate-y-0.5 group-hover/image:translate-x-0.5" />
                    </div>
                  </div>
                </a>

                {/* Project Content */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                      {project.title}
                    </h3>

                    <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                  </div>

                  <p className="mb-5 text-sm leading-6 text-muted-foreground">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-secondary/80 text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="mt-auto flex items-center gap-2">
                    {project.liveUrl && (
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="group/btn border-border hover:border-primary hover:bg-primary/5"
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live Demo

                          <ExternalLink className="ml-2 h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                        </a>
                      </Button>
                    )}

                    {project.githubUrl && (
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="group/btn border-border hover:border-primary hover:bg-primary/5"
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub

                          <Github className="ml-2 h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}