"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// ─── Data ──────────────────────────────────────────────────────

const TIMELINE = [
  {
    year: "1995",
    title: "Established in Riyadh",
    description:
      "Commenced our journey by inaugurating the main office in Riyadh, with a focus on corporate and labor dispute cases.",
  },
  {
    year: "2005",
    title: "Expansion into International Arbitration",
    description:
      "Launched a specialized department in international commercial arbitration, enhancing our capability to represent clients in cross-border disputes.",
  },
  {
    year: "2015",
    title: "Corporate Law Excellence Award",
    description:
      "Achieved recognition from prestigious legal organizations for our prominent contribution in providing legal consulting to the private sector.",
  },
  {
    year: "2023",
    title: "Opening Dubai Branch",
    description:
      "Expanded our regional footprint by inaugurating an office in the Dubai International Financial Centre (DIFC) to serve international clients across the Gulf.",
  },
];

const CORE_VALUES = [
  {
    label: "Justice",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20"/><path d="M7 6v12"/><path d="M17 6v12"/><path d="M4 18h16"/><path d="M4 6h16"/><path d="M10 2h4"/>
      </svg>
    ),
  },
  {
    label: "Trust",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="m9 12 2 2 4-4"/>
      </svg>
    ),
  },
  {
    label: "Expertise",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
      </svg>
    ),
  },
  {
    label: "Integrity",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/>
        <path d="m9 12 2 2 4-4"/>
      </svg>
    ),
  },
];

// ─── Components ────────────────────────────────────────────────

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-white" dir="ltr">
      
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
            A Legacy of Justice and Integrity
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/80 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto font-light"
          >
            We believe the law is the pillar of society, and we strive to protect our clients&apos; rights since our establishment in the heart of the Kingdom.
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
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" x2="4" y1="22" y2="15"/>
                </svg>
              </div>
              <h2 className="text-2xl font-extrabold text-[#0f172a] mb-4">Our Mission</h2>
              <p className="text-[#475569] text-[15px] leading-relaxed">
                Providing distinguished legal services combining deep knowledge of local regulations and global standards, with full commitment to the highest degrees of professionalism and transparency to protect our clients&apos; interests.
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
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <h2 className="text-2xl font-extrabold text-[#0f172a] mb-4">Our Vision</h2>
              <p className="text-[#475569] text-[15px] leading-relaxed">
                To be the first choice legal partner and the most reliable in the region through continuous innovation in legal solutions and effective contribution to developing the justice environment.
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
              Our Journey Through Time
            </h2>
            <div className="w-20 h-1.5 bg-[#1A7A43] rounded-full"></div>
          </div>

          <div className="relative">
            {/* Center Line for desktop */}
            <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#1A7A43]/20 -ml-px"></div>

            <div className="flex flex-col gap-12 sm:gap-16">
              {TIMELINE.map((item, i) => {
                const isEven = i % 2 === 0;
                return (
                  <motion.div
                    key={item.year}
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
                          {item.year}
                        </span>
                        <h3 className="text-[18px] font-bold text-[#0f172a] mb-3">
                          {item.title}
                        </h3>
                        <p className="text-[#64748b] text-[14px] leading-relaxed">
                          {item.description}
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
              Our Core Values
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-8 sm:gap-16 md:gap-24">
            {CORE_VALUES.map((val, i) => (
              <motion.div
                key={val.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#f0faf5] flex items-center justify-center text-[#1A7A43]">
                  {val.icon}
                </div>
                <span className="text-[16px] font-bold text-[#0f172a]">{val.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
