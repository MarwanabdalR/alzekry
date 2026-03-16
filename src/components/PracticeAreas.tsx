"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const PRACTICE_AREAS = [
  {
    category: "Criminal Law & Misdemeanors",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      </svg>
    ),
    services: ["Defense and representation before investigative authorities"]
  },
  {
    category: "Civil Law",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    services: [
      "Civil disputes",
      "Compensation and tort liability",
      "Contracts and obligations"
    ]
  },
  {
    category: "Personal Status Law",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    services: [
      "Family law",
      "Alimony, custody, and visitation",
      "Divorce and Khula"
    ]
  },
  {
    category: "Corporate Law & Formation",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    services: [
      "Incorporation of all company types",
      "Drafting Articles of Association and Partnership Agreements",
      "Corporate restructuring and legal compliance"
    ]
  },
  {
    category: "Consumer Protection & Commercial Fraud",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" x2="21" y1="6" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
    services: [
      "Consumer protection cases",
      "Commercial complaints and violations",
      "Legal representation before competent authorities"
    ]
  },
  {
    category: "Intellectual Property",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <path d="M12 17h.01" />
      </svg>
    ),
    services: [
      "Trademark registration",
      "Protection of IP rights",
      "IP infringement disputes"
    ]
  }
];

export default function PracticeAreas() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-[#f3f4f6] py-20 px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center text-center mb-14">
                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-[#0f172a] text-3xl sm:text-4xl font-bold mb-2"
                >
                    Practice Area Details
                </motion.h2>
            </div>

            <div className="max-w-3xl mx-auto flex flex-col gap-3">
                {PRACTICE_AREAS.map((area, index) => (
                    <motion.div
                        key={area.category}
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.07 }}
                        className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm"
                    >
                        <button
                            onClick={() => toggleAccordion(index)}
                            className="w-full flex items-center justify-between px-6 py-5 hover:bg-gray-50 transition-colors cursor-pointer text-left gap-4"
                        >
                            <div className="flex items-center gap-3">
                                <span className="text-[#1A7A43] shrink-0">
                                    {area.icon}
                                </span>
                                <h3 className="text-[17px] font-bold text-[#0f172a]">{area.category}</h3>
                            </div>
                            <motion.div
                                animate={{ rotate: openIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="text-[#64748b] shrink-0"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </motion.div>
                        </button>

                        <motion.div
                            initial={false}
                            animate={{
                                height: openIndex === index ? "auto" : 0,
                                opacity: openIndex === index ? 1 : 0
                            }}
                            className="overflow-hidden"
                        >
                            <ul className="px-6 pb-5 pt-1 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">
                                {area.services.map((service, serviceIndex) => (
                                    <li key={serviceIndex} className="flex items-center gap-2.5 text-[#475569] text-[14px]">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#1A7A43] shrink-0 mt-px" />
                                        <span className="leading-relaxed">{service}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
