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
    title: "Google Cybersecurity Professional Certificate",
    issuer: "Google × Coursera",
    completionDate: "Jan 2025",
    category: "Cybersecurity",
    pdfThumbnail: "https://via.placeholder.com/400x300?text=Google+Cybersecurity",
    pdfUrl: "",
    credentialUrl: "#"
  },
  {
    id: "cert-2",
    title: "Machine Learning Specialization",
    issuer: "Stanford Online × Coursera",
    completionDate: "Dec 2024",
    category: "AI",
    pdfThumbnail: "#",
    pdfUrl: "https://www.coursera.org/account/accomplishments/specialization/certificate/QL5ZPAD9QD2T",
    credentialUrl: "#"
  },
  {
    id: "cert-3",
    title: "Advanced React Development",
    issuer: "Udemy",
    completionDate: "Nov 2024",
    category: "Frontend",
    pdfThumbnail: "https://via.placeholder.com/400x300?text=Advanced+React",
    pdfUrl: "#",
    credentialUrl: "#"
  },
  {
    id: "cert-4",
    title: "Java Programming Fundamentals",
    issuer: "Oracle Academy",
    completionDate: "Oct 2024",
    category: "Java",
    pdfThumbnail: "https://via.placeholder.com/400x300?text=Java+Fundamentals",
    pdfUrl: "#",
    credentialUrl: "#"
  },
  {
    id: "cert-5",
    title: "Data Analytics Professional Certificate",
    issuer: "Google × Coursera",
    completionDate: "Sep 2024",
    category: "Data Analytics",
    pdfThumbnail: "https://via.placeholder.com/400x300?text=Data+Analytics",
    pdfUrl: "#",
    credentialUrl: "#"
  },
  {
    id: "cert-6",
    title: "Generative AI Fundamentals",
    issuer: "IBM + Coursera",
    completionDate: "Aug 2024",
    category: "AI",
    pdfThumbnail: "https://via.placeholder.com/400x300?text=Generative+AI",
    pdfUrl: "#",
    credentialUrl: "#"
  },
  {
    id: "cert-7",
    title: "Full Stack Web Development",
    issuer: "Codecademy",
    completionDate: "Jul 2024",
    category: "Frontend",
    pdfThumbnail: "https://via.placeholder.com/400x300?text=Full+Stack",
    pdfUrl: "#",
    credentialUrl: "#"
  },
  {
    id: "cert-8",
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    completionDate: "Jun 2024",
    category: "Frontend",
    pdfThumbnail: "https://via.placeholder.com/400x300?text=Responsive+Design",
    pdfUrl: "#",
    credentialUrl: "#"
  }
]

export const categories = [
  "All",
  "AI",
  "Frontend",
  "Java",
  "Cybersecurity",
  "Data Analytics"
]
