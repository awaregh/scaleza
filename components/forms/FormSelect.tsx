"use client";

import { forwardRef, SelectHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  options: readonly { value: string; label: string }[];
  placeholder?: string;
}

const FormSelect = forwardRef<HTMLSelectElement, FormSelectProps>(
  ({ label, error, options, placeholder = "Select...", className, id, ...props }, ref) => {
    const selectId = id || label.toLowerCase().replace(/\s+/g, "-");
    return (
      <div className={cn("space-y-1.5", className)}>
        <label htmlFor={selectId} className="block text-sm font-medium text-slate-300">
          {label}
          {props.required && <span className="text-red-400"> *</span>}
        </label>
        <select
          ref={ref}
          id={selectId}
          className={cn(
            "w-full rounded-lg border bg-white/5 px-4 py-3 text-sm text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50",
            error ? "border-red-500/50" : "border-white/10 hover:border-white/20"
          )}
          {...props}
        >
          <option value="" className="bg-slate-900">{placeholder}</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-slate-900">
              {opt.label}
            </option>
          ))}
        </select>
        {error && <p className="text-xs text-red-400">{error}</p>}
      </div>
    );
  }
);
FormSelect.displayName = "FormSelect";
export default FormSelect;
