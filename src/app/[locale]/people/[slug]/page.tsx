"use client";

import { notFound } from "next/navigation";
import { use } from "react";
import { getPersonBySlug, Person } from "@/lib/people";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  FaBalanceScale, FaBuilding, FaHandshake, FaChartLine,
  FaIndustry, FaShieldAlt, FaSearch, FaClipboardList,
  FaLock, FaLandmark, FaBookOpen, FaBox, FaTrademark,
  FaFileContract, FaUsers, FaGavel, FaEnvelope, FaLinkedin,
} from "react-icons/fa";

import {
  MdVerified, MdSchool, MdEmojiEvents, MdDateRange,
} from "react-icons/md";

const SPECIALTY_ICONS: Record<string, React.ReactNode> = {
  FaBalanceScale: <FaBalanceScale size={22} />,
  FaBuilding: <FaBuilding size={22} />,
  FaHandshake: <FaHandshake size={22} />,
  FaChartLine: <FaChartLine size={22} />,
  FaIndustry: <FaIndustry size={22} />,
  FaShieldAlt: <FaShieldAlt size={22} />,
  FaSearch: <FaSearch size={22} />,
  FaClipboardList: <FaClipboardList size={22} />,
  FaLock: <FaLock size={22} />,
  FaLandmark: <FaLandmark size={22} />,
  FaBookOpen: <FaBookOpen size={22} />,
  FaBox: <FaBox size={22} />,
  FaTrademark: <FaTrademark size={22} />,
  FaFileContract: <FaFileContract size={22} />,
  FaUsers: <FaUsers size={22} />,
  FaGavel: <FaGavel size={22} />,
};


function BadgeCheckIcon() {
  return <MdVerified size={18} />;
}
function GraduationCapIcon() {
  return <MdSchool size={18} />;
}
function AwardIcon() {
  return <MdEmojiEvents size={18} />;
}
function CalendarIcon() {
  return <MdDateRange size={18} />;
}


// ─── Sub-components ────────────────────────────────────────────

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
          className="relative pl-8 rtl:pl-0 rtl:pr-8"
        >
          {/* dot */}
          <div className="absolute top-1 left-0 rtl:left-auto rtl:right-0 w-4.5 h-4.5 rounded-full bg-white border-4 border-[#1A7A43] shadow-xs" />
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
          <div className="text-[#1A7A43] mb-2">{SPECIALTY_ICONS[item.icon] ?? <FaBalanceScale size={22} />}</div>
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
  const t = useTranslations("PersonProfilePage");
  const { slug } = use(params);
  const person = getPersonBySlug(slug);
  if (!person) notFound();

  const translatedJourney = person.journey.map((item, i) => ({
    ...item,
    period: t(`profiles.${slug}.journey.${i}.period`),
    title: t(`profiles.${slug}.journey.${i}.title`),
    org: t(`profiles.${slug}.journey.${i}.org`),
    description: t(`profiles.${slug}.journey.${i}.description`),
  }));

  const translatedSpecialties = person.specialties.map((item, i) => ({
    ...item,
    title: t(`profiles.${slug}.specialties.${i}.title`),
    description: t(`profiles.${slug}.specialties.${i}.description`),
  }));

  const translatedEducation = person.education.map((item, i) => ({
    ...item,
    degree: t(`profiles.${slug}.education.${i}.degree`),
    institution: t(`profiles.${slug}.education.${i}.institution`),
  }));

  return (
    <main className="min-h-screen bg-[#f8f9fa] pb-24" dir="ltr">
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
              <div className="relative w-52 h-64 rounded-xl overflow-hidden shadow mb-6 bg-[#122229]">
                <Image src={person.image} alt={t(`profiles.${slug}.name`)} fill className="object-cover object-top z-10" />
              </div>
              {/* Stats */}
              <div className="grid grid-cols-2 divide-x rtl:divide-x-reverse divide-gray-100 border-b border-gray-100 p-6">
                <div className="flex flex-col items-center text-center">
                  <span className="text-3xl font-extrabold text-[#A5886E] mb-1">{person.yearsExp}+</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#94a3b8]">{t("stats.yearsExp")}</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <span className="text-3xl font-extrabold text-[#A5886E] mb-1">{person.casesWon}+</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#94a3b8]">{t("stats.casesWon")}</span>
                </div>
              </div>
            </div>

            {/* Right: Info */}
            <div className="p-8 flex flex-col gap-4">
              {/* Badge */}
              <span className="inline-flex self-start items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-[#1A7A43] border border-[#1A7A43]/30 bg-[#f0faf5] rounded-full px-3 py-1">
                {t(`profiles.${slug}.badge`)}
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] leading-tight">
                {t(`profiles.${slug}.name`)}
              </h1>
              <p className="text-[#1A7A43] italic font-medium text-base">{t(`profiles.${slug}.quote`)}</p>
              <div className="flex flex-col gap-3">
                {person.bio.map((_, i) => (
                  <p key={i} className="text-[14px] text-[#475569] leading-relaxed">{t(`profiles.${slug}.bio.${i}`)}</p>
                ))}
              </div>
              {/* Contact quick info */}
              <div className="p-6 flex flex-col gap-5">
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#1A7A43]/10 flex items-center justify-center shrink-0">
                      <FaEnvelope className="text-[#1A7A43]" size={14} />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-widest text-[#94a3b8] mb-0.5">{t("contact.directEmail")}</p>
                      <a href={`mailto:${person.directEmail}`} className="text-[14px] font-semibold text-[#0f172a] hover:text-[#1A7A43] transition-colors break-all">
                        {person.directEmail}
                      </a>
                    </div>
                  </div>
                  {/* LinkedIn Row */}
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#1A7A43]/10 flex items-center justify-center shrink-0">
                      <FaLinkedin className="text-[#1A7A43]" size={14} />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-widest text-[#94a3b8] mb-0.5">LinkedIn</p>
                      <a href={person.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-[14px] font-semibold text-[#0f172a] hover:text-[#1A7A43] transition-colors break-all">
                        {t(`profiles.${slug}.name`)}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-[#94a3b8] mb-3">{t("contact.barAdmissions")}</p>
                  <p className="text-[13px] text-[#0f172a]">{t(`profiles.${slug}.barAdmissions`)}</p>
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
              <SectionHeading>{t("sections.journey")}</SectionHeading>
              <JourneyTimeline items={translatedJourney} />
            </motion.section>

            {/* Specialized Fields */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-sm p-7"
            >
              <SectionHeading>{t("sections.specialties")}</SectionHeading>
              <SpecialtyGrid items={translatedSpecialties} />
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
              <h2 className="text-[15px] font-bold text-[#0f172a] mb-5">{t("sections.education")}</h2>
              <EducationHonors items={translatedEducation} />
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
                <h2 className="text-[15px] font-bold">{t("meeting.title")}</h2>
              </div>
              <p className="text-[12px] text-[#64748b] leading-relaxed">
                {t("meeting.description", { name: t(`profiles.${slug}.name`).split(" ")[t(`profiles.${slug}.name`).split(" ").length > 3 ? 1 : 0] || "" })}
              </p>
              <Link
                href="/contact"
                className="w-full block text-center bg-[#1A7A43] text-white font-bold text-[14px] py-3 rounded-lg hover:bg-[#146336] transition-colors"
              >
                {t("meeting.btn")}
              </Link>
            </motion.div>

            {/* Back link */}
            <Link
              href="/people"
              className="flex items-center gap-2 text-[13px] text-[#64748b] hover:text-[#1A7A43] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="rtl:rotate-180">
                <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
              </svg>
              {t("backLink")}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
