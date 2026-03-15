import { Service } from "@/lib/types";

export const services: Service[] = [
  {
    id: "growth-engineering",
    title: "Growth Engineering",
    headline: "Growth Engineering That Compounds",
    description: "We approach growth as an engineering discipline—building systems that compound over time, not one-off campaigns that fizzle. Every growth lever is measured, tested, and automated.",
    capabilities: [
      "Conversion rate optimization & A/B testing",
      "Analytics pipelines & data infrastructure",
      "Growth automation & user acquisition systems",
      "Funnel optimization & retention mechanics",
    ],
    outcome: "3x conversion rate in 90 days",
    cta: "Let's Talk Growth",
    icon: "📈",
  },
  {
    id: "product-development",
    title: "Product Development",
    headline: "Product Architecture for Scale",
    description: "We build products designed to handle 10x your current load from day one. Clean architecture, type-safe code, and infrastructure that grows with you—not against you.",
    capabilities: [
      "Full-stack web & mobile development",
      "SaaS architecture & multi-tenancy",
      "API design & integration systems",
      "Database optimization & performance",
      "Infrastructure & DevOps",
    ],
    outcome: "Launched in 6 weeks, scaled to 100k users",
    cta: "Start Building",
    icon: "⚡",
  },
  {
    id: "ai-integration",
    title: "AI Integration",
    headline: "AI as Your Competitive Edge",
    description: "We integrate LLMs and AI into your product and operations—turning complex models into seamless user experiences and giving your team superpowers.",
    capabilities: [
      "LLM integration (ChatGPT, Claude, open-source)",
      "AI-powered features in products",
      "Internal AI copilots and automation",
      "RAG systems and knowledge bases",
      "Model fine-tuning and optimization",
    ],
    outcome: "Built AI features in 4 weeks",
    cta: "Explore AI Options",
    icon: "🤖",
  },
];
