/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { PEOPLE } from "@/lib/people";

const FILTERS_KEYS = [
  "all",
  "litigation",
  "corporate",
  "arbitration",
  "ip",
  "realestate",
];

export default function PeoplePage() {
  const t = useTranslations("PeoplePage");
  const [activeFilter, setActiveFilter] = useState("all");

  // Since our dummy data might not have these exact categories as explicit tags,
  // we do a fuzzy match on the 'role' or 'specialties' or 'bio' for the sake of the demo,
  // or just return all if "All" is selected.
  const filteredPeople = PEOPLE.filter((person) => {
    if (activeFilter === "all") return true;
    const searchString = `${person.title} ${person.specialties?.map(s => s.title).join(" ")} ${person.bio}`.toLowerCase();
    
    // Special mapping for general terms
    if (activeFilter === "corporate" && searchString.includes("corporate")) return true;
    if (activeFilter === "ip" && searchString.includes("ip")) return true;
    
    return searchString.includes(activeFilter);
  });

  return (
    <main className="min-h-screen bg-[#f8f9fa] pt-24 pb-16">
      <div className="container mx-auto max-w-6xl px-6 lg:px-12">
        
        {/* ── Header ── */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight mb-4 leading-tight"
          >
            {t("title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#64748b] text-base sm:text-lg leading-relaxed max-w-3xl mx-auto"
          >
            {t("description")}
          </motion.p>
        </div>

        {/* ── Filters ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
        >
          {FILTERS_KEYS.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full text-[13px] font-bold transition-all duration-300 ${
                  isActive
                    ? "bg-[#1A7A43] text-white shadow-md shadow-[#1A7A43]/20"
                    : "bg-[#e2e8f0]/60 text-[#475569] hover:bg-[#e2e8f0]"
                }`}
              >
                {t(`filters.${filter}` as any)}
              </button>
            );
          })}
        </motion.div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
          {(filteredPeople.length > 0 ? filteredPeople : PEOPLE).map((person, i) => (
            <motion.div
              key={person.slug}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <Link
                href={`/people/${person.slug}`}
                className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative w-full aspect-4/5 bg-slate-100 overflow-hidden">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                    unoptimized
                  />
                  {/* Subtle overlay gradient */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-[#0f172a]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-5 text-center flex-1 flex flex-col items-center justify-center bg-white relative z-10 transition-transform duration-300 group-hover:-translate-y-2">
                  <h3 className="text-[17px] font-extrabold text-[#0f172a] mb-1">
                    {person.name}
                  </h3>
                  <p className="text-[12px] font-semibold text-[#1A7A43]">
                    {person.title}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#1A7A43] rounded-3xl p-10 sm:p-14 flex flex-col items-center text-center shadow-lg relative overflow-hidden"
        >
          {/* Decorative background circle */}
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
              {t("cta.title")}
            </h2>
            <p className="text-white/80 text-[14px] sm:text-[15px] mb-8 max-w-2xl mx-auto leading-relaxed">
              {t("cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-3.5 bg-white text-[#1A7A43] font-bold text-[14px] rounded-xl hover:bg-gray-50 transition-colors shadow-sm"
              >
                {t("cta.btnContact")}
              </Link>
              <Link
                href="/expertise"
                className="w-full sm:w-auto px-8 py-3.5 bg-[#146336] border border-[#146336] text-white font-bold text-[14px] rounded-xl hover:bg-[#1A7A43] hover:border-white/30 transition-colors"
              >
                {t("cta.btnServices")}
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
