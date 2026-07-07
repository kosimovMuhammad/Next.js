"use client";

import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import FaqAccordion from "@/components/FaqAccordion";
import { useSettings } from "@/lib/settings-context";

export default function ContactPage() {
  const { t } = useSettings();
  const contact = t.contact;

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-16 text-center sm:pt-32">
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-widest text-[var(--accent)]">
            {contact.kicker}
          </span>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            {contact.h1}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            {contact.sub}
          </p>
        </Reveal>
      </section>

      {/* Form + info */}
      <section className="bg-[var(--surface)]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-5">
          <Reveal className="md:col-span-3">
            <ContactForm />
          </Reveal>

          <Reveal delay={100} className="md:col-span-2">
            <div className="h-full space-y-6">
              {contact.info.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-[var(--border)] p-6"
                >
                  <p className="text-xs font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                    {item.label}
                  </p>
                  <p className="mt-2 text-lg font-medium">{item.value}</p>
                </div>
              ))}
              <div className="rounded-2xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] p-6 text-white">
                <p className="text-sm font-medium">{contact.callout}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-24">
        <Reveal className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {contact.faqTitle}
          </h2>
        </Reveal>

        <Reveal delay={100} className="mt-12">
          <FaqAccordion faqs={contact.faqs} />
        </Reveal>
      </section>

      {/* CTA */}
      <section className="bg-[var(--surface)] px-6 py-24 text-center">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {contact.ctaTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-zinc-600 dark:text-zinc-400">
            {contact.ctaSub}
          </p>
        </Reveal>
      </section>
    </div>
  );
}
