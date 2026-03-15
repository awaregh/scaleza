import { Metadata } from "next";
import Hero from "@/components/hero/Hero";
import Container from "@/components/layout/Container";
import FadeIn from "@/components/animations/FadeIn";
import { SITE_NAME, CONTACT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | Scaleza",
  description: "Learn how Scaleza collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <Hero
        title="Privacy Policy"
        description="How we collect, use, and protect your information."
      />

      <section className="py-20 lg:py-28">
        <Container>
          <FadeIn>
            <div className="prose prose-invert mx-auto max-w-3xl text-slate-300">
              <p className="text-sm text-slate-500">Last updated: March 2026</p>

              <h2 className="mt-10 text-xl font-semibold text-white">1. Information We Collect</h2>
              <p>
                When you use {SITE_NAME}&apos;s website or services, we may collect information you provide
                directly, such as your name, email address, company name, and project details when you
                fill out our contact form.
              </p>

              <h2 className="mt-10 text-xl font-semibold text-white">2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Respond to your inquiries and provide requested services</li>
                <li>Communicate with you about projects and engagements</li>
                <li>Improve our website and services</li>
                <li>Send relevant updates about our services (with your consent)</li>
              </ul>

              <h2 className="mt-10 text-xl font-semibold text-white">3. Information Sharing</h2>
              <p>
                We do not sell, trade, or share your personal information with third parties except as
                necessary to provide our services or as required by law.
              </p>

              <h2 className="mt-10 text-xl font-semibold text-white">4. Data Security</h2>
              <p>
                We implement reasonable security measures to protect your personal information. However,
                no method of transmission over the internet or electronic storage is completely secure.
              </p>

              <h2 className="mt-10 text-xl font-semibold text-white">5. Cookies</h2>
              <p>
                Our website may use cookies and similar tracking technologies to enhance your browsing
                experience and analyze site traffic. You can control cookie preferences through your
                browser settings.
              </p>

              <h2 className="mt-10 text-xl font-semibold text-white">6. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt out of marketing communications</li>
              </ul>

              <h2 className="mt-10 text-xl font-semibold text-white">7. Contact Us</h2>
              <p>
                If you have questions about this privacy policy, contact us at{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-400 hover:text-blue-300">
                  {CONTACT_EMAIL}
                </a>.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
