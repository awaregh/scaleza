import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Scaleza | Engineering Growth for Startups",
  description:
    "Scaleza helps startups ship faster, acquire users, and scale infrastructure with AI-powered development and growth systems.",
  openGraph: {
    title: "Scaleza | Engineering Growth for Startups",
    description:
      "Growth engineering, product development, and AI integration for startups.",
    url: "https://scaleza.tech",
    siteName: "Scaleza",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scaleza | Engineering Growth for Startups",
    description:
      "Growth engineering, product development, and AI integration for startups.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className="antialiased bg-slate-950 text-slate-200"
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
