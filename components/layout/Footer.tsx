import Link from "next/link";
import { SITE_NAME, NAV_LINKS, SOCIAL_LINKS, CONTACT_EMAIL } from "@/lib/constants";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-slate-950">
      <Container className="py-12 lg:py-16">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="text-xl font-bold text-white">
              {SITE_NAME}
            </Link>
            <p className="mt-3 max-w-sm text-sm text-slate-400">
              Engineering growth for startups. We combine software development, AI, and marketing to help you scale faster.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <ul className="mt-3 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold text-white">Connect</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm text-slate-400 transition-colors hover:text-white">
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 transition-colors hover:text-white">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 transition-colors hover:text-white">
                  Twitter
                </a>
              </li>
              <li>
                <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 transition-colors hover:text-white">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-slate-500 hover:text-slate-400">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-slate-500 hover:text-slate-400">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
