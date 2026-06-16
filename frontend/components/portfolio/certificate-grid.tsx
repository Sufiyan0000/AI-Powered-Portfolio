"use client"

import { CertificateCard } from "./certificate-card"
import { Certificate } from "./certifications-data"

interface CertificateGridProps {
  certificates: Certificate[]
  onViewPdf: (url: string) => void
}

export function CertificateGrid({
  certificates,
  onViewPdf,
}: CertificateGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[320px] gap-4 mx-10">
      {certificates.map((cert, index) => {
        let sizeClasses = ""

        switch (index) {
          case 0:
            // Featured card
            sizeClasses = "lg:col-span-2 lg:row-span-2 lg:space-x-10"
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
  )
}
