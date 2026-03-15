"use client";

import { motion } from "framer-motion";
import { Testimonial } from "@/lib/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index?: number;
}

export default function TestimonialCard({ testimonial, index = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 lg:p-8"
    >
      <p className="text-sm leading-relaxed text-slate-300">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="mt-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-sm font-bold text-white">
          {testimonial.author.split(" ").filter(Boolean).map((n) => n[0]).join("")}
        </div>
        <div>
          <p className="text-sm font-medium text-white">{testimonial.author}</p>
          <p className="text-xs text-slate-500">{testimonial.title}, {testimonial.company}</p>
        </div>
      </div>
    </motion.div>
  );
}
