"use client";

import { useState } from "react";
import type { FormEvent, ReactNode } from "react";

import type { Dictionary } from "@/lib/i18n/dictionaries";
import { Icon } from "@/components/ui/Icon";

type Status = "idle" | "submitting" | "success" | "error";

const inputCls =
  "w-full rounded bg-panel px-3.5 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-muted/60 focus:bg-white focus:ring-1 focus:ring-primary";

export function ContactForm({ contact }: { contact: Dictionary["contact"] }) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      business: data.get("business"),
      phone: data.get("phone"),
      capabilities: data.getAll("capabilities"),
      budget: data.get("budget"),
      message: data.get("message"),
    };

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="flex flex-col items-start gap-3 py-8"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-panel-2 text-primary">
          <Icon name="check-circle" className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-semibold text-ink">
          {contact.form.success.title}
        </h3>
        <p className="max-w-md text-sm leading-relaxed text-muted">
          {contact.form.success.body}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <fieldset>
        <legend className="mb-4 font-mono text-[11px] font-medium uppercase tracking-wider text-accent">
          {contact.groupContact}
        </legend>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field id="name" label={contact.fields.name} required>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder={contact.fields.namePlaceholder}
              className={inputCls}
            />
          </Field>
          <Field id="email" label={contact.fields.email} required>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder={contact.fields.emailPlaceholder}
              className={inputCls}
            />
          </Field>
          <Field id="business" label={contact.fields.business}>
            <input
              id="business"
              name="business"
              type="text"
              autoComplete="organization"
              placeholder={contact.fields.businessPlaceholder}
              className={inputCls}
            />
          </Field>
          <Field id="phone" label={contact.fields.phone}>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder={contact.fields.phonePlaceholder}
              className={inputCls}
            />
          </Field>
        </div>
      </fieldset>

      <fieldset>
        <legend className="mb-4 font-mono text-[11px] font-medium uppercase tracking-wider text-accent">
          {contact.groupServices}
        </legend>
        <p className="mb-3 text-sm text-muted">
          {contact.fields.capabilitiesHelp}
        </p>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {contact.capabilities.map((capability) => (
            <label
              key={capability}
              className="flex cursor-pointer items-center gap-3 rounded bg-panel px-3 py-3 text-sm text-ink transition-colors hover:bg-panel-2"
            >
              <input
                type="checkbox"
                name="capabilities"
                value={capability}
                className="h-4 w-4 rounded accent-primary"
              />
              <span>{capability}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="mb-4 font-mono text-[11px] font-medium uppercase tracking-wider text-accent">
          {contact.groupBudget}
        </legend>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
          {contact.budgets.map((budget, index) => (
            <label
              key={budget}
              className="flex cursor-pointer flex-col items-center justify-center rounded bg-panel p-3 text-center transition-colors hover:bg-panel-2"
            >
              <input
                type="radio"
                name="budget"
                value={budget}
                defaultChecked={index === 2}
                className="mb-1 accent-primary"
              />
              <span className="font-mono text-xs text-ink">{budget}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <span className="mb-4 block font-mono text-[11px] font-medium uppercase tracking-wider text-accent">
          {contact.groupDetails}
        </span>
        <Field id="message" label={contact.fields.message} required>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            placeholder={contact.fields.messagePlaceholder}
            className={`${inputCls} resize-y`}
          />
        </Field>
      </div>

      <div>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full rounded-lg bg-primary px-6 py-4 text-base font-semibold text-white transition-colors duration-150 hover:bg-accent disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          {status === "submitting"
            ? contact.form.submitting
            : `${contact.submit} →`}
        </button>

        {status === "error" && (
          <p
            role="alert"
            aria-live="assertive"
            className="mt-3 text-center text-sm font-medium text-error"
          >
            {contact.form.error}
          </p>
        )}

        <p className="mt-3 text-center font-mono text-[11px] text-muted">
          {contact.notice}
        </p>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  required,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink">
        {label} {required && <span className="text-primary">*</span>}
      </label>
      {children}
    </div>
  );
}
