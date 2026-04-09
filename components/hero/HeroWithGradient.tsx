"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import GradientBg from "@/components/animations/GradientBg";

export default function HeroWithGradient() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-slate-950/70 pt-20">
      <GradientBg />
      <Container className="relative z-10 py-20 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl"
          >
            Build Smarter.
            <br />
            <span className="bg-gradient-to-r from-blue-300 via-indigo-300 to-violet-300 bg-clip-text text-transparent">
              Scale Faster.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-slate-400 sm:text-xl"
          >
            A high-velocity product and growth studio for startups that need sharp
            execution, clean systems, and measurable momentum.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Button href="/contact" size="lg">
              Start a Project
            </Button>
            <Button href="/case-studies" variant="outline" size="lg">
              View Work
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
