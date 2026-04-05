"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const PEOPLE_KEYS = [
  {
    key: "ali",
    image: "/people/AliAlzekry-removebg-preview.png",
    slug: "ali-zekry",
  },
  {
    key: "hassan",
    image: "/people/HassanAlzekry.png",
    slug: "hassan-zekry",
  },
  {
    key: "ahmed",
    image: "/people/ahmedAlzekry-removebg-preview.png",
    slug: "dr-ahmed-zekry",
  },
  {
    key: "omar",
    image: "/people/OmarAlzekry.png",
    slug: "omar-zekry",
  },
];

export default function OurPeople() {
  const t = useTranslations("OurPeople");

  return (
    <section className="bg-[#f8f9fa] py-16 px-6 lg:px-12">
      <div className="container mx-auto max-w-6xl">
        {/* Header row */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-1"
            >
              {t("title")}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[#64748b] text-sm"
            >
              {t("subtitle")}
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="/people"
              className="inline-flex items-center gap-1.5 text-[#1A7A43] text-sm font-semibold hover:underline"
            >
              {t("viewAllBtn")}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* People Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {PEOPLE_KEYS.map((person, index) => (
            <motion.div
              key={person.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col"
            >
              <Link href={`/people/${person.slug}`} className="group flex flex-col">
                {/* Photo */}
                <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-[#122229] mb-3 shadow-sm group-hover:shadow-md transition-shadow">
                  {/* Fallback placeholder (z-0) */}
                  <div className="absolute inset-0 bg-[#122229] flex items-center justify-center text-slate-500 text-xs z-0">
                    {t("photoFallback")}
                  </div>
                  {/* Image (z-10 to stay on top) */}
                  <Image
                    src={person.image}
                    alt={t(`members.${person.key}.name`)}
                    fill
                    className="object-cover object-top z-10 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {/* Info */}
                <h3 className="text-[15px] font-bold text-[#0f172a] group-hover:text-[#1A7A43] transition-colors">{t(`members.${person.key}.name`)}</h3>
                <p className="text-[13px] text-[#1A7A43] font-medium mt-0.5">{t(`members.${person.key}.title`)}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
