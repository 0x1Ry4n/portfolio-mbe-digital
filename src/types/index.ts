export interface NavItem {
  label: string
  href: string
}

export interface Service {
  icon: string
  title: string
  description: string
}

export interface ProcessStep {
  number: string
  title: string
  description: string
}

export interface PortfolioItem {
  title: string
  category: string
  description: string
  image?: string
}

export interface Testimonial {
  name: string
  role: string
  company: string
  content: string
  avatar?: string
}

export interface FaqItem {
  question: string
  answer: string
}
