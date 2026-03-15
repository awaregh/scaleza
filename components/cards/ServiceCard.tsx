"use client";

import { motion } from "framer-motion";
import { Service } from "@/lib/types";
import Button from "@/components/ui/Button";

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all hover:border-white/10 hover:bg-white/[0.04]"
    >
      <span className="text-3xl">{service.icon}</span>
      <h3 className="mt-4 text-xl font-semibold text-white">{service.title}</h3>
      <p className="mt-2 text-sm text-slate-400">{service.description}</p>
      <ul className="mt-4 space-y-2">
        {service.capabilities.slice(0, 3).map((cap) => (
          <li key={cap} className="flex items-start gap-2 text-sm text-slate-400">
            <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
            {cap}
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <Button variant="ghost" size="sm" href={`/services#${service.id}`}>
          {service.cta} →
        </Button>
      </div>
    </motion.div>
  );
}
