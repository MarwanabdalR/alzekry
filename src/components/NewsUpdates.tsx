"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { NEWS_ARTICLES } from "@/lib/news";

const TAG_COLORS: Record<string, string> = {
  REGULATORY: "text-[#1A7A43]",
  EVENTS: "text-[#1A7A43]",
  INSIGHT: "text-[#1A7A43]",
  ANNOUNCEMENT: "text-amber-600",
};

export default function NewsUpdates() {
  return (
    <section className="bg-white py-16 px-6 lg:px-12">
      <div className="container mx-auto max-w-6xl">
        {/* Header row */}
        <div className="flex items-end justify-between mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-bold text-[#0f172a]"
          >
            News & Legal Updates
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="/news"
              className="inline-flex items-center gap-1.5 text-[#1A7A43] text-sm font-semibold hover:underline"
            >
              See All News
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {NEWS_ARTICLES.map((item, index) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              {/* Thumbnail */}
              <div className="relative w-full aspect-video bg-slate-200 overflow-hidden">
                <Image
                  src={item.heroImage}
                  alt={item.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-slate-300 z-0" />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-[11px] font-extrabold tracking-widest uppercase ${TAG_COLORS[item.tag] ?? "text-[#1A7A43]"}`}>
                    {item.tag}
                  </span>
                  <span className="text-gray-300 text-xs">·</span>
                  <span className="text-[11px] text-[#94a3b8] font-medium">{item.date}</span>
                </div>
                <h3 className="text-[15px] font-bold text-[#0f172a] leading-snug mb-2">
                  {item.title}
                </h3>
                <p className="text-[13px] text-[#64748b] leading-relaxed flex-1 mb-4">
                  {item.excerptShort}
                </p>
                <Link
                  href={`/news/${item.slug}`}
                  className="inline-flex items-center gap-1 text-[#1A7A43] text-[13px] font-semibold hover:underline"
                >
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
