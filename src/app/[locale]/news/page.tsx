/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { NEWS_ARTICLES } from "@/lib/news";

const FILTERS_KEYS = [
  "all",
  "corporate",
  "updates",
  "litigation",
  "firm",
];

const TAG_COLORS: Record<string, string> = {
  REGULATORY: "text-[#1A7A43] bg-[#1A7A43]/10",
  EVENTS: "text-[#1A7A43] bg-[#1A7A43]/10",
  INSIGHT: "text-[#1A7A43] bg-[#1A7A43]/10",
  ANNOUNCEMENT: "text-[#A5886E] bg-[#A5886E]/10",
};

export default function NewsPage() {
  const t = useTranslations("NewsPage");
  const tNews = useTranslations("NewsUpdates");
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 6;

  // Basic filtering logic mapping UI filters to our data tags or keywords
  const filteredNews = NEWS_ARTICLES.filter((article) => {
    if (activeFilter === "all") return true;
    
    // Exact mapping for the demo
    if (activeFilter === "updates" && article.tag === "REGULATORY") return true;
    if (activeFilter === "firm" && (article.tag === "EVENTS" || article.tag === "ANNOUNCEMENT")) return true;
    
    // Keyword search for the rest
    const searchString = `${article.title} ${article.excerptShort} ${article.tag}`.toLowerCase();
    
    if (activeFilter === "corporate" && searchString.includes("corporate")) return true;
    if (activeFilter === "litigation" && searchString.includes("litigation")) return true;
    
    return false;
  });

  return (
    <main className="min-h-screen bg-[#f8f9fa] pt-24 pb-20">
      <div className="container mx-auto max-w-6xl px-6 lg:px-12">
        
        {/* ── Header ── */}
        <div className="text-center mb-10">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight mb-5 leading-tight"
          >
            {t("title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#64748b] text-base sm:text-[17px] leading-relaxed max-w-3xl mx-auto"
          >
            {t("description")}
          </motion.p>
        </div>

        {/* ── Filters ── */}
        <motion.div
           initial={{ opacity: 0, y: 16 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 0.2 }}
           className="flex flex-wrap items-center justify-center gap-3 mb-14"
        >
          {FILTERS_KEYS.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => {
                  setActiveFilter(filter);
                  setCurrentPage(1);
                }}
                className={`px-5 py-2.5 rounded-xl text-[13px] font-bold transition-all duration-300 border ${
                  isActive
                    ? "bg-[#1A7A43] border-[#1A7A43] text-white shadow-md shadow-[#1A7A43]/20"
                    : "bg-white border-gray-200 text-[#475569] hover:border-[#1A7A43]/40 hover:text-[#1A7A43]"
                }`}
              >
                {t(`filters.${filter}` as any)}
              </button>
            );
          })}
        </motion.div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredNews.length === 0 && (
            <div className="col-span-1 sm:col-span-2 lg:col-span-3 text-center py-12 text-[#64748b]">
              {t("emptyState")}
            </div>
          )}
          {filteredNews.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE).map((item, index) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-400 flex flex-col group"
            >
              {/* Thumbnail */}
              <div className="relative w-full aspect-[1.6/1] bg-slate-200 overflow-hidden">
                <Image
                  src={item.heroImage}
                  alt={tNews(`items.${item.slug}.title`)}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
                
                {/* Floating Tag */}
                <div className="absolute top-4 right-4 z-10">
                  <span className={`text-[10px] font-extrabold tracking-widest uppercase px-3 py-1.5 rounded-lg backdrop-blur-md ${TAG_COLORS[item.tag] || "text-white bg-black/50"}`}>
                    {tNews(`items.${item.slug}.tag`)}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-4 text-[#64748b]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>
                  </svg>
                  <span className="text-[12px] font-medium">{tNews(`items.${item.slug}.date`)}</span>
                </div>
                
                <h3 className="text-[17px] font-bold text-[#0f172a] leading-snug mb-3 group-hover:text-[#1A7A43] transition-colors">
                  {tNews(`items.${item.slug}.title`)}
                </h3>
                
                <p className="text-[13px] text-[#475569] leading-relaxed flex-1 mb-5">
                  {tNews(`items.${item.slug}.excerptShort`)}
                </p>
                
                <Link
                  href={`/news/${item.slug}`}
                  className="inline-flex items-center gap-1.5 text-[#A5886E] text-[13px] font-bold mt-auto group/link"
                >
                  {t("readMore")}
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform rtl:rotate-180 group-hover/link:translate-x-1 rtl:group-hover/link:-translate-x-1">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Pagination ── */}
        {Math.ceil(filteredNews.length / ITEMS_PER_PAGE) > 1 && (
          <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="flex justify-center items-center gap-2"
          >
            <button 
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="w-10 h-10 rounded-[10px] border border-gray-200 flex items-center justify-center text-[#64748b] hover:border-[#1A7A43] hover:text-[#1A7A43] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="rtl:rotate-180">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
            </button>
            
            {Array.from({ length: Math.ceil(filteredNews.length / ITEMS_PER_PAGE) }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-[10px] border font-bold text-[13px] transition-colors flex items-center justify-center ${
                  currentPage === page 
                    ? "bg-[#1A7A43] border-[#1A7A43] text-white" 
                    : "bg-white border-gray-200 text-[#64748b] hover:border-[#1A7A43] hover:text-[#1A7A43]"
                }`}
              >
                {page}
              </button>
            ))}

            <button 
              onClick={() => setCurrentPage(p => Math.min(Math.ceil(filteredNews.length / ITEMS_PER_PAGE), p + 1))}
              disabled={currentPage === Math.ceil(filteredNews.length / ITEMS_PER_PAGE)}
              className="w-10 h-10 rounded-[10px] border border-gray-200 bg-white flex items-center justify-center text-[#64748b] hover:border-[#1A7A43] hover:text-[#1A7A43] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="rtl:rotate-180">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </button>
          </motion.div>
        )}

      </div>
    </main>
  );
}
