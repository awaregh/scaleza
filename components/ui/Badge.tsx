import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "blue" | "purple";
  className?: string;
}

const variants = {
  default: "bg-slate-800 text-slate-300",
  blue: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
  purple: "bg-purple-500/10 text-purple-400 border border-purple-500/20",
};

export default function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span className={cn("inline-flex items-center rounded-full px-3 py-1 text-xs font-medium", variants[variant], className)}>
      {children}
    </span>
  );
}
