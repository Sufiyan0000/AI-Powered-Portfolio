"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Badge } from "@/components/ui/badge";
import { Code2, Brain, Rocket, Coffee } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Python",
  "Django",
  "FastAPI",
  "LangChain",
  "LangGraph",
  "VectorDB",
  "ChromaDB",
];

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code following best practices",
  },
  {
    icon: Brain,
    title: "AI Integration",
    description: "Building intelligent features with cutting-edge ML models",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimizing for speed and seamless user experiences",
  },
  {
    icon: Coffee,
    title: "Problem Solver",
    description: "Tackling complex challenges with creative solutions",
  },
];

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-animate",
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

      gsap.fromTo(
        ".skill-badge",
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".skills-container",
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
      id="about"
      className="py-24 relative overflow-hidden bg-background"
    >
      {/* Subtle background */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={contentRef}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left - Image & Info */}
          <div className="about-animate relative">
            <div className="glass rounded-3xl p-8 relative overflow-hidden card-hover">
              {/* Profile Photo */}
              <div className="aspect-square max-w-md mx-auto rounded-2xl bg-gradient-to-br from-primary/10 via-secondary to-primary/5 overflow-hidden relative">
                <Image
                  src="/profile.webp"
                  alt="Sufiyan — Full Stack & GenAI Developer"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 448px"
                />

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 bg-white border border-border rounded-lg px-3 py-1 text-sm shadow-sm">
                  <span className="text-green-500">●</span> Available for work
                </div>
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-1 -right-2 glass rounded-xl p-4 shadow-lg">
                <div className="text-xl font-bold gradient-text">GenAI</div>
                <div className="text-sm text-muted-foreground">Developer</div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="about-animate text-primary font-medium">About Me</p>
              <h2 className="about-animate text-4xl md:text-5xl font-bold text-foreground">
                Building
                <span className="gradient-text"> Intelligent </span>
                <br className="hidden md:block" />
                Web Applications
              </h2>
            </div>

            <p className="about-animate text-lg text-muted-foreground text-pretty">
              I&apos;m Md Sufiyan Ali, a Full Stack and Generative AI Developer
              specializing in React, Next.js, FastAPI, Django, LangChain, and
              RAG applications.
            </p>

            <p className="about-animate text-lg text-muted-foreground text-pretty">
              <span className="gradient-text font-bold text-xl">
                I build intelligent web applications
              </span>
              , AI chatbots, and end-to-end solutions that combine modern
              frontend experiences with scalable backend systems. My focus is on
              creating practical AI-powered products that deliver real value and
              solve real-world problems.
            </p>

            <p className="about-animate text-lg text-muted-foreground text-pretty">
              {" "}
              <span className="gradient-text text-xl font-bold">
                Currently exploring
              </span>{" "}
              advanced AI agents, LLM applications, and modern software
              engineering practices while continuously building and learning.
            </p>

            {/* Skills */}
            <div className="skills-container space-y-4">
              <h3 className="about-animate font-semibold text-foreground">
                Technologies I Work With
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="skill-badge px-4 py-2 text-sm bg-secondary hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="about-animate glass rounded-xl p-4 group card-hover"
                >
                  <item.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold mb-1 text-foreground">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
