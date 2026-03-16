"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const PEOPLE = [
  {
    name: "Sarah Ahmed",
    title: "Senior Partner · Corporate",
    image: "/people/sarah-ahmed.jpg",
  },
  {
    name: "Omar Al Farsi",
    title: "Head of Litigation",
    image: "/people/omar-alfarsi.jpg",
  },
  {
    name: "Dr. Khalid Mansour",
    title: "Arbitration Specialist",
    image: "/people/khalid-mansour.jpg",
  },
  {
    name: "Leila Hassan",
    title: "Associate · Intellectual Property",
    image: "/people/leila-hassan.jpg",
  },
];

export default function OurPeople() {
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
              Our People
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[#64748b] text-sm"
            >
              Meet the legal minds dedicated to your success.
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
              View All Partners
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* People Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {PEOPLE.map((person, index) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col"
            >
              {/* Photo */}
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-slate-200 mb-3 shadow-sm">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="object-cover object-top"
                  unoptimized
                />
                {/* Fallback placeholder */}
                <div className="absolute inset-0 bg-slate-300 flex items-center justify-center text-slate-500 text-xs z-0">
                  Photo
                </div>
              </div>
              {/* Info */}
              <h3 className="text-[15px] font-bold text-[#0f172a]">{person.name}</h3>
              <p className="text-[13px] text-[#1A7A43] font-medium mt-0.5">{person.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
