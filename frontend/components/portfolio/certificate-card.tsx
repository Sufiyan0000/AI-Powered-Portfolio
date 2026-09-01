"use client"

import { FileText, ExternalLink } from "lucide-react"
import { Certificate } from "@/data/certifications-data"

interface CertificateCardProps {
  certificate: Certificate
  onViewPdf: (url: string) => void
}

export function CertificateCard({
  certificate,
  onViewPdf,
}: CertificateCardProps) {

  
  return (
    <div className="group relative h-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl">

      {/* Image */}
      <img
        src={certificate.pdfThumbnail}
        alt={certificate.title}
        className="absolute inset-0 h-full w-full object-cover object-center  transition-transform duration-500 group-hover:scale-105"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />

      {/* Preview Button */}
      {/* <button
        onClick={() => onViewPdf(certificate.pdfUrl)}
        className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      >
        <div className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 shadow-lg backdrop-blur">
          <FileText className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium">Preview</span>
        </div>
      </button> */}

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 z-10 p-5">
        <h3 className="line-clamp-2 text-base font-semibold text-white">
          {certificate.title}
        </h3>

        <p className="mt-1 text-sm text-white/80">
          {certificate.issuer}
        </p>

        <p className="mt-2 text-xs text-white/60">
          Completed • {certificate.completionDate}
        </p>

        {/* Actions */}
        <div className="mt-4 flex gap-2 lg:opacity-0 translate-y-2 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            onClick={() => onViewPdf(certificate.pdfUrl)}
            className="flex-1 rounded-xl border border-white/20 bg-white/20 px-3 py-2 text-sm font-medium text-white backdrop-blur-md transition-colors hover:bg-white/30"
          >
            View PDF
          </button>

          <a
            href={certificate.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-1 rounded-xl bg-primary px-3 py-2 text-sm font-medium text-white transition-colors bg-primay/90 "
          >
            Verify
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  )
}

