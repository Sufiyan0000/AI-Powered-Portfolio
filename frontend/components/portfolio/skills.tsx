"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const skillCategories = [
  {
    title: "Frontend",
    description: "Building modern and responsive user interfaces",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "GSAP",
      "Framer Motion"
    ]
  },
  {
    title: "Backend",
    description: "Scalable APIs and backend systems",
    skills: [
      "FastAPI",
      "Django",
      "Python",
      "REST APIs",
      "SQL",
      "Authentication",
      "Pydantic"
    ]
  },
  {
    title: "Generative AI",
    description: "AI-powered applications and intelligent systems",
    skills: [
      "LangChain",
      "RAG",
      "AI Chatbots",
      "OpenAI APIs",
      "Prompt Engineering",
      "Vector Databases",
      "LLM Applications"
    ]
  }
]

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate skill cards
      gsap.fromTo(
        ".skill-category",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Animate progress bars
      gsap.fromTo(
        ".skill-progress",
        { width: 0 },
        {
          width: (index, target) => target.dataset.level + "%",
          duration: 1.2,
          stagger: 0.05,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-24 relative overflow-hidden bg-background"
    >
      {/* Subtle backgrounds */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <p className="text-primary font-medium">Technical Expertise</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Skills &{" "}
            <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-muted-foreground text-lg">
          Building modern web applications, scalable backend systems,
          and AI-powered experiences using cutting-edge technologies.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="skill-category glass rounded-2xl p-6 card-hover"
            >
              <h3 className="text-xl font-semibold mb-2 gradient-text">
                {category.title}
              </h3>

              <p className="text-sm text-muted-foreground mb-6">
                {category.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
              px-3
              py-2
              rounded-full
              bg-primary/10
              text-primary
              text-sm
              font-medium
              border
              border-primary/20
              hover:bg-primary
              hover:text-primary-foreground
              transition-all
              duration-300
            "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-12 glass rounded-2xl p-8">
          <h3 className="text-xl font-semibold mb-6 text-center text-foreground">Additional Tools & Platforms</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Git", "Docker", "Kubernetes", "AWS", "Vercel",
              "Firebase", "Supabase", "Redis", "MongoDB", "Prisma",
              "Jest", "Cypress", "Figma", "Linux", "CI/CD"
            ].map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 bg-secondary rounded-full text-sm text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
