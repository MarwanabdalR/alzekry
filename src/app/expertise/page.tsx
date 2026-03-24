"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ExpertiseAndAwardsPage() {
  return (
    <main className="min-h-screen bg-white" dir="ltr">

      {/* ── Hero Banner ── */}
      <section className="relative w-full h-90 sm:h-120 bg-linear-to-br from-[#1A7A43] to-[#145d33] flex flex-col justify-center overflow-hidden">
        {/* Faded Background Pattern/Image */}
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
              Our Expertise
            </span>
            <span className="w-8 h-px bg-[#A5886E]"></span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight"
          >
            Areas of Expertise and Legal Recognition
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/90 text-[16px] sm:text-lg leading-relaxed max-w-3xl mx-auto font-light"
          >
            We offer comprehensive legal support and strategic counsel to help our clients make secure decisions across all aspects of their business.
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
                Practice Areas
              </span>
              <span className="w-6 h-px bg-[#1A7A43]"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] mb-4">
              Comprehensive Coverage for Legal Needs
            </h2>
            <p className="text-[#64748b] text-[15px] max-w-2xl mx-auto leading-relaxed">
              We provide specialized legal advisory across a wide range of fields to support your business, protect your assets, and navigate complex regulations.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col group hover:shadow-lg transition-all duration-300"
            >
              <div className="relative w-full aspect-video bg-slate-100 overflow-hidden">
                <Image src="/expertise/ip.jpg" alt="Intellectual Property" fill className="object-cover transition-transform duration-700 group-hover:scale-105" unoptimized />
                <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply" />
                {/* Icon */}
                <div className="absolute right-4 bottom-4 w-10 h-10 bg-[#1A7A43] rounded-lg flex items-center justify-center shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>
                </div>
              </div>
              <div className="p-7 flex flex-col flex-1">
                <h3 className="text-[18px] font-extrabold text-[#0f172a] mb-3 group-hover:text-[#1A7A43] transition-colors">
                  Intellectual Property
                </h3>
                <p className="text-[#64748b] text-[14px] leading-relaxed mb-6 flex-1">
                  Protecting your creations, trademarks, and patents both locally and internationally with robust legal frameworks.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-1.5 text-[#1A7A43] text-[13px] font-bold hover:gap-2 transition-all">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                </Link>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col group hover:shadow-lg transition-all duration-300"
            >
              <div className="relative w-full aspect-video bg-slate-100 overflow-hidden">
                <Image src="/expertise/litigation.jpg" alt="Litigation" fill className="object-cover transition-transform duration-700 group-hover:scale-105" unoptimized />
                <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
                {/* Icon */}
                <div className="absolute right-4 bottom-4 w-10 h-10 bg-[#1A7A43] rounded-lg flex items-center justify-center shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m14 13-3 3 2 2 3-3" /><path d="M21 21v-3l-7-7-2 2 7 7h3Z" /><path d="M3 3 21 21" /></svg>
                </div>
              </div>
              <div className="p-7 flex flex-col flex-1">
                <h3 className="text-[18px] font-extrabold text-[#0f172a] mb-3 group-hover:text-[#1A7A43] transition-colors">
                  Litigation & Dispute Resolution
                </h3>
                <p className="text-[#64748b] text-[14px] leading-relaxed mb-6 flex-1">
                  Representing clients in complex commercial and civil disputes across local and international courts.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-1.5 text-[#1A7A43] text-[13px] font-bold hover:gap-2 transition-all">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                </Link>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col group hover:shadow-lg transition-all duration-300"
            >
              <div className="relative w-full aspect-video bg-slate-100 overflow-hidden">
                <Image src="/expertise/corporate.jpg" alt="Corporate Law" fill className="object-cover transition-transform duration-700 group-hover:scale-105" unoptimized />
                <div className="absolute inset-0 bg-emerald-900/20 mix-blend-multiply" />
                {/* Icon */}
                <div className="absolute right-4 bottom-4 w-10 h-10 bg-[#1A7A43] rounded-lg flex items-center justify-center shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2" /><path d="M9 22v-4h6v4" /><path d="M8 6h.01" /><path d="M16 6h.01" /><path d="M12 6h.01" /><path d="M12 10h.01" /><path d="M12 14h.01" /><path d="M16 10h.01" /><path d="M16 14h.01" /><path d="M8 10h.01" /><path d="M8 14h.01" /></svg>
                </div>
              </div>
              <div className="p-7 flex flex-col flex-1">
                <h3 className="text-[18px] font-extrabold text-[#0f172a] mb-3 group-hover:text-[#1A7A43] transition-colors">
                  Corporate Law
                </h3>
                <p className="text-[#64748b] text-[14px] leading-relaxed mb-6 flex-1">
                  Comprehensive legal services for corporate restructuring, mergers and acquisitions, and governance.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-1.5 text-[#1A7A43] text-[13px] font-bold hover:gap-2 transition-all">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Awards Section ── */}
      <section className="py-24 px-6 lg:px-12 bg-[#1A7A43]">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="flex flex-col text-center mb-16">
            <div className="inline-flex items-center justify-center gap-2 mb-3">
              <span className="w-6 h-px bg-[#A5886E]"></span>
              <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#A5886E]">
                Global Recognition
              </span>
              <span className="w-6 h-px bg-[#A5886E]"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Awards and Global Recognition
            </h2>
            <p className="text-white/80 text-[15px] max-w-2xl mx-auto leading-relaxed font-light">
              We are proud of the confidence placed in us by the most prestigious international legal evaluation bodies and directories.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Timeline */}
            <div className="relative border-l-2 border-[#146336] pl-8 py-4 ml-4">

              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="relative mb-10">
                <span className="absolute -left-10.25 top-1.5 w-4 h-4 rounded-sm bg-[#A5886E] border-4 border-[#1A7A43] shadow-sm transform -rotate-45" />
                <h3 className="text-2xl font-black text-white mb-2">2023</h3>
                <h4 className="text-[17px] font-bold text-white mb-2">International Expansion</h4>
                <p className="text-white/70 text-[14px] leading-relaxed">
                  Expanded footprint and ranked among top tier firms across the MENA region.
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="relative mb-10">
                <span className="absolute -left-10.25 top-1.5 w-4 h-4 rounded-sm bg-[#A5886E] border-4 border-[#1A7A43] shadow-sm transform -rotate-45" />
                <h3 className="text-2xl font-black text-white mb-2">2021</h3>
                <h4 className="text-[17px] font-bold text-white mb-2">Legal Excellence Award</h4>
                <p className="text-white/70 text-[14px] leading-relaxed">
                  Awarded for outstanding contribution to corporate structuring and M&A excellence in the Middle East.
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="relative">
                <span className="absolute -left-10.25 top-1.5 w-4 h-4 rounded-sm bg-[#A5886E] border-4 border-[#1A7A43] shadow-sm transform -rotate-45" />
                <h3 className="text-2xl font-black text-white mb-2">2010</h3>
                <h4 className="text-[17px] font-bold text-white mb-2">Foundation & Launch</h4>
                <p className="text-white/70 text-[14px] leading-relaxed">
                  Established with a commitment to integrity and client-centric legal solutions.
                </p>
              </motion.div>

            </div>

            {/* Right: Grid of Awards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Award 1 */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="bg-[#1e884d] rounded-2xl p-8 flex flex-col items-center text-center shadow-lg border border-[#27a25f]/50 hover:bg-[#209454] transition-colors">
                <div className="w-16 h-16 rounded-full bg-[#A5886E]/20 text-[#A5886E] flex items-center justify-center mb-5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></svg>
                </div>
                <h4 className="text-[16px] font-extrabold text-white mb-1">Best Law Firm</h4>
                <p className="text-white/70 text-[12px] uppercase tracking-wider font-semibold">2023 MENA</p>
              </motion.div>
              {/* Award 2 */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} className="bg-[#1e884d] rounded-2xl p-8 flex flex-col items-center text-center shadow-lg border border-[#27a25f]/50 hover:bg-[#209454] transition-colors">
                <div className="w-16 h-16 rounded-full bg-[#A5886E]/20 text-[#A5886E] flex items-center justify-center mb-5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                </div>
                <h4 className="text-[16px] font-extrabold text-white mb-1">Excellence in Innovation</h4>
                <p className="text-white/70 text-[12px] uppercase tracking-wider font-semibold">Chambers Global</p>
              </motion.div>
              {/* Award 3 */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }} className="bg-[#1e884d] rounded-2xl p-8 flex flex-col items-center text-center shadow-lg border border-[#27a25f]/50 hover:bg-[#209454] transition-colors">
                <div className="w-16 h-16 rounded-full bg-[#A5886E]/20 text-[#A5886E] flex items-center justify-center mb-5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                </div>
                <h4 className="text-[16px] font-extrabold text-white mb-1">Client Choice</h4>
                <p className="text-white/70 text-[12px] uppercase tracking-wider font-semibold">The Legal 500</p>
              </motion.div>
              {/* Award 4 */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.6 }} className="bg-[#1e884d] rounded-2xl p-8 flex flex-col items-center text-center shadow-lg border border-[#27a25f]/50 hover:bg-[#209454] transition-colors">
                <div className="w-16 h-16 rounded-full bg-[#A5886E]/20 text-[#A5886E] flex items-center justify-center mb-5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><polyline points="16 11 18 13 22 9" /></svg>
                </div>
                <h4 className="text-[16px] font-extrabold text-white mb-1">Leading Lawyers</h4>
                <p className="text-white/70 text-[12px] uppercase tracking-wider font-semibold">IFLR1000 2023</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Specialized Sectors ── */}
      <section className="py-24 px-6 lg:px-12 bg-[#f8f9fa]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] mb-4">
              Sectors We Specialize In
            </h2>
            <p className="text-[#64748b] text-[15px] max-w-xl mx-auto leading-relaxed">
              We possess deep knowledge and extensive practical experience in various industrial and commercial sectors.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {/* Item 1 */}
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="flex items-center justify-between p-6 sm:p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 rounded-xl bg-[#f0faf5] text-[#1A7A43] flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="16" x="4" y="4" rx="2" /><rect width="6" height="6" x="9" y="9" rx="1" /><path d="M15 2v2" /><path d="M15 20v2" /><path d="M22 15h-2" /><path d="M2 15h2" /><path d="M20 9h2" /><path d="M2 9h2" /><path d="M9 2v2" /><path d="M9 20v2" /></svg>
              </div>
              <div className="flex-1 px-6">
                <h3 className="text-[17px] font-extrabold text-[#0f172a] mb-1 group-hover:text-[#1A7A43] transition-colors">Trade & Economy</h3>
                <p className="text-[14px] text-[#64748b]">Strategic legal support for trade development and economic growth.</p>
              </div>
            </motion.div>

            {/* Item 2 */}
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }} className="flex items-center justify-between p-6 sm:p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 rounded-xl bg-[#f0faf5] text-[#1A7A43] flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18" /><path d="M9 8h1" /><path d="M9 12h1" /><path d="M9 16h1" /><path d="M14 8h1" /><path d="M14 12h1" /><path d="M14 16h1" /><path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" /></svg>
              </div>
              <div className="flex-1 px-6">
                <h3 className="text-[17px] font-extrabold text-[#0f172a] mb-1 group-hover:text-[#1A7A43] transition-colors">Real Estate & Development</h3>
                <p className="text-[14px] text-[#64748b]">Legal advisory for massive construction projects and land acquisitions.</p>
              </div>
            </motion.div>

            {/* Item 3 */}
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 }} className="flex items-center justify-between p-6 sm:p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 rounded-xl bg-[#f0faf5] text-[#1A7A43] flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14a2 2 0 0 1-.59-3.41s1.39-4.22 8.59-4.22 8.59 4.22 8.59 4.22A2 2 0 0 1 20 14H4z" /><path d="M8 14v4" /><path d="M16 14v4" /><path d="M12 14v8" /><path d="m14 20-2 2-2-2" /></svg>
              </div>
              <div className="flex-1 px-6">
                <h3 className="text-[17px] font-extrabold text-[#0f172a] mb-1 group-hover:text-[#1A7A43] transition-colors">Healthcare & Medical</h3>
                <p className="text-[14px] text-[#64748b]">Navigating complex medical regulations and compliance standards.</p>
              </div>
            </motion.div>

            {/* Item 4 */}
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.3 }} className="flex items-center justify-between p-6 sm:p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 rounded-xl bg-[#f0faf5] text-[#1A7A43] flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20" /><path d="m17 12-5 5-5-5" /><path d="m17 12-5-5-5 5" /></svg>
              </div>
              <div className="flex-1 px-6">
                <h3 className="text-[17px] font-extrabold text-[#0f172a] mb-1 group-hover:text-[#1A7A43] transition-colors">Energy & Sustainability</h3>
                <p className="text-[14px] text-[#64748b]">Advising on green initiatives, renewable energy, and environmental compliance.</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </main>
  );
}
