# Scaleza - Engineering Growth for Startups

Premium marketing website for Scaleza, a growth engineering agency that combines software development, AI, and marketing to help startups scale faster.

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **UI:** React 18+, TypeScript
- **Styling:** TailwindCSS 4
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod validation

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Pages

- **/** - Landing page with hero, services, case studies, testimonials
- **/services** - Detailed service offerings
- **/case-studies** - Client success stories
- **/about** - Team, philosophy, and values
- **/contact** - Contact form with validation

## Project Structure

```
app/              # Next.js App Router pages
components/       # Reusable React components
  animations/     # FadeIn, SlideIn, CountUp, GradientBg
  cards/          # ServiceCard, CaseStudyCard, TestimonialCard, FeatureCard
  forms/          # ContactForm, FormInput, FormSelect, FormButton
  hero/           # Hero, HeroWithGradient
  layout/         # Header, Footer, Container
  sections/       # ClientLogos, TestimonialSection, ProcessTimeline, CTASection
  ui/             # Button, Badge
data/             # Static data (services, case studies, testimonials, team)
lib/              # Constants, types, utilities
```

## Deployment

This is a standard Next.js application. Deploy to Vercel, AWS, or any Node.js hosting platform.
