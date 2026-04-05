"use client";

import { notFound } from "next/navigation";
import { use } from "react";
import { getArticleBySlug, NewsArticle } from "@/lib/news";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

// ─── Tag colors ────────────────────────────────────────────────
const TAG_STYLES: Record<string, string> = {
  REGULATORY: "bg-emerald-50 text-[#1A7A43] border-[#1A7A43]/30",
  EVENTS: "bg-emerald-50 text-[#1A7A43] border-[#1A7A43]/30",
  INSIGHT: "bg-blue-50 text-blue-700 border-blue-200",
  ANNOUNCEMENT: "bg-amber-50 text-amber-700 border-amber-200",
};

// ─── Sidebar event card ────────────────────────────────────────
function EventSidebar({ article, slug }: { article: NewsArticle, slug: string }) {
  const t = useTranslations("NewsArticlePage");

  if (!article.eventDate) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-white rounded-2xl shadow-sm overflow-hidden"
    >
      {/* Green header */}
      <div className="bg-[#1A7A43] px-6 py-4">
        <h2 className="text-white font-bold text-[16px]">{t("sidebar.eventDetails")}</h2>
      </div>
      <div className="p-6 flex flex-col gap-5">
        {/* Date */}
        <div className="flex items-start gap-3">
          <span className="text-[#1A7A43] mt-0.5 shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="18" height="18" x="3" y="4" rx="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>
            </svg>
          </span>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#94a3b8]">{t("sidebar.date")}</p>
            <p className="text-[14px] font-semibold text-[#0f172a]">{article.eventDate}</p>
          </div>
        </div>
        {/* Time */}
        <div className="flex items-start gap-3">
          <span className="text-[#1A7A43] mt-0.5 shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
          </span>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#94a3b8]">{t("sidebar.time")}</p>
            <p className="text-[14px] font-semibold text-[#0f172a]">{article.eventTime}</p>
          </div>
        </div>
        {/* Location */}
        <div className="flex items-start gap-3">
          <span className="text-[#1A7A43] mt-0.5 shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
            </svg>
          </span>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#94a3b8]">{t("sidebar.location")}</p>
            <p className="text-[14px] font-semibold text-[#0f172a]">
              {slug === "annual-legal-symposium-2024" ? t(`articles.${slug}.eventLocation`) : article.eventLocation}
            </p>
          </div>
        </div>
        {/* Price */}
        {article.eventPrice && (
          <div className="pt-2 border-t border-gray-100">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#94a3b8] mb-1">{t("sidebar.fee")}</p>
            <p className="text-2xl font-extrabold text-[#1A7A43]">
              {slug === "annual-legal-symposium-2024" ? t(`articles.${slug}.eventPrice`) : article.eventPrice}
            </p>
          </div>
        )}
        {/* CTA */}
        <Link
          href="/contact"
          className="w-full block text-center bg-[#1A7A43] text-white font-bold text-[14px] py-3 rounded-lg hover:bg-[#146336] transition-colors"
        >
          {t("sidebar.registerBtn")}
        </Link>
        {/* Contact */}
        {(article.contactEmail || article.contactPhone) && (
          <div className="pt-2 border-t border-gray-100 flex flex-col gap-2">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#94a3b8]">{t("sidebar.needHelp")}</p>
            {article.contactPhone && (
              <a href={`tel:${article.contactPhone}`} className="flex items-center gap-2 text-[13px] text-[#475569] hover:text-[#1A7A43] text-left rtl:text-right transition-colors" dir="ltr">
                <FaPhoneAlt size={12} /> {article.contactPhone}
              </a>
            )}
            {article.contactEmail && (
              <a href={`mailto:${article.contactEmail}`} className="flex items-center gap-2 text-[13px] text-[#475569] hover:text-[#1A7A43] text-left rtl:text-right transition-colors">
                <FaEnvelope size={12} /> {article.contactEmail}
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}

// ─── Page ──────────────────────────────────────────────────────
export default function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const t = useTranslations("NewsArticlePage");
  const tNews = useTranslations("NewsUpdates");
  
  const { slug } = use(params);
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const tagStyle = TAG_STYLES[article.tag] ?? "bg-gray-100 text-gray-700 border-gray-200";

  return (
    <main className="min-h-screen bg-[#f3f4f6]">

      {/* ── Hero Image ── */}
      <div className="relative w-full h-85 sm:h-105 overflow-hidden bg-slate-800">
        <Image
          src={article.heroImage}
          alt={tNews(`items.${slug}.title`)}
          fill
          className="object-cover opacity-60"
          unoptimized
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-[#0f172a]/80 via-[#0f172a]/30 to-transparent" />
        {/* Hero text */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`inline-flex items-center text-[11px] font-bold uppercase tracking-widest border rounded-full px-3 py-1 mb-3 ${tagStyle}`}
          >
            {tNews(`items.${slug}.tag`)}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-4xl font-extrabold text-white leading-tight"
          >
            {tNews(`items.${slug}.title`)}
          </motion.h1>
        </div>
      </div>

      {/* ── Breadcrumb ── */}
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-[12px] text-[#64748b]">
          <Link href="/" className="hover:text-[#1A7A43] transition-colors">{t("breadcrumb.home")}</Link>
          <span className="rtl:rotate-180">›</span>
          <Link href="/news" className="hover:text-[#1A7A43] transition-colors">{t("breadcrumb.news")}</Link>
          <span className="rtl:rotate-180">›</span>
          <span className="text-[#0f172a] font-medium">{tNews(`items.${slug}.tag`)}</span>
        </nav>
      </div>

      {/* ── Content Area ── */}
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 items-start">

          {/* ── Left: Article body ── */}
          <div className="flex flex-col gap-8">

            {/* Main body */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-sm p-7 flex flex-col gap-5"
            >
              {/* Meta */}
              <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                <span className={`text-[11px] font-extrabold uppercase tracking-widest border rounded-full px-3 py-1 ${tagStyle}`}>
                  {tNews(`items.${slug}.tag`)}
                </span>
                <span className="text-[#94a3b8] text-[12px] font-medium">{tNews(`items.${slug}.date`)}</span>
              </div>
              {article.body.map((_, i) => (
                <p key={i} className="text-[15px] text-[#475569] leading-relaxed">
                  {t(`articles.${slug}.body.${i}`)}
                </p>
              ))}
            </motion.div>

            {/* What will you learn? */}
            {article.learnings && article.learnings.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-sm p-7"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-5 h-1 rounded-full bg-[#1A7A43]" />
                  <h2 className="text-[18px] font-bold text-[#0f172a]">{t("sections.whatYouLearn")}</h2>
                </div>
                <ul className="flex flex-col gap-4">
                  {article.learnings.map((_, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-1 w-5 h-5 rounded-full bg-[#f0faf5] flex items-center justify-center shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1A7A43" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      </span>
                      <span className="text-[14px] text-[#475569] leading-relaxed">
                        {t(`articles.${slug}.learnings.${i}`)}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Agenda */}
            {article.agenda && article.agenda.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-sm p-7"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-5 h-1 rounded-full bg-[#1A7A43]" />
                  <h2 className="text-[18px] font-bold text-[#0f172a]">{t("sections.agenda")}</h2>
                </div>
                <div className="flex flex-col gap-5 border-l-2 border-[#1A7A43]/20 pl-4">
                  {article.agenda.map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className="relative"
                    >
                      <span className="absolute -left-[1.4rem] top-1 w-3 h-3 rounded-full bg-[#1A7A43] border-2 border-white shadow" />
                      <p className="text-[11px] font-bold uppercase tracking-widest text-[#1A7A43] mb-1">
                        {t(`articles.${slug}.agenda.${i}.time`)}
                      </p>
                      <h3 className="text-[15px] font-bold text-[#0f172a] mb-1">
                        {t(`articles.${slug}.agenda.${i}.session`)}
                      </h3>
                      <p className="text-[13px] text-[#94a3b8] leading-relaxed">
                        {t(`articles.${slug}.agenda.${i}.description`)}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Speakers */}
            {article.speakers && article.speakers.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-sm p-7"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-5 h-1 rounded-full bg-[#1A7A43]" />
                  <h2 className="text-[18px] font-bold text-[#0f172a]">{t("sections.speakers")}</h2>
                </div>
                <div className="flex flex-wrap gap-5">
                  {article.speakers.map((speaker, i) => (
                    <div key={i} className="flex items-center gap-4 bg-[#f8faf9] rounded-xl p-4 border border-gray-100 min-w-[200px]">
                      <div className="relative w-14 h-14 rounded-full overflow-hidden bg-slate-200 shrink-0">
                        <Image src={speaker.image} alt={t(`articles.${slug}.speakers.${i}.name`)} fill className="object-cover object-top" unoptimized />
                        <div className="absolute inset-0 bg-slate-300 z-0" />
                      </div>
                      <div>
                        <p className="text-[14px] font-bold text-[#0f172a]">
                          {t(`articles.${slug}.speakers.${i}.name`)}
                        </p>
                        <p className="text-[12px] text-[#1A7A43] font-medium">
                          {t(`articles.${slug}.speakers.${i}.role`)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Back link */}
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-[13px] text-[#64748b] hover:text-[#1A7A43] transition-colors group/back"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="rtl:rotate-180 group-hover/back:-translate-x-1 rtl:group-hover/back:translate-x-1 transition-transform">
                <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
              </svg>
              {t("sections.backLink")}
            </Link>

          </div>

          {/* ── Right sidebar ── */}
          <div className="flex flex-col gap-6">
            <EventSidebar article={article} slug={slug} />

            {/* Share / related CTA when no event */}
            {!article.eventDate && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex items-start gap-4 min-w-50"
              >
                <div className="flex flex-col gap-4">
                  <h2 className="text-[15px] font-bold text-[#0f172a]">{t("fallbackSidebar.title")}</h2>
                  <p className="text-[12px] text-[#64748b] leading-relaxed">
                    {t("fallbackSidebar.description")}
                  </p>
                  <Link
                    href="/contact"
                    className="w-full block text-center bg-[#1A7A43] text-white font-bold text-[14px] py-3 rounded-lg hover:bg-[#146336] transition-colors"
                  >
                    {t("fallbackSidebar.btn")}
                  </Link>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
