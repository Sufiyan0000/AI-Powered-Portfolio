"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { MapPin, Calendar } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const experiences = [
  {
    title: "Senior Full-Stack Developer",
    company: "TechVision AI",
    location: "San Francisco, CA",
    period: "2023 - Present",
    description: "Leading development of AI-powered SaaS products. Architecting scalable solutions using Next.js, Python, and cloud services. Mentoring junior developers and establishing best practices.",
    highlights: ["Led team of 5 developers", "Increased performance by 40%", "Implemented CI/CD pipelines"]
  },
  {
    title: "Full-Stack Developer",
    company: "InnovateTech",
    location: "New York, NY",
    period: "2021 - 2023",
    description: "Built and maintained multiple client-facing web applications. Collaborated with design and product teams to deliver high-quality features. Integrated third-party APIs and payment systems.",
    highlights: ["Delivered 15+ projects", "Reduced load time by 60%", "Built reusable component library"]
  },
  {
    title: "Frontend Developer",
    company: "StartupHub",
    location: "Austin, TX",
    period: "2019 - 2021",
    description: "Developed responsive web applications using React and TypeScript. Worked closely with UX designers to implement pixel-perfect designs. Participated in code reviews and agile ceremonies.",
    highlights: ["Modernized legacy codebase", "Improved test coverage to 85%", "Mentored 3 interns"]
  },
  {
    title: "Junior Developer",
    company: "Digital Agency Co.",
    location: "Remote",
    period: "2018 - 2019",
    description: "Started career building websites and web applications for various clients. Gained experience in JavaScript, React, and CSS. Learned version control and collaborative development.",
    highlights: ["Built 20+ client websites", "Learned agile methodology", "First open-source contribution"]
  }
]

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".timeline-item",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".timeline",
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Animate the timeline line
      gsap.fromTo(
        ".timeline-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".timeline",
            start: "top 80%",
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
      id="experience"
      className="py-24 relative overflow-hidden bg-background"
    >
      {/* Subtle background */}
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <p className="text-primary font-medium">Career Journey</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Work{" "}
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A timeline of my professional journey and growth as a developer.
          </p>
        </div>

        {/* Timeline */}
        <div className="timeline max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div 
            className="timeline-line absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20 origin-top"
            style={{ transformOrigin: "top" }}
          />

          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item relative pl-20 pb-12 last:pb-0">
              {/* Timeline node */}
              <div className="absolute left-6 w-5 h-5 rounded-full bg-background border-4 border-primary timeline-node" />

              {/* Content card */}
              <div className="glass rounded-2xl p-6 card-hover">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    <div className="flex items-center gap-1 justify-end">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1 justify-end mt-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map((highlight, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-secondary rounded-full text-xs font-medium text-secondary-foreground"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
