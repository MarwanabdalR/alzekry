/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const VALUES_KEYS = [
  { id: "v1", image: "/values/integrity.jpg", icon: "🤝" },
  { id: "v2", image: "/values/excellence.jpg", icon: "⚖️" },
  { id: "v3", image: "/values/innovation.jpg", icon: "💡" },
  { id: "v4", image: "/values/client.jpg", icon: "🧑‍💼" },
];

const COMMITMENTS_KEYS = [
  "c1",
  "c2",
  "c3",
];

export default function ValuesPage() {
  const t = useTranslations("ValuesPage");

  return (
    <main className="min-h-screen bg-[#f8f9fa]">

      {/* ── Hero / Intro ── */}
      <section className="py-20 px-6 text-center">
        <div className="container mx-auto max-w-3xl">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-[12px] text-[#94a3b8] mb-6">
            <Link href="/" className="hover:text-[#1A7A43] transition-colors">{t("breadcrumb.home")}</Link>
            <span className="rtl:rotate-180">›</span>
            <span className="text-[#0f172a] font-medium">{t("breadcrumb.values")}</span>
          </nav>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#1A7A43] mb-4"
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold text-[#0f172a] tracking-tight mb-5 leading-tight"
          >
            {t("hero.title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#64748b] text-base sm:text-lg leading-relaxed"
          >
            {t("hero.description")}
          </motion.p>
        </div>
      </section>

      {/* ── Value Cards ── */}
      <section className="px-6 lg:px-12 pb-16">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES_KEYS.map((value, i) => (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative group rounded-2xl overflow-hidden aspect-3/4 shadow-md"
              >
                {/* Background image */}
                <div className="absolute inset-0 bg-slate-700">
                  <Image
                    src={value.image}
                    alt={t(`values.${value.id}.title` as any)}
                    fill
                    className="object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500"
                    unoptimized
                  />
                </div>
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col gap-2">
                  <span className="text-2xl">{value.icon}</span>
                  <h2 className="text-white text-[20px] font-extrabold leading-tight">{t(`values.${value.id}.title` as any)}</h2>
                  <p className="text-white/80 text-[12px] leading-relaxed opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                    {t(`values.${value.id}.description` as any)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Commitment Section (dark green) ── */}
      <section className="bg-[#1A7A43] py-20 px-6 lg:px-12">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left: image */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative aspect-video rounded-2xl overflow-hidden shadow-lg bg-[#146336]"
            >
              <Image
                src="/values/commitment.jpg"
                alt="Our Commitment"
                fill
                className="object-cover opacity-80"
                unoptimized
              />
            </motion.div>

            {/* Right: commitments list */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="flex flex-col gap-6"
            >
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                {t("commitments.title")}
              </h2>
              <ul className="flex flex-col gap-5">
                {COMMITMENTS_KEYS.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <span className="mt-1 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-white font-bold text-[16px] mb-0.5">{t(`commitments.${item}.title` as any)}</p>
                      <p className="text-white/75 text-[13px] leading-relaxed">{t(`commitments.${item}.description` as any)}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Founder Quote ── */}
      <section className="py-20 px-6 bg-[#f8f9fa]">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-[#1A7A43] text-2xl sm:text-3xl font-extrabold italic leading-relaxed mb-6"
          >
            {t("founder.quote")}
          </motion.blockquote>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center gap-1"
          >
            <p className="text-[#0f172a] font-bold text-[15px]">{t("founder.name")}</p>
            <p className="text-[#64748b] text-[13px]">{t("founder.title")}</p>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
