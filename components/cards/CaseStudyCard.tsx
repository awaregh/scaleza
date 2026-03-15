"use client";

import { motion } from "framer-motion";
import { CaseStudy } from "@/lib/types";
import Badge from "@/components/ui/Badge";

interface CaseStudyCardProps {
  study: CaseStudy;
  index?: number;
  featured?: boolean;
}

export default function CaseStudyCard({ study, index = 0, featured = false }: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group rounded-2xl border border-white/5 bg-white/[0.02] transition-all hover:border-white/10 hover:bg-white/[0.04] ${
        featured ? "p-8 lg:p-10" : "p-6 lg:p-8"
      }`}
    >
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="blue">{study.industry}</Badge>
        <span className="text-xs text-slate-500">{study.timeline}</span>
      </div>
      <h3 className={`mt-4 font-semibold text-white ${featured ? "text-2xl" : "text-xl"}`}>
        {study.client}
      </h3>
      <p className="mt-2 text-sm text-slate-400">{study.problem}</p>

      {featured && (
        <p className="mt-3 text-sm text-slate-300">{study.solution}</p>
      )}

      <div className={`mt-6 grid gap-4 ${featured ? "grid-cols-2 lg:grid-cols-4" : "grid-cols-2"}`}>
        {study.results.map((result) => (
          <div key={result.label}>
            <p className={`font-bold text-white ${featured ? "text-lg" : "text-base"}`}>{result.value}</p>
            <p className="text-xs text-slate-500">{result.label}</p>
          </div>
        ))}
      </div>

      {featured && (
        <blockquote className="mt-6 border-l-2 border-blue-500/50 pl-4">
          <p className="text-sm italic text-slate-300">&ldquo;{study.quote.text}&rdquo;</p>
          <footer className="mt-2 text-xs text-slate-500">
            — {study.quote.author}, {study.quote.title}
          </footer>
        </blockquote>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        {study.technologies.map((tech) => (
          <span key={tech} className="rounded-md bg-slate-800/50 px-2 py-1 text-xs text-slate-400">
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
