"use client"

import { useState, useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { CertificateGrid } from "./certificate-grid"
import { certificates, Certificate } from "@/data/certifications-data"

gsap.registerPlugin(ScrollTrigger)

export function Certifications() {
  const [activeFilter, setActiveFilter] = useState("All")
  const sectionRef = useRef<HTMLElement>(null)


  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cert-header",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".cert-header",
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleViewPdf = (url: string) => {
    if (url !== "#") {
      window.open(url, "_blank")
    }
  }

  return (
    <section
      ref={sectionRef}
      id="certifications"
      className="py-24 relative overflow-hidden bg-background"
    >
      {/* Subtle background */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="cert-header text-center max-w-2xl mx-auto mb-12 space-y-4">
          <p className="text-primary font-medium">Professional Development</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            <span className="">Certifications</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Professional certifications and continuous learning across AI, Software Development, Cybersecurity, Frontend Development, and Programming.
          </p>
        </div>


        {/* Grid */}
        <CertificateGrid certificates={certificates} onViewPdf={handleViewPdf} />
      </div>
    </section>
  )
}