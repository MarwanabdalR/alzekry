"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function FounderProfile() {
  const t = useTranslations("FounderProfile");

  return (
    <section className="bg-[#f8f9fa] py-20 overflow-hidden relative">

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Decorative slanted background matching the image */}
            <div className="absolute inset-0 bg-[#122229] rounded-xl transform -rotate-2 scale-105 origin-center hidden sm:block"></div>
            
            <div className="relative aspect-4/5 w-full rounded-xl overflow-hidden shadow-sm z-10 border-4 border-white">
              {/* Replace /founder-placeholder.jpg with the actual path once provided by user */}
              <Image 
                src="/people/MohammedAlzekry-removebg-preview.png" 
                alt="Advocate Mohammed Al Zekry" 
                fill 
                className="object-cover object-top"
              />
            </div>
          </motion.div>

          {/* Right Column: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col pl-0 lg:pl-4"
          >
            <span className="text-[11px] font-extrabold tracking-[0.15em] text-[#1A7A43] uppercase mb-4">
              {t("subtitle")}
            </span>
            
            <h2 className="text-[32px] sm:text-[40px] lg:text-[44px] font-black text-[#0f172a] tracking-tight mb-3 leading-none">
              {t("name")}
            </h2>
            
            <h3 className="text-lg sm:text-[20px] font-medium italic text-[#1A7A43] mb-6">
              {t("role")}
            </h3>

            <div className="space-y-6 text-[#475569] text-[15px] sm:text-[16px] pr-0 lg:pr-12">
              <p className="leading-[1.7]">
                {t("p1")}
              </p>
              <p className="leading-[1.7]">
                {t("p2")}
              </p>
            </div>

            {/* Divider Line */}
            <hr className="my-8 border-gray-200 mr-0 lg:mr-12" />

            {/* Statistics Row */}
            <div className="grid grid-cols-3 gap-6 sm:gap-10 mb-10 mr-0 lg:mr-12">
              <div className="flex flex-col">
                <span className="text-[34px] sm:text-[38px] font-black text-[#1A7A43] leading-none mb-1">
                  30+
                </span>
                <span className="text-[9px] sm:text-[10px] font-bold tracking-widest text-[#64748b] uppercase">
                  {t("stats.years")}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[34px] sm:text-[38px] font-black text-[#1A7A43] leading-none mb-1">
                  500+
                </span>
                <span className="text-[9px] sm:text-[10px] font-bold tracking-widest text-[#64748b] uppercase">
                  {t("stats.cases")}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[34px] sm:text-[38px] font-black text-[#1A7A43] leading-none mb-1">
                  15
                </span>
                <span className="text-[9px] sm:text-[10px] font-bold tracking-widest text-[#64748b] uppercase">
                  {t("stats.awards")}
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <Link 
                href="/people/founder-al-zekry" 
                className="inline-flex items-center justify-center gap-3 rounded-sm bg-[#0f172a] px-5 py-3 text-[13px] font-bold text-white transition-all hover:bg-[#1e293b] hover:shadow-md cursor-pointer group"
              >
                {t("viewProfileBtn")}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
