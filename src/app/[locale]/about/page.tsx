/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGavel, FaShieldAlt, FaMedal, FaCheckDouble } from "react-icons/fa";
import { MdOutlineVisibility, MdFlag } from "react-icons/md";
import { useTranslations } from "next-intl";

// ─── Data ──────────────────────────────────────────────────────

const TIMELINE_KEYS = [0, 1, 2, 3];

const CORE_VALUES_KEYS = [
  {
    key: "justice",
    icon: <FaGavel size={24} />,
  },
  {
    key: "trust",
    icon: <FaShieldAlt size={24} />,
  },
  {
    key: "expertise",
    icon: <FaMedal size={24} />,
  },
  {
    key: "integrity",
    icon: <FaCheckDouble size={24} />,
  },
];

// ─── Components ────────────────────────────────────────────────

export default function AboutUsPage() {
  const t = useTranslations("AboutUs");

  return (
    <main className="min-h-screen bg-white">
      
      {/* ── Hero Banner ── */}
      <section className="relative w-full h-90 sm:h-120 bg-slate-900 flex items-center justify-center overflow-hidden">
        {/* Background Image Setup */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/about-hero.jpg" // Placeholder path for the gavel hero background
            alt="A Legacy of Justice"
            fill
            className="object-cover opacity-40"
            unoptimized
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#0f172a] via-[#0f172a]/70 to-[#0f172a]/30" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl pt-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight"
          >
            {t("hero.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/80 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto font-light"
          >
            {t("hero.subtitle")}
          </motion.p>
        </div>
      </section>

      {/* ── Mission & Vision Cards ── */}
      <section className="py-20 px-6 lg:px-12 bg-white relative z-20 -mt-10">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#f0faf5] rounded-3xl p-10 sm:p-12 flex flex-col items-center text-center shadow-sm border border-[#1A7A43]/10"
            >
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#1A7A43] shadow-sm mb-6">
                <MdFlag size={28} />
              </div>
              <h2 className="text-2xl font-extrabold text-[#0f172a] mb-4">{t("mission.title")}</h2>
              <p className="text-[#475569] text-[15px] leading-relaxed">
                {t("mission.description")}
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#f0faf5] rounded-3xl p-10 sm:p-12 flex flex-col items-center text-center shadow-sm border border-[#1A7A43]/10"
            >
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#1A7A43] shadow-sm mb-6">
                <MdOutlineVisibility size={28} />
              </div>
              <h2 className="text-2xl font-extrabold text-[#0f172a] mb-4">{t("vision.title")}</h2>
              <p className="text-[#475569] text-[15px] leading-relaxed">
                {t("vision.description")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Timeline Section ── */}
      <section className="py-20 px-6 lg:px-12 bg-[#f8f9fa] border-y border-gray-100">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16 flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] mb-4">
              {t("timeline.title")}
            </h2>
            <div className="w-20 h-1.5 bg-[#1A7A43] rounded-full"></div>
          </div>

          <div className="relative">
            {/* Center Line for desktop */}
            <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#1A7A43]/20 -ml-px"></div>

            <div className="flex flex-col gap-12 sm:gap-16">
              {TIMELINE_KEYS.map((i) => {
                const isEven = i % 2 === 0;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className={`relative flex flex-col md:flex-row items-start md:items-center w-full ${
                      isEven ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Empty Space for desktop alternation */}
                    <div className="hidden md:block md:w-1/2"></div>
                    
                    {/* Center Node */}
                    <div className="absolute left-2.5 md:left-1/2 w-6 h-6 rounded-full bg-[#1A7A43] border-4 border-[#f8f9fa] transform -translate-x-2.5 md:-translate-x-1/2 mt-6 md:mt-0 shadow-sm z-10 flex items-center justify-center">
                      <span className="text-white text-[10px] font-bold">{i + 1}</span>
                    </div>

                    {/* Content Box */}
                    <div className={`w-full pl-12 md:pl-0 md:w-1/2 ${isEven ? "md:pr-14 lg:pr-20" : "md:pl-14 lg:pl-20"}`}>
                      <div className="bg-white p-7 sm:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <span className="inline-block text-[#1A7A43] font-black tracking-widest text-lg mb-2">
                          {t(`timeline.items.item${i}.year` as any)}
                        </span>
                        <h3 className="text-[18px] font-bold text-[#0f172a] mb-3">
                          {t(`timeline.items.item${i}.title` as any)}
                        </h3>
                        <p className="text-[#64748b] text-[14px] leading-relaxed">
                          {t(`timeline.items.item${i}.description` as any)}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values Section ── */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold text-[#0f172a]">
              {t("coreValues.title")}
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-8 sm:gap-16 md:gap-24">
            {CORE_VALUES_KEYS.map((val, i) => (
              <motion.div
                key={val.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#f0faf5] flex items-center justify-center text-[#1A7A43]">
                  {val.icon}
                </div>
                <span className="text-[16px] font-bold text-[#0f172a]">{t(`coreValues.values.${val.key as any}`)}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
