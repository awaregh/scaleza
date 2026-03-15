import { Metadata } from "next";
import Hero from "@/components/hero/Hero";
import Container from "@/components/layout/Container";
import FadeIn from "@/components/animations/FadeIn";
import { SITE_NAME, CONTACT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service | Scaleza",
  description: "Review the terms and conditions governing the use of Scaleza's website and services.",
};

export default function TermsPage() {
  return (
    <>
      <Hero
        title="Terms of Service"
        description="Terms and conditions governing the use of our website and services."
      />

      <section className="py-20 lg:py-28">
        <Container>
          <FadeIn>
            <div className="prose prose-invert mx-auto max-w-3xl text-slate-300">
              <p className="text-sm text-slate-500">Last updated: March 2026</p>

              <h2 className="mt-10 text-xl font-semibold text-white">1. Acceptance of Terms</h2>
              <p>
                By accessing and using {SITE_NAME}&apos;s website and services, you agree to be bound by
                these Terms of Service. If you do not agree with any part of these terms, you should not
                use our website or services.
              </p>

              <h2 className="mt-10 text-xl font-semibold text-white">2. Services</h2>
              <p>
                {SITE_NAME} provides growth engineering, product development, and AI integration services
                for startups. The scope, deliverables, and terms of specific engagements are defined in
                separate project agreements.
              </p>

              <h2 className="mt-10 text-xl font-semibold text-white">3. Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, and code, is the property
                of {SITE_NAME} and is protected by intellectual property laws. Client deliverables and
                ownership rights are governed by individual project agreements.
              </p>

              <h2 className="mt-10 text-xl font-semibold text-white">4. Limitation of Liability</h2>
              <p>
                {SITE_NAME} provides its website and content on an &quot;as is&quot; basis. We make no
                warranties regarding the accuracy or completeness of any information on this site.
                {" "}{SITE_NAME} shall not be liable for any indirect, incidental, or consequential damages
                arising from the use of our website.
              </p>

              <h2 className="mt-10 text-xl font-semibold text-white">5. Confidentiality</h2>
              <p>
                Both parties agree to maintain the confidentiality of any proprietary information shared
                during the course of an engagement. Specific confidentiality terms are defined in
                individual project agreements.
              </p>

              <h2 className="mt-10 text-xl font-semibold text-white">6. Modifications</h2>
              <p>
                {SITE_NAME} reserves the right to modify these terms at any time. Changes will be
                effective upon posting to this page. Continued use of our website constitutes acceptance
                of the modified terms.
              </p>

              <h2 className="mt-10 text-xl font-semibold text-white">7. Contact</h2>
              <p>
                For questions about these terms, contact us at{" "}
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
