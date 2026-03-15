"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GradientBgProps {
  className?: string;
}

export default function GradientBg({ className }: GradientBgProps) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      <motion.div
        className="absolute -top-1/2 -left-1/2 h-full w-full rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute -right-1/4 -bottom-1/4 h-3/4 w-3/4 rounded-full opacity-15 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}
