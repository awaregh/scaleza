export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  headline: string;
  description: string;
  capabilities: string[];
  outcome: string;
  cta: string;
  icon: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  client: string;
  industry: string;
  problem: string;
  solution: string;
  results: { label: string; value: string }[];
  timeline: string;
  technologies: string[];
  quote: { text: string; author: string; title: string };
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  company: string;
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  linkedin?: string;
}

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone?: string;
  description: string;
  budget: string;
  timeline: string;
  services: string[];
  message?: string;
}
