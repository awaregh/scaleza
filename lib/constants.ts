export const SITE_NAME = "Scaleza";
export const SITE_URL = "https://scaleza.tech";
export const SITE_DESCRIPTION = "Scaleza helps startups ship faster, acquire users, and scale infrastructure with AI-powered development and growth systems.";
export const SITE_TAGLINE = "Engineering Growth for Startups";

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/company/scaleza",
  twitter: "https://twitter.com/scaleza",
  github: "https://github.com/scaleza",
} as const;

export const CONTACT_EMAIL = "hello@scaleza.tech";

export const BUDGET_OPTIONS = [
  { value: "10k-25k", label: "$10k - $25k" },
  { value: "25k-50k", label: "$25k - $50k" },
  { value: "50k-100k", label: "$50k - $100k" },
  { value: "100k+", label: "$100k+" },
] as const;

export const TIMELINE_OPTIONS = [
  { value: "asap", label: "ASAP" },
  { value: "1-3-months", label: "1-3 months" },
  { value: "flexible", label: "Flexible" },
] as const;

export const SERVICE_OPTIONS = [
  { value: "growth-engineering", label: "Growth Engineering" },
  { value: "product-development", label: "Product Development" },
  { value: "ai-integration", label: "AI Integration" },
] as const;
