"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// ─── Data ──────────────────────────────────────────────────────

const STATS = [
  { value: "1500+", label: "Happy Clients" },
  { value: "25+", label: "Years of Excellence" },
  { value: "98%", label: "Client Satisfaction" },
];

const FEATURED = {
  quote:
    "Working with Al Zekry Law Firm was a turning point. They transformed routine legal processes into strategic opportunities for our international arbitration cases. Their responsiveness and international integration were beyond any standard.",
  author: "Abdullah Al Mansour",
  role: "CEO – Al Mansour International Group",
  avatar: "/testimonials/abdullah.jpg",
  image: "/testimonials/office.jpg",
};

const TESTIMONIALS = [
  {
    quote:
      "They helped us in the most difficult situations, navigating the complexities with professionalism and dedication. I highly recommend Al Zekry to anyone looking for a reliable legal partner.",
    author: "Mohamed Bin Zayed",
    role: "Real Estate Developer",
    initials: "MZ",
    rating: 5,
  },
  {
    quote:
      "Al Zekry stood by us with their exceptional legal expertise, handling over 45 cases for us in less than a year, effectively serving and protecting our investors.",
    author: "Nilly Hadi",
    role: "Investment Group CEO",
    initials: "NH",
    rating: 5,
  },
  {
    quote:
      "Excellent results in every case. Their team is always available, and each outcome exceeded our expectations from both a legal and strategic perspective.",
    author: "Saleh Al Zahrani",
    role: "Managing Partner",
    initials: "SZ",
    rating: 5,
  },
  {
    quote:
      "They assisted us with one of our most complex financial cases, and their performance was exemplary. They handled everything with the highest professionalism and clarity.",
    author: "Doha Al Jasem",
    role: "CFO – Private Sector",
    initials: "DJ",
    rating: 5,
  },
  {
    quote:
      "The attention to detail and the quality of legal advice we received from Al Zekry cannot be matched. Every case is treated with the same level of care and strategy.",
    author: "Fahad Al Omari",
    role: "Family Business Owner",
    initials: "FO",
    rating: 5,
  },
];

// ─── Helpers ──────────────────────────────────────────────────

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="#A5886E" stroke="#A5886E" strokeWidth="1">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ item, index }: { item: typeof TESTIMONIALS[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4"
    >
      {/* Quote mark */}
      <span className="text-[#1A7A43]/20 text-5xl font-serif leading-none select-none">&ldquo;</span>
      <p className="text-[14px] text-[#475569] leading-relaxed -mt-5">{item.quote}</p>
      <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
        {/* Avatar initials */}
        <div className="w-10 h-10 rounded-full bg-[#1A7A43] flex items-center justify-center shrink-0">
          <span className="text-white text-[13px] font-bold">{item.initials}</span>
        </div>
        <div>
          <p className="text-[14px] font-bold text-[#0f172a]">{item.author}</p>
          <p className="text-[12px] text-[#64748b]">{item.role}</p>
        </div>
        <div className="ml-auto">
          <StarRating count={item.rating} />
        </div>
      </div>
    </motion.div>
  );
}

// ─── Page ──────────────────────────────────────────────────────

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-[#f8f9fa]" dir="ltr">

      {/* ── Hero ── */}
      <section className="py-16 px-6 text-center">
        <div className="container mx-auto max-w-3xl">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-[12px] text-[#94a3b8] mb-5">
            <Link href="/" className="hover:text-[#1A7A43] transition-colors">Home</Link>
            <span>›</span>
            <span className="text-[#0f172a] font-medium">Testimonials</span>
          </nav>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#A5886E] mb-4"
          >
            Client Stories
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold text-[#0f172a] tracking-tight mb-4 leading-tight"
          >
            Wall of Love & Appreciation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#64748b] text-base sm:text-lg leading-relaxed"
          >
            Real testimonials from companies and individuals who achieved success alongside Al Zekry Law Firm.
          </motion.p>
        </div>
      </section>

      {/* ── Stats Row ── */}
      <section className="px-6 pb-12">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-3 gap-4 bg-white rounded-2xl shadow-sm border border-gray-100 px-8 py-6"
          >
            {STATS.map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#A5886E]">{stat.value}</span>
                <span className="text-[11px] sm:text-[12px] font-semibold text-[#64748b] uppercase tracking-wider mt-1">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Featured Testimonial ── */}
      <section className="px-6 pb-12">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-2"
          >
            {/* Left: image */}
            <div className="relative h-64 lg:h-auto bg-slate-700">
              <Image
                src={FEATURED.image}
                alt="Featured testimonial"
                fill
                className="object-cover opacity-80"
                unoptimized
              />
            </div>
            {/* Right: quote */}
            <div className="bg-[#0f172a] p-8 sm:p-10 flex flex-col justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-[#1A7A43] bg-[#1A7A43]/10 border border-[#1A7A43]/30 rounded-full px-3 py-1 mb-6">
                  ✦ Featured Testimonial
                </div>
                <p className="text-white/90 text-[16px] sm:text-[18px] leading-relaxed font-light italic">
                  &ldquo;{FEATURED.quote}&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-4 pt-5 border-t border-white/10">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-600 shrink-0">
                  <Image src={FEATURED.avatar} alt={FEATURED.author} fill className="object-cover" unoptimized />
                  <div className="absolute inset-0 bg-slate-600 z-0" />
                </div>
                <div>
                  <p className="text-white font-bold text-[15px]">{FEATURED.author}</p>
                  <p className="text-white/60 text-[12px]">{FEATURED.role}</p>
                </div>
                <div className="ml-auto">
                  <StarRating />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Testimonials Grid ── */}
      <section className="px-6 pb-16">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Regular cards */}
            {TESTIMONIALS.slice(0, 4).map((item, i) => (
              <TestimonialCard key={i} item={item} index={i} />
            ))}

            {/* CTA card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.36 }}
              className="bg-[#1A7A43] rounded-2xl p-7 shadow-sm flex flex-col justify-between gap-6"
            >
              <div>
                <p className="text-white/70 text-[11px] font-bold uppercase tracking-widest mb-3">Share Your Story</p>
                <h3 className="text-white text-xl font-extrabold leading-snug">
                  Is your story a success? Tell us about it!
                </h3>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#A5886E] text-white font-bold text-[13px] py-3 px-5 rounded-lg hover:bg-[#8f7360] transition-colors"
              >
                Share Your Experience
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </Link>
            </motion.div>

            {/* Last testimonial */}
            {TESTIMONIALS.slice(4).map((item, i) => (
              <TestimonialCard key={`last-${i}`} item={item} index={i + 5} />
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
