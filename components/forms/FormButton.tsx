"use client";

import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface FormButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export default function FormButton({ children, loading = false, disabled, className, ...props }: FormButtonProps) {
  return (
    <button
      disabled={disabled || loading}
      className={cn(
        "inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-3 text-base font-medium text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      {loading ? (
        <>
          <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          Sending...
        </>
      ) : (
        children
      )}
    </button>
  );
}
