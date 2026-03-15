import { Metadata } from "next";
import Hero from "@/components/hero/Hero";
import Container from "@/components/layout/Container";
import ContactForm from "@/components/forms/ContactForm";
import FadeIn from "@/components/animations/FadeIn";
import { CONTACT_EMAIL, SOCIAL_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact | Scaleza",
  description: "Start your project with Scaleza. Tell us about your startup and we'll show you how we can help you scale.",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        badge="Contact"
        title="Let's Talk"
        description="Tell us about your project and we'll get back to you within 24 hours."
      />

      <section className="border-t border-white/5 py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <FadeIn>
                <ContactForm />
              </FadeIn>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <FadeIn delay={0.2}>
                <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-8">
                  <h3 className="text-lg font-semibold text-white">Get in touch</h3>
                  <p className="mt-2 text-sm text-slate-400">
                    Prefer to reach out directly? Here&apos;s how.
                  </p>

                  <div className="mt-8 space-y-6">
                    <div>
                      <p className="text-sm font-medium text-slate-300">Email</p>
                      <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm text-blue-400 hover:text-blue-300">
                        {CONTACT_EMAIL}
                      </a>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-slate-300">Response Time</p>
                      <p className="text-sm text-slate-400">We&apos;ll get back to you within 24 hours.</p>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-slate-300">Social</p>
                      <div className="mt-2 flex gap-4">
                        <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-white transition-colors">
                          LinkedIn
                        </a>
                        <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-white transition-colors">
                          Twitter
                        </a>
                        <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-white transition-colors">
                          GitHub
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 border-t border-white/5 pt-6">
                    <p className="text-sm font-medium text-slate-300">Prefer to chat?</p>
                    <p className="mt-1 text-sm text-slate-400">
                      Schedule a 15-minute intro call and we&apos;ll discuss your project live.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
