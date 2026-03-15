"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormButton from "./FormButton";
import { BUDGET_OPTIONS, TIMELINE_OPTIONS, SERVICE_OPTIONS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().min(1, "Company name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  description: z.string().min(10, "Please describe your project (at least 10 characters)"),
  budget: z.string().min(1, "Please select a budget range"),
  timeline: z.string().min(1, "Please select a timeline"),
  services: z.array(z.string()).min(1, "Please select at least one service"),
  message: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      services: [],
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-8 text-center">
        <div className="text-4xl">✓</div>
        <h3 className="mt-4 text-xl font-semibold text-white">Message Sent</h3>
        <p className="mt-2 text-sm text-slate-400">
          Thanks for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <FormInput
          label="Your Name"
          placeholder="Jane Smith"
          required
          {...register("name")}
          error={errors.name?.message}
        />
        <FormInput
          label="Company Name"
          placeholder="Acme Inc."
          required
          {...register("company")}
          error={errors.company?.message}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <FormInput
          label="Email"
          type="email"
          placeholder="jane@acme.com"
          required
          {...register("email")}
          error={errors.email?.message}
        />
        <FormInput
          label="Phone"
          type="tel"
          placeholder="+1 (555) 000-0000"
          {...register("phone")}
          error={errors.phone?.message}
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="description" className="block text-sm font-medium text-slate-300">
          Project Description <span className="text-red-400">*</span>
        </label>
        <textarea
          id="description"
          rows={4}
          placeholder="Tell us about your project, goals, and any specific requirements..."
          className={cn(
            "w-full rounded-lg border bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50",
            errors.description ? "border-red-500/50" : "border-white/10 hover:border-white/20"
          )}
          {...register("description")}
        />
        {errors.description && <p className="text-xs text-red-400">{errors.description.message}</p>}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <FormSelect
          label="Project Budget"
          options={BUDGET_OPTIONS}
          required
          {...register("budget")}
          error={errors.budget?.message}
        />
        <FormSelect
          label="Timeline"
          options={TIMELINE_OPTIONS}
          required
          {...register("timeline")}
          error={errors.timeline?.message}
        />
      </div>

      <div className="space-y-1.5">
        <p className="text-sm font-medium text-slate-300">
          Services Interested In <span className="text-red-400">*</span>
        </p>
        <div className="flex flex-wrap gap-4">
          {SERVICE_OPTIONS.map((service) => (
            <label key={service.value} className="flex items-center gap-2 text-sm text-slate-300 cursor-pointer">
              <input
                type="checkbox"
                value={service.value}
                {...register("services")}
                className="rounded border-white/20 bg-white/5 text-blue-600 focus:ring-blue-500/50"
              />
              {service.label}
            </label>
          ))}
        </div>
        {errors.services && <p className="text-xs text-red-400">{errors.services.message}</p>}
      </div>

      <div className="space-y-1.5">
        <label htmlFor="message" className="block text-sm font-medium text-slate-300">
          Additional Message
        </label>
        <textarea
          id="message"
          rows={3}
          placeholder="Anything else you'd like us to know..."
          className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 transition-colors hover:border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          {...register("message")}
        />
      </div>

      <FormButton type="submit" loading={isSubmitting}>
        Send Message
      </FormButton>
    </form>
  );
}
