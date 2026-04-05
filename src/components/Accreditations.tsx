"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useRef } from "react";
import { FaIdCard, FaMedal, FaHandshake, FaShieldAlt, FaArrowRight, FaArrowLeft } from "react-icons/fa";

const CERTIFICATES = Array.from(
  { length: 13 },
  (_, i) => `/testmonials/CamScanner 04-04-2026 19.19_${i + 1}.jpg`
);

export default function Accreditations() {
  const t = useTranslations("Accreditations");
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-[#fafafa]">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-[#1A7A43] bg-[#1A7A43]/10 border border-[#1A7A43]/30 rounded-full px-4 py-1 mb-6"
          >
            {t("badge")}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-[#1A7A43] tracking-tight mb-6"
          >
            {t("title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#64748b] text-base leading-relaxed"
          >
            {t("subtitle")}
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-20">
          
          {/* Card 1 - License (Span 4) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-4 bg-white rounded-xl shadow-sm border border-gray-100 p-8 flex flex-col items-center text-center justify-center gap-4"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#1A7A43] flex items-center justify-center text-white mb-2 shadow-lg">
              <FaIdCard size={28} />
            </div>
            <h3 className="text-xl font-bold text-[#1A7A43]">{t("cards.c1.title")}</h3>
            <p className="text-[#64748b] text-[13px] leading-relaxed">{t("cards.c1.description")}</p>
          </motion.div>

          {/* Card 2 - ISO (Span 8) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="col-span-1 md:col-span-8 bg-white rounded-xl shadow-sm border border-gray-100 p-8 flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="flex-1 text-center md:text-start md:rtl:text-right">
              <h3 className="text-2xl font-bold text-[#1A7A43] mb-4">{t("cards.c2.title")}</h3>
              <p className="text-[#64748b] text-[14px] leading-relaxed">{t("cards.c2.description")}</p>
            </div>
            <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 relative bg-gray-50 rounded-[2rem] flex items-center justify-center border-[6px] border-[#A5886E]/20 shadow-inner">
              <FaMedal size={64} className="text-[#A5886E]" />
            </div>
          </motion.div>

          {/* Card 3 - Partners (Span 4) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="col-span-1 md:col-span-4 bg-white rounded-xl shadow-sm border border-gray-100 p-8 flex flex-col items-center text-center justify-center gap-4"
          >
            <div className="flex gap-4 mb-2 text-[#64748b]/20">
               <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                 <FaHandshake size={32} />
               </div>
               <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                 <FaHandshake size={32} />
               </div>
            </div>
            <h3 className="text-xl font-bold text-[#1A7A43]">{t("cards.c3.title")}</h3>
            <p className="text-[#64748b] text-[13px] leading-relaxed">{t("cards.c3.description")}</p>
          </motion.div>

          {/* Card 4 - Security (Span 4) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="col-span-1 md:col-span-4 bg-[#1A7A43] rounded-xl shadow-md p-8 flex flex-col text-white justify-center gap-4 relative overflow-hidden"
          >
            <div className="absolute -right-6 -bottom-6 text-white/10 rtl:-left-6 rtl:right-auto">
              <FaShieldAlt size={140} />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white mb-4 backdrop-blur-md">
                <FaShieldAlt size={20} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{t("cards.c4.title")}</h3>
              <p className="text-white/80 text-[13px] leading-relaxed">{t("cards.c4.description")}</p>
            </div>
          </motion.div>

          {/* Card 5 - Award (Span 4) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="col-span-1 md:col-span-4 bg-slate-900 rounded-xl shadow-md relative overflow-hidden flex flex-col justify-end p-8 min-h-[250px]"
          >
             <div className="absolute inset-0 z-0">
               <Image src="/testimonials/office.jpg" alt="Award" fill className="object-cover opacity-50 sepia-[0.3]" unoptimized />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
             </div>
             <div className="relative z-10">
                <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-800 bg-white rounded-full px-3 py-1 mb-3 shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                  {t("cards.c5.title")}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{t("cards.c5.title")}</h3>
                <p className="text-white/70 text-[12px] leading-relaxed line-clamp-3">{t("cards.c5.description")}</p>
             </div>
          </motion.div>

        </div>

        {/* Record of Achievements (Carousel) */}
        <div className="py-12 border-t border-gray-200">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <h2 className="text-3xl font-bold text-[#1A7A43] mb-3">{t("record.title")}</h2>
              <p className="text-[#64748b] text-[14px]">{t("record.subtitle")}</p>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={scrollLeft} className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-[#1A7A43] hover:text-white hover:border-[#1A7A43] transition-colors">
                <FaArrowLeft className="rtl:rotate-180" />
              </button>
              <button onClick={scrollRight} className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-[#1A7A43] hover:text-white hover:border-[#1A7A43] transition-colors">
                <FaArrowRight className="rtl:rotate-180" />
              </button>
            </div>
          </div>

          {/* Carousel Track */}
          <div 
            ref={scrollRef}
            className="flex items-stretch gap-6 overflow-x-auto snap-x snap-mandatory pb-6 pt-2 px-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {CERTIFICATES.map((cert, i) => (
              <div 
                key={i} 
                className="snap-start shrink-0 w-[260px] md:w-[320px] bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow"
              >
                <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden border border-gray-100 mb-4 bg-gray-50">
                  <Image 
                    src={cert}
                    alt={`${t("record.title")} ${i + 1}`}
                    fill
                    className="object-contain" // Preserves original certificate proportions
                    unoptimized
                  />
                </div>
                <h4 className="text-center font-bold text-[#1A7A43] text-[14px] mt-auto">
                    {t("record.title")} {i + 1}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Bottom Section */}
        <div className="mt-8 bg-[#1A7A43]/5 rounded-3xl p-10 md:p-14 text-center border border-[#1A7A43]/10">
           <h2 className="text-3xl font-extrabold text-[#1A7A43] mb-4">{t("cta.title")}</h2>
           <p className="text-[#475569] text-[15px] max-w-2xl mx-auto leading-relaxed mb-8">
             {t("cta.subtitle")}
           </p>
           <Link
             href="/contact"
             className="inline-flex items-center justify-center gap-2 bg-[#1A7A43] text-white font-bold tracking-wide text-[14px] py-4 px-8 rounded-xl hover:bg-[#125830] transition-colors shadow-lg shadow-[#1A7A43]/20"
           >
             {t("cta.btn")}
           </Link>
        </div>

      </div>
    </section>
  );
}
