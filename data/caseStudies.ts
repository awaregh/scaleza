import { CaseStudy } from "@/lib/types";

export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    slug: "metricflow-saas-growth",
    client: "MetricFlow",
    industry: "B2B SaaS / Product Analytics",
    problem: "Stuck at $10k MRR with an unsustainable customer acquisition cost. Growth was stalling and the founding team couldn't identify the bottleneck.",
    solution: "Built a growth analytics pipeline from scratch, optimized the entire conversion funnel, and implemented an automated referral system that turned existing users into a growth engine.",
    results: [
      { label: "MRR Growth", value: "$10k → $45k" },
      { label: "CAC Reduction", value: "$500 → $150" },
      { label: "Conversion Rate", value: "2% → 8%" },
      { label: "Timeline", value: "6 months" },
    ],
    timeline: "6 months engagement",
    technologies: ["Next.js", "Python", "Segment", "Mixpanel"],
    quote: {
      text: "Scaleza didn't just optimize our funnel—they rebuilt how we think about growth. The referral system alone accounts for 30% of our new users.",
      author: "Sarah Chen",
      title: "CEO, MetricFlow",
    },
  },
  {
    id: "2",
    slug: "synthia-ai-product-launch",
    client: "Synthia AI",
    industry: "Generative AI / Productivity",
    problem: "Had a breakthrough AI concept for automated content workflows but no technical team to build it. Needed to ship fast before the market window closed.",
    solution: "Built the full-stack product with Claude API integration, designed a conversational UX that felt intuitive, and optimized inference costs to make the unit economics work.",
    results: [
      { label: "Time to Launch", value: "8 weeks" },
      { label: "Beta Users (Month 1)", value: "5,000" },
      { label: "MoM Growth", value: "40%" },
      { label: "Seed Round", value: "$1.2M" },
    ],
    timeline: "3-month sprint to launch",
    technologies: ["Next.js", "Node.js", "Anthropic Claude", "PostgreSQL"],
    quote: {
      text: "Scaleza was like hiring an experienced CTO and growth lead in one. They understood both the AI architecture and the go-to-market strategy.",
      author: "Marcus Rivera",
      title: "Founder, Synthia AI",
    },
  },
  {
    id: "3",
    slug: "paystack-infrastructure-scale",
    client: "VaultPay",
    industry: "Fintech / Payments",
    problem: "Processing millions of transactions but infrastructure was crumbling under load. A $2M enterprise deal was on the line and the platform couldn't handle the volume.",
    solution: "Redesigned the backend architecture with intelligent caching layers, optimized critical database queries, and built real-time monitoring dashboards for the operations team.",
    results: [
      { label: "Transaction Capacity", value: "10x increase" },
      { label: "Latency", value: "2s → 100ms" },
      { label: "Infra Cost Savings", value: "60%" },
      { label: "Enterprise Deal", value: "$2M closed" },
    ],
    timeline: "4-month architecture redesign",
    technologies: ["Node.js", "PostgreSQL", "Redis", "AWS", "Grafana"],
    quote: {
      text: "We were about to lose a $2M deal because our platform couldn't handle the load. Scaleza turned our infrastructure into a competitive advantage.",
      author: "James Okafor",
      title: "CTO, VaultPay",
    },
  },
];
