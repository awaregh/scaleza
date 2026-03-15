"use client";

import { motion } from "framer-motion";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: string;
  index?: number;
}

export default function FeatureCard({ title, description, icon, index = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-xl border border-white/5 bg-white/[0.02] p-6"
    >
      {icon && <span className="text-2xl">{icon}</span>}
      <h3 className="mt-3 text-base font-semibold text-white">{title}</h3>
      <p className="mt-1 text-sm text-slate-400">{description}</p>
    </motion.div>
  );
}
