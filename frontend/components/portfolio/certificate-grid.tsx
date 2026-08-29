"use client"

import { CertificateCard } from "./certificate-card"
import { Certificate } from "@/data/certifications-data"

interface CertificateGridProps {
  certificates: Certificate[]
  onViewPdf: (url: string) => void
}

export function CertificateGrid({
  certificates,
  onViewPdf,
}: CertificateGridProps) {
  return (
    <div
      className="
        mx-auto
        w-full
        max-w-6xl
        px-4
        sm:px-6
        lg:px-0
      "
    >
      <div
        className="
          grid
          grid-cols-1
          gap-4
          md:grid-cols-2
          lg:grid-cols-4
          auto-rows-[360px]
          lg:auto-rows-[280px]
        "
      >
        {certificates.map((cert, index) => {
          let sizeClasses = ""

          switch (index) {
            case 0:
              // Featured card
              sizeClasses = "lg:col-span-2 lg:row-span-2"
              break

            case 1:
              // Top-right wide card
              sizeClasses = "lg:col-span-2"
              break

            case 4:
              // Middle wide card
              sizeClasses = "lg:col-span-2"
              break

            default:
              sizeClasses = ""
          }

          return (
            <div
              key={cert.id}
              className={`animate-fade-up ${sizeClasses}`}
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              <CertificateCard
                certificate={cert}
                onViewPdf={onViewPdf}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}