export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  completionDate: string;
  category: string;
  pdfThumbnail: string;
  pdfUrl: string;
  credentialUrl: string;
}

export const certificates: Certificate[] = [
  {
    id: "cert-1",
    title: "Meta Full Stack Developer Specialization: Frontend & Backend from Scratch.",
    issuer: "Meta × Coursera",
    completionDate: "Nov 2025",
    category: "Full Stack",
    pdfThumbnail: "/certificates/full-stack.png",
    pdfUrl: "/pdfs/meta-full-stack.pdf",
    credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/QL5ZPAD9QD2T"
  },
  {
    id: "cert-2",
    title: "Advanced React Development By Meta",
    issuer: "Meta × Coursera",
    completionDate: "Dec 2024",
    category: "AI",
    pdfThumbnail: "/certificates/advanced-react.png",
    pdfUrl: "/pdfs/advanced-react.pdf",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/XV0O8KI1ZNGQ"
  },
  {
    id: "cert-3",
    title: "Python for Data Science, AI & Development",
    issuer: "IBM × Coursera",
    completionDate: "Dec 2024",
    category: "Coding",
    pdfThumbnail: "/certificates/python-for-ai.png",
    pdfUrl: "/pdfs/python-for-ai.pdf",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/T39VR9YWET8W"
  },
  {
    id: "cert-4",
    title: "Django Web Framework",
    issuer: "Meta × Coursera",
    completionDate: "Sep 2025",
    category: "Frontend",
    pdfThumbnail: "/certificates/django.png",
    pdfUrl: "/pdfs/django.pdf",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/02IPQO0UBZ0W"
  },
  {
    id: "cert-5",
    title: "RESTFul APIs Development",
    issuer: "Meta × Coursera",
    completionDate: "Oct 2025",
    category: "RESTFul APIs",
    pdfThumbnail: "/certificates/rest-api.png",
    pdfUrl: "/pdfs/restful-api.pdf",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/M99652SWQTIN"
  },
  // {
  //   id: "cert-6",
  //   title: "The Full Stack",
  //   issuer: "Meta × Coursera",
  //   completionDate: "Oct 2025",
  //   category: "Full Stack",
  //   pdfThumbnail: "/certificates/full-stack.png",
  //   pdfUrl: "/pdfs/the-fullstack.pdf",
  //   credentialUrl: "https://www.coursera.org/account/accomplishments/verify/S1Z1F5QYVTP0"
  // },
  // {
  //   id: "cert-7",
  //   title: "Generative AI Fundamentals",
  //   issuer: "IBM + Coursera",
  //   completionDate: "Aug 2024",
  //   category: "AI",
  //   pdfThumbnail: "https://via.placeholder.com/400x300?text=Generative+AI",
  //   pdfUrl: "#",
  //   credentialUrl: "#"
  // },
  // {
  //   id: "cert-8",
  //   title: "Full Stack Web Development",
  //   issuer: "Codecademy",
  //   completionDate: "Jul 2024",
  //   category: "Frontend",
  //   pdfThumbnail: "https://via.placeholder.com/400x300?text=Full+Stack",
  //   pdfUrl: "#",
  //   credentialUrl: "#"
  // },
]

export const categories = [
  "All",
  "AI",
  "Frontend",
  "Java",
  "Cybersecurity",
  "Data Analytics"
]
