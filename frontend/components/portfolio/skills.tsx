"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Brain, Code2, Server, Wrench, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: "Generative AI",
    description:
      "Building intelligent applications powered by modern AI systems.",
    icon: Brain,
    featured: true,
    skills: [
      "LangChain",
      "RAG",
      "LLMs",
      "AI Chatbots",
      "Prompt Engineering",
      "Embeddings",
      "Vector Databases",
      "OpenAI APIs",
    ],
  },
  {
    title: "Frontend",
    description:
      "Creating modern, responsive, and interactive user experiences.",
    icon: Code2,
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "GSAP",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    description:
      "Building reliable APIs and backend systems for full-stack applications.",
    icon: Server,
    skills: [
      "FastAPI",
      "Django",
      "Python",
      "REST APIs",
      "SQL",
      "Authentication",
      "Pydantic",
    ],
  },
];

const ecosystemTools = [
  "Git",
  "Docker",
  "AWS",
  "Vercel",
  "Redis",
  "MongoDB",
  "Linux",
  "CI/CD",
];

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".skill-category",
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        ".ecosystem-card",
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".ecosystem-card",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative overflow-hidden bg-background py-24"
    >
      {/* Subtle background elements */}
      <div className="pointer-events-none absolute left-1/4 top-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl space-y-4 text-center">
          <div className="inline-flex items-center gap-2 text-sm font-medium text-primary">
            <Sparkles className="h-4 w-4" />
            Technical Expertise
          </div>

          <h2 className="text-4xl font-bold text-foreground md:text-5xl">
            Technologies I <span className="gradient-text">Build With</span>
          </h2>

          <p className="text-lg text-muted-foreground">
            A focused set of technologies I use to build intelligent, scalable,
            and modern digital products.
          </p>
        </div>

        {/* Main Skill Categories */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Featured Generative AI Card */}
          {/* Featured Generative AI Card */}
          {skillCategories
            .filter((category) => category.featured)
            .map((category) => {
              const Icon = category.icon;

              return (
                <div
                  key={category.title}
                  className="skill-category card-hover glass rounded-2xl p-8 lg:col-span-2"
                >
                  <div className="flex flex-col gap-7">
                    {/* Category Header */}
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>

                      <div>
                        <h3 className="text-2xl font-semibold text-foreground">
                          {category.title}
                        </h3>

                        <p className="mt-2 text-muted-foreground">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    {/* AI Skills */}
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="
                  rounded-full
                  border border-primary/20
                  bg-primary/10
                  px-4 py-2
                  text-sm font-medium
                  text-primary
                  transition-all duration-300
                  hover:border-primary/40
                  hover:bg-primary
                  hover:text-primary-foreground
                "
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}

          {/* Frontend + Backend */}
          {skillCategories
            .filter((category) => !category.featured)
            .map((category) => {
              const Icon = category.icon;

              return (
                <div
                  key={category.title}
                  className="skill-category card-hover glass rounded-2xl p-7"
                >
                  <div className="mb-6 flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {category.title}
                      </h3>

                      <p className="mt-1 text-sm text-muted-foreground">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-border bg-secondary/60 px-3 py-2 text-sm font-medium text-foreground transition-all duration-300 hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
        </div>

        {/* Ecosystem */}
        <div className="ecosystem-card mt-8 glass rounded-2xl p-7">
          <div className="mb-6 flex flex-col items-center gap-2 text-center">
            <div className="flex items-center gap-2">
              <Wrench className="h-5 w-5 text-primary" />

              <h3 className="text-xl font-semibold text-foreground">
                Ecosystem
              </h3>
            </div>

            <p className="text-sm text-muted-foreground">
              Tools and platforms I use throughout the development workflow.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {ecosystemTools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-border bg-secondary/60 px-4 py-2 text-sm font-medium text-secondary-foreground transition-all duration-300 hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
