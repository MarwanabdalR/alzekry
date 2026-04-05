/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const EXPERTISE_CARDS = [
  {
    key: "litigation",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m14 13-7.5 7.5c-.8.8-2.2.8-3 0-1.1-1.1-1.1-2.6 0-3.6L11 9.5" />
        <path d="M14.5 12.5 16 11l-3-3m-1 1-3 3" />
        <path d="M17 11 11 5" />
        <path d="m22 7.5-3-3" />
        <path d="M22 17v4h-4" />
        <path d="M22 21 16 15" />
      </svg>
    ),
  },
  {
    key: "corporate",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
        <path d="M9 22v-4h6v4" />
        <path d="M8 6h.01" />
        <path d="M16 6h.01" />
        <path d="M12 6h.01" />
        <path d="M12 10h.01" />
        <path d="M12 14h.01" />
        <path d="M16 10h.01" />
        <path d="M16 14h.01" />
        <path d="M8 10h.01" />
        <path d="M8 14h.01" />
      </svg>
    ),
  },
  {
    key: "finance",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 22h20" />
        <path d="M12 2l-9 5v2h18V7z" />
        <path d="M5 22v-9" />
        <path d="M9 22v-9" />
        <path d="M15 22v-9" />
        <path d="M19 22v-9" />
      </svg>
    ),
  },
  {
    key: "criminal",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      </svg>
    ),
  },
];

export default function CoreExpertise() {
  const t = useTranslations("CoreExpertise");

  return (
    <section className="bg-[#1A7A43] py-20 px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl flex flex-col items-center">
        
        {/* Header Section */}
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white text-3xl sm:text-4xl font-bold mb-4 font-sans"
          >
            {t("title")}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/80 text-[15px] sm:text-base font-light leading-relaxed"
          >
            {t("description")}
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full mb-12">
          {EXPERTISE_CARDS.map((card, index) => (
            <motion.div
              key={card.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 hover:bg-white/20 transition-colors duration-300 border border-white/20 rounded-lg  flex flex-col items-center justify-center p-6 text-center shadow-sm"
            >
              <div className="text-white mb-5 transition-transform duration-300 hover:scale-110">
                {card.icon}
              </div>
              <h3 className="text-white text-[17px] font-semibold tracking-wide">
                {t(`cards.${card.key as any}`)}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link 
            href="/expertise"
            className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3.5 text-sm font-bold text-[#1A7A43] shadow-sm hover:bg-gray-100 transition-colors"
          >
            {t("seeAllBtn")}
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
