/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

// ─── Data ──────────────────────────────────────────────────────


const TESTIMONIALS_KEYS = [
  "t1",
  "t2",
  "t3",
  "t4",
  "t5",
];

const RATINGS = {
  "t1": 5,
  "t2": 5,
  "t3": 5,
  "t4": 5,
  "t5": 5,
};

const INITIALS = {
  "t1": "MZ",
  "t2": "NH",
  "t3": "SZ",
  "t4": "DJ",
  "t5": "FO",
};

// ─── Helpers ──────────────────────────────────────────────────

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="#A5886E" stroke="#A5886E" strokeWidth="1">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ itemKey, index }: { itemKey: string; index: number }) {
  const t = useTranslations("TestimonialsPage");

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4"
    >
      {/* Quote mark */}
      <span className="text-[#1A7A43]/20 text-5xl font-serif leading-none select-none rtl:-scale-x-100">&ldquo;</span>
      <p className="text-[14px] text-[#475569] leading-relaxed -mt-5">{t(`items.${itemKey}.quote` as any)}</p>
      <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
        {/* Avatar initials */}
        <div className="w-10 h-10 rounded-full bg-[#1A7A43] flex items-center justify-center shrink-0">
          <span className="text-white text-[13px] font-bold">{(INITIALS as any)[itemKey]}</span>
        </div>
        <div>
          <p className="text-[14px] font-bold text-[#0f172a]">{t(`items.${itemKey}.author` as any)}</p>
          <p className="text-[12px] text-[#64748b]">{t(`items.${itemKey}.role` as any)}</p>
        </div>
        <div className="ml-auto rtl:mr-auto rtl:ml-0">
          <StarRating count={(RATINGS as any)[itemKey]} />
        </div>
      </div>
    </motion.div>
  );
}

// ─── Page ──────────────────────────────────────────────────────

export default function TestimonialsPage() {
  const t = useTranslations("TestimonialsPage");

  return (
    <main className="min-h-screen bg-[#f8f9fa]">

      {/* ── Hero ── */}
      <section className="py-16 px-6 text-center">
        <div className="container mx-auto max-w-3xl">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-[12px] text-[#94a3b8] mb-5">
            <Link href="/" className="hover:text-[#1A7A43] transition-colors">{t("breadcrumb.home")}</Link>
            <span className="rtl:rotate-180">›</span>
            <span className="text-[#0f172a] font-medium">{t("breadcrumb.testimonials")}</span>
          </nav>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#A5886E] mb-4"
          >
            {t("hero.subtitle")}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold text-[#0f172a] tracking-tight mb-4 leading-tight"
          >
            {t("hero.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#64748b] text-base sm:text-lg leading-relaxed"
          >
            {t("hero.description")}
          </motion.p>
        </div>
      </section>

      {/* ── Stats Row ── */}
      <section className="px-6 pb-12">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-3 gap-4 bg-white rounded-2xl shadow-sm border border-gray-100 px-8 py-6"
          >
            <div className="flex flex-col items-center text-center">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#A5886E]">1500+</span>
              <span className="text-[11px] sm:text-[12px] font-semibold text-[#64748b] uppercase tracking-wider mt-1">{t("stats.s1")}</span>
            </div>
            <div className="flex flex-col items-center text-center border-l rtl:border-r rtl:border-l-0 border-gray-100 pl-4 rtl:pr-4">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#A5886E]">25+</span>
              <span className="text-[11px] sm:text-[12px] font-semibold text-[#64748b] uppercase tracking-wider mt-1">{t("stats.s2")}</span>
            </div>
            <div className="flex flex-col items-center text-center border-l rtl:border-r rtl:border-l-0 border-gray-100 pl-4 rtl:pr-4">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#A5886E]">98%</span>
              <span className="text-[11px] sm:text-[12px] font-semibold text-[#64748b] uppercase tracking-wider mt-1">{t("stats.s3")}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Featured Testimonial ── */}
      <section className="px-6 pb-12">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-2"
          >
            {/* Left: image */}
            <div className="relative h-64 lg:h-auto bg-slate-700">
              <Image
                src="/testimonials/office.jpg"
                alt="Featured testimonial"
                fill
                className="object-cover opacity-80"
                unoptimized
              />
            </div>
            {/* Right: quote */}
            <div className="bg-[#0f172a] p-8 sm:p-10 flex flex-col justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-[#1A7A43] bg-[#1A7A43]/10 border border-[#1A7A43]/30 rounded-full px-3 py-1 mb-6">
                  {t("featured.badge")}
                </div>
                <p className="text-white/90 text-[16px] sm:text-[18px] leading-relaxed font-light italic">
                  &ldquo;{t("featured.quote")}&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-4 pt-5 border-t border-white/10">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-600 shrink-0">
                  <Image src="/testimonials/abdullah.jpg" alt="Abdullah Al Mansour" fill className="object-cover" unoptimized />
                  <div className="absolute inset-0 bg-slate-600 z-0" />
                </div>
                <div>
                  <p className="text-white font-bold text-[15px]">{t("featured.author")}</p>
                  <p className="text-white/60 text-[12px]">{t("featured.role")}</p>
                </div>
                <div className="ml-auto rtl:mr-auto rtl:ml-0">
                  <StarRating />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Testimonials Grid ── */}
      <section className="px-6 pb-16">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Regular cards */}
            {TESTIMONIALS_KEYS.slice(0, 4).map((key, i) => (
              <TestimonialCard key={i} itemKey={key} index={i} />
            ))}

            {/* CTA card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.36 }}
              className="bg-[#1A7A43] rounded-2xl p-7 shadow-sm flex flex-col justify-between gap-6"
            >
              <div>
                <p className="text-white/70 text-[11px] font-bold uppercase tracking-widest mb-3">{t("cta.subtitle")}</p>
                <h3 className="text-white text-xl font-extrabold leading-snug">
                  {t("cta.title")}
                </h3>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#A5886E] text-white font-bold text-[13px] py-3 px-5 rounded-lg hover:bg-[#8f7360] transition-colors group/btn"
              >
                {t("cta.btn")}
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1 rtl:rotate-180">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </Link>
            </motion.div>

            {/* Last testimonial */}
            {TESTIMONIALS_KEYS.slice(4).map((key, i) => (
              <TestimonialCard key={`last-${i}`} itemKey={key} index={i + 5} />
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
