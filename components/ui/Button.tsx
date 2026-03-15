import Link from "next/link";
import { cn } from "@/lib/utils";
import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: ReactNode;
  className?: string;
}

const variants = {
  primary: "bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/25",
  secondary: "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm",
  outline: "border border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white",
  ghost: "text-slate-400 hover:text-white",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({ variant = "primary", size = "md", href, children, className, ...props }: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
