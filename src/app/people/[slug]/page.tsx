"use client";

import { notFound } from "next/navigation";
import { use } from "react";
import { getPersonBySlug, Person } from "@/lib/people";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// ─── Icon helpers ──────────────────────────────────────────────

function MailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  );
}
function BadgeCheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/>
    </svg>
  );
}
function GraduationCapIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>
    </svg>
  );
}
function AwardIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
    </svg>
  );
}
function CalendarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>
    </svg>
  );
}

// ─── Sub-components ────────────────────────────────────────────

function StatBadge({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center justify-center border border-gray-200 rounded-lg px-6 py-4 bg-[#f8faf9] min-w-27.5">
      <span className="text-2xl font-extrabold text-[#1A7A43]">{value}</span>
      <span className="text-[11px] font-bold uppercase tracking-widest text-[#64748b] mt-0.5">{label}</span>
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-6 h-1 rounded-full bg-[#1A7A43]" />
      <h2 className="text-xl font-bold text-[#0f172a]">{children}</h2>
    </div>
  );
}

function JourneyTimeline({ items }: { items: Person["journey"] }) {
  return (
    <div className="relative pl-4 border-l-2 border-[#1A7A43]/20 flex flex-col gap-8">
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="relative"
        >
          {/* dot */}
          <span className="absolute -left-[1.4rem] top-1 w-3 h-3 rounded-full bg-[#1A7A43] border-2 border-white shadow" />
          <p className="text-[11px] font-bold text-[#1A7A43] uppercase tracking-widest mb-1">{item.period}</p>
          <h3 className="text-[15px] font-bold text-[#0f172a]">{item.title}</h3>
          <p className="text-[13px] text-[#64748b] font-medium mb-1">{item.org}</p>
          <p className="text-[13px] text-[#94a3b8] leading-relaxed">{item.description}</p>
        </motion.div>
      ))}
    </div>
  );
}

function SpecialtyGrid({ items }: { items: Person["specialties"] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="text-2xl mb-2">{item.icon}</div>
          <h3 className="text-[14px] font-bold text-[#0f172a] mb-1">{item.title}</h3>
          <p className="text-[12px] text-[#64748b] leading-relaxed">{item.description}</p>
        </motion.div>
      ))}
    </div>
  );
}

function EducationHonors({ items }: { items: Person["education"] }) {
  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => {
        const Icon =
          item.type === "award" ? AwardIcon : item.type === "fellowship" ? BadgeCheckIcon : GraduationCapIcon;
        return (
          <div key={i} className="flex items-start gap-3">
            <span className="text-[#1A7A43] shrink-0 mt-0.5"><Icon /></span>
            <div>
              <p className="text-[13px] font-bold text-[#0f172a]">{item.degree}</p>
              <p className="text-[12px] text-[#64748b]">{item.institution}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────

export default function PersonProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const person = getPersonBySlug(slug);
  if (!person) notFound();

  return (
    <main className="min-h-screen bg-[#f3f4f6]" dir="ltr">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">

        {/* ── Hero Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-2xl shadow-sm overflow-hidden mb-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-0">
            {/* Left: Photo + stats */}
            <div className="flex flex-col items-center p-8 bg-[#f8faf9] border-b lg:border-b-0 lg:border-r border-gray-100">
              <div className="relative w-52 h-64 rounded-xl overflow-hidden shadow mb-6 bg-slate-200">
                <Image src={person.image} alt={person.name} fill className="object-cover object-top" unoptimized />
                <div className="absolute inset-0 bg-slate-200 z-0" />
              </div>
              <div className="flex gap-3">
                <StatBadge value={person.yearsExp} label="Years Exp." />
                <StatBadge value={person.casesWon} label="Cases Won" />
              </div>
            </div>

            {/* Right: Info */}
            <div className="p-8 flex flex-col gap-4">
              {/* Badge */}
              <span className="inline-flex self-start items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-[#1A7A43] border border-[#1A7A43]/30 bg-[#f0faf5] rounded-full px-3 py-1">
                {person.badge}
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] leading-tight">
                {person.name}
              </h1>
              <p className="text-[#1A7A43] italic font-medium text-base">{person.quote}</p>
              <div className="flex flex-col gap-3">
                {person.bio.map((paragraph, i) => (
                  <p key={i} className="text-[14px] text-[#475569] leading-relaxed">{paragraph}</p>
                ))}
              </div>
              {/* Contact quick info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2 pt-4 border-t border-gray-100">
                <div className="flex items-start gap-2.5">
                  <span className="text-[#1A7A43] mt-0.5 shrink-0"><MailIcon /></span>
                  <div>
                    <p className="text-[11px] font-bold text-[#94a3b8] uppercase tracking-widest">Direct Email</p>
                    <a href={`mailto:${person.directEmail}`} className="text-[13px] text-[#0f172a] hover:text-[#1A7A43] transition-colors">
                      {person.directEmail}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-[#1A7A43] mt-0.5 shrink-0"><BadgeCheckIcon /></span>
                  <div>
                    <p className="text-[11px] font-bold text-[#94a3b8] uppercase tracking-widest">Bar Admissions</p>
                    <p className="text-[13px] text-[#0f172a]">{person.barAdmissions}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Main Content + Sidebar ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
          {/* Left content */}
          <div className="flex flex-col gap-10">
            {/* Professional Journey */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-sm p-7"
            >
              <SectionHeading>Professional Journey</SectionHeading>
              <JourneyTimeline items={person.journey} />
            </motion.section>

            {/* Specialized Fields */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-sm p-7"
            >
              <SectionHeading>Specialized Fields & Notable Cases</SectionHeading>
              <SpecialtyGrid items={person.specialties} />
            </motion.section>
          </div>

          {/* Right sidebar */}
          <div className="flex flex-col gap-6">
            {/* Education & Honors */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-sm p-6"
            >
              <h2 className="text-[15px] font-bold text-[#0f172a] mb-5">Education & Honors</h2>
              <EducationHonors items={person.education} />
            </motion.div>

            {/* Schedule a Meeting */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-sm p-6 flex flex-col gap-4"
            >
              <div className="flex items-center gap-2 text-[#0f172a]">
                <CalendarIcon />
                <h2 className="text-[15px] font-bold">Schedule a Meeting</h2>
              </div>
              <p className="text-[12px] text-[#64748b] leading-relaxed">
                Book a confidential consultation session with {person.name.split(" ")[0]}.
              </p>
              <Link
                href="/contact"
                className="w-full block text-center bg-[#1A7A43] text-white font-bold text-[14px] py-3 rounded-lg hover:bg-[#146336] transition-colors"
              >
                Request Appointment
              </Link>
            </motion.div>

            {/* Back link */}
            <Link
              href="/people"
              className="flex items-center gap-2 text-[13px] text-[#64748b] hover:text-[#1A7A43] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
              </svg>
              Back to Our People
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
