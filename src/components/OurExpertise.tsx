"use client";

import { motion } from "framer-motion";
import BalanceIcon from "./layout/BalanceIcon";

const EXPERTISE_DATA = [
  {
    title: "Legal Consultations",
    description: "Specialized legal consultations, legal position analysis and assessment.",
    hoverText: "Providing comprehensive legal opinions and memorandums with highly specialized case assessments.",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
      </svg>
    )
  },
  {
    title: "Company Formation",
    description: "Incorporation of all legal entity types and drafting partnership agreements.",
    hoverText: "Amending corporate contracts, ensuring legal compliance, and the issuance of all required legal licenses.",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    )
  },
  {
    title: "Arbitration & Dispute Resolution",
    description: "Professional legal arbitration and amicable settlement of disputes.",
    hoverText: "Expert negotiation, conflict resolution, and structured amicable settlements to protect your interests.",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    )
  },
  {
    title: "Litigation & Advocacy",
    description: "Representation before all courts of all levels.",
    hoverText: "Strong, experienced legal representation fighting for your rights before every judicial and investigative authority.",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
      </svg>
    )
  },
  {
    title: "Contracts & Agreements",
    description: "Drafting and reviewing various legal contracts.",
    hoverText: "Meticulous preparation, review, and structuring of legally binding obligations and commercial agreements.",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    )
  },
  {
    title: "Execution of Judgments",
    description: "Enforcement of judicial rulings and follow-up on procedures.",
    hoverText: "Tenacious follow-up on execution procedures to ensure full recovery of legal rights and damages.",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

export default function OurExpertise() {
    return (
        <div className="bg-[#548e52] container mx-auto min-h-screen flex flex-col items-center justify-start pt-20 px-6 text-left lg:px-8 mb-20">
            <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-zinc-900 text-3xl font-bold uppercase mb-4"
            >
                Our Expertise
            </motion.h1>
            
            <motion.div  
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="w-24 h-1 bg-[#ffffff] mb-16 origin-left"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-5xl">
                {EXPERTISE_DATA.map((item, index) => (
                    <motion.div 
                        key={item.title}
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                        className="relative group bg-zinc-50 rounded-sm overflow-hidden min-h-100 flex flex-col justify-center items-center cursor-pointer shadow-sm hover:shadow-lg transition-shadow duration-300"
                    >
                        {/* <BalanceIcon /> */}
                        {/* Default State (Frontside) */}
                        <div className="relative z-10 flex flex-col items-center justify-center p-10 text-center transition-transform duration-500 group-hover:-translate-y-4">
                            {/* Gold Icon Box */}
                            <div className="w-24 h-24 mb-6 rounded-lg bg-[#2c322a] text-white flex items-center justify-center shadow-inner relative z-10 transition-transform duration-500">
                                {item.icon}
                            </div>
                            <h2 className="text-xl font-bold text-zinc-900 mb-4 tracking-wide uppercase transition-colors duration-500 group-hover:text-white relative z-30">
                                {item.title}
                            </h2>
                            <p className="text-zinc-500 font-light leading-relaxed transition-opacity duration-300 group-hover:opacity-0 relative z-30">
                                {item.description}
                            </p>
                        </div>

                        {/* Hover Overlay State (Sliding Up from Bottom) */}
                        <div className="absolute inset-x-0 bottom-0 h-full bg-[#333333] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out flex flex-col items-center justify-center p-10 text-center z-20">
                            {/* Faint watermark of icon */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-5 text-zinc-100 pointer-events-none transform scale-[2.5]">
                                {item.icon}
                            </div>
                            
                            <p className="relative z-30 text-white text-[22px] font-medium leading-relaxed tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                {item.hoverText}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}