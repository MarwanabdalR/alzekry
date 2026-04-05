/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import {
  FaGavel, FaFileContract, FaUsers, FaBuilding,
  FaShieldAlt, FaTrademark, FaHandshake, FaComments,
  FaHome, FaBalanceScale, FaArrowRight,
} from "react-icons/fa";
import { MdEmojiEvents } from "react-icons/md";

import { useTranslations } from "next-intl";

const PRACTICE_AREAS_KEYS = [
  { id: "criminal", Icon: FaGavel },
  { id: "civil", Icon: FaFileContract },
  { id: "family", Icon: FaUsers },
  { id: "corporate", Icon: FaBuilding },
  { id: "consumer", Icon: FaShieldAlt },
  { id: "ip", Icon: FaTrademark },
  { id: "arbitration", Icon: FaHandshake },
  { id: "consult", Icon: FaComments },
];

const STATS_KEYS = [
  { id: "years", value: "15+" },
  { id: "cases", value: "500+" },
  { id: "clients", value: "200+" },
  { id: "partners", value: "30+" },
];

const MILESTONES_KEYS = [
  { id: "m1" },
  { id: "m2" },
  { id: "m3" },
];

const SECTORS_KEYS = [
  { id: "consumer", Icon: FaShieldAlt },
  { id: "realestate", Icon: FaHome },
  { id: "family", Icon: FaUsers },
  { id: "contract", Icon: FaFileContract },
];

export default function ExpertiseAndAwardsPage() {
  const t = useTranslations("ExpertisePage");

  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero Banner ── */}
      <section className="relative w-full h-90 sm:h-120 bg-linear-to-br from-[#1A7A43] to-[#145d33] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[url('/about-hero.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>

        <div className="relative z-10 container mx-auto text-center px-6 max-w-4xl pt-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <span className="w-8 h-px bg-[#A5886E]"></span>
            <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#A5886E]">
              {t("hero.subtitle")}
            </span>
            <span className="w-8 h-px bg-[#A5886E]"></span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight"
          >
            {t("hero.title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/90 text-[16px] sm:text-lg leading-relaxed max-w-3xl mx-auto font-light"
          >
            {t("hero.description")}
          </motion.p>
        </div>
      </section>

      {/* ── Practice Areas ── */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="flex flex-col text-center mb-14">
            <div className="inline-flex items-center justify-center gap-2 mb-3">
              <span className="w-6 h-px bg-[#1A7A43]"></span>
              <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#1A7A43]">
                {t("practiceAreas.subtitle")}
              </span>
              <span className="w-6 h-px bg-[#1A7A43]"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] mb-4">
              {t("practiceAreas.title")}
            </h2>
            <p className="text-[#64748b] text-[15px] max-w-2xl mx-auto leading-relaxed">
              {t("practiceAreas.description")}
            </p>
          </div>

          {/* Grid – 8 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PRACTICE_AREAS_KEYS.map((area, i) => (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col group hover:shadow-lg transition-all duration-300"
              >
                <div className="p-7 flex flex-col flex-1">
                  <div className="w-12 h-12 rounded-xl bg-[#f0faf5] text-[#1A7A43] flex items-center justify-center mb-4 group-hover:bg-[#1A7A43] group-hover:text-white transition-colors">
                    <area.Icon size={22} />
                  </div>
                  <h3 className="text-[15px] font-extrabold text-[#0f172a] mb-2 group-hover:text-[#1A7A43] transition-colors">
                    {t(`practiceAreas.items.${area.id}.title` as any)}
                  </h3>
                  <p className="text-[#64748b] text-[13px] leading-relaxed flex-1">
                    {t(`practiceAreas.items.${area.id}.description` as any)}
                  </p>
                  <Link href="/contact" className="inline-flex items-center gap-1.5 text-[#1A7A43] text-[12px] font-bold mt-4 hover:gap-2.5 transition-all">
                    {t("practiceAreas.consultBtn")} <FaArrowRight size={11} className="rtl:rotate-180" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Recognition & Stats ── */}
      <section className="py-24 px-6 lg:px-12 bg-[#1A7A43]">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="flex flex-col text-center mb-16">
            <div className="inline-flex items-center justify-center gap-2 mb-3">
              <span className="w-6 h-px bg-[#A5886E]"></span>
              <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#A5886E]">
                {t("recognition.subtitle")}
              </span>
              <span className="w-6 h-px bg-[#A5886E]"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              {t("recognition.title")}
            </h2>
            <p className="text-white/80 text-[15px] max-w-2xl mx-auto leading-relaxed font-light">
              {t("recognition.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Milestones Timeline */}
            <div className="relative border-l-2 rtl:border-r-2 rtl:border-l-0 rtl:pr-8 border-[#146336] pl-8 py-4 ml-4 rtl:ml-0 rtl:mr-4">
              {MILESTONES_KEYS.map((m, i) => (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative ${i < MILESTONES_KEYS.length - 1 ? "mb-10" : ""}`}
                >
                  <span className="absolute -left-10.25 rtl:-right-10.25 rtl:left-auto top-1.5 w-4 h-4 rounded-sm bg-[#A5886E] border-4 border-[#1A7A43] shadow-sm transform -rotate-45" />
                  <h3 className="text-2xl font-black text-white mb-2">{t(`recognition.milestones.${m.id}.year` as any)}</h3>
                  <h4 className="text-[17px] font-bold text-white mb-2">{t(`recognition.milestones.${m.id}.title` as any)}</h4>
                  <p className="text-white/70 text-[14px] leading-relaxed">{t(`recognition.milestones.${m.id}.description` as any)}</p>
                </motion.div>
              ))}
            </div>

            {/* Right: Stats Grid */}
            <div className="grid grid-cols-2 gap-5">
              {STATS_KEYS.map((stat, i) => (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="bg-[#1e884d] rounded-2xl p-8 flex flex-col items-center text-center shadow-lg border border-[#27a25f]/50 hover:bg-[#209454] transition-colors"
                >
                  <div className="w-16 h-16 rounded-full bg-[#A5886E]/20 text-[#A5886E] flex items-center justify-center mb-5">
                    <MdEmojiEvents size={28} />
                  </div>
                  <h4 className="text-[22px] font-extrabold text-white mb-1">{stat.value}</h4>
                  <p className="text-white/70 text-[12px] uppercase tracking-wider font-semibold">{t(`recognition.stats.${stat.id}` as any)}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Sectors ── */}
      <section className="py-24 px-6 lg:px-12 bg-[#f8f9fa]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] mb-4">
              {t("sectors.title")}
            </h2>
            <p className="text-[#64748b] text-[15px] max-w-xl mx-auto leading-relaxed">
              {t("sectors.description")}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {SECTORS_KEYS.map((sector, i) => (
              <motion.div
                key={sector.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center gap-6 p-6 sm:p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#f0faf5] text-[#1A7A43] flex items-center justify-center shrink-0 group-hover:bg-[#1A7A43] group-hover:text-white transition-colors">
                  <sector.Icon size={22} />
                </div>
                <div className="flex-1">
                  <h3 className="text-[17px] font-extrabold text-[#0f172a] mb-1 group-hover:text-[#1A7A43] transition-colors">{t(`sectors.items.${sector.id}.title` as any)}</h3>
                  <p className="text-[14px] text-[#64748b]">{t(`sectors.items.${sector.id}.description` as any)}</p>
                </div>
                <FaBalanceScale className="text-[#e2e8f0] group-hover:text-[#1A7A43]/20 transition-colors shrink-0" size={28} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
