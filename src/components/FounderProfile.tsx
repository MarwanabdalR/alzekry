"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FounderProfile() {
  return (
    <section className="bg-[#f8f9fa] py-20 overflow-hidden relative">
      {/* Decorative top-right chat icon - positioned absolute as in the design */}
      <div className="absolute top-6 right-6 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-[#1A7A43] shadow-lg cursor-pointer hover:bg-[#146336] transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          <line x1="9" y1="10" x2="15" y2="10"></line>
          <line x1="9" y1="14" x2="15" y2="14"></line>
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Decorative slanted background matching the image */}
            <div className="absolute inset-0 bg-[#e2e8f0] rounded-xl transform -rotate-2 scale-105 origin-center hidden sm:block"></div>
            
            <div className="relative aspect-4/5 w-full rounded-xl overflow-hidden shadow-sm z-10 border-4 border-white">
              {/* Replace /founder-placeholder.jpg with the actual path once provided by user */}
              <Image 
                src="/founder-placeholder.jpg" 
                alt="Advocate Al Zekry" 
                fill 
                className="object-cover"
                unoptimized // Useful during dev if the placeholder is external or missing
              />
              {/* Fallback gray background if image is missing */}
              <div className="absolute inset-0 bg-slate-800 flex items-center justify-center text-slate-500">
                Image Placeholder
              </div>
            </div>
          </motion.div>

          {/* Right Column: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col pl-0 lg:pl-4"
          >
            <span className="text-[11px] font-extrabold tracking-[0.15em] text-[#1A7A43] uppercase mb-4">
              FOUNDER PROFILE
            </span>
            
            <h2 className="text-[32px] sm:text-[40px] lg:text-[44px] font-black text-[#0f172a] tracking-tight mb-3 leading-none">
              Advocate Al Zekry
            </h2>
            
            <h3 className="text-lg sm:text-[20px] font-medium italic text-[#1A7A43] mb-6">
              Founding Partner & Senior Counsel
            </h3>

            <div className="space-y-6 text-[#475569] text-[15px] sm:text-[16px] pr-0 lg:pr-12">
              <p className="leading-[1.7]">
                With over 30 years of experience in the regional and international legal landscape, Advocate Al Zekry has established a legacy of trust and strategic excellence.
              </p>
              <p className="leading-[1.7]">
                His vision for the firm combines traditional legal values with modern agile solutions, ensuring every client receives bespoke representation that transcends standard legal services.
              </p>
            </div>

            {/* Divider Line */}
            <hr className="my-8 border-gray-200 mr-0 lg:mr-12" />

            {/* Statistics Row */}
            <div className="grid grid-cols-3 gap-6 sm:gap-10 mb-10 mr-0 lg:mr-12">
              <div className="flex flex-col">
                <span className="text-[34px] sm:text-[38px] font-black text-[#1A7A43] leading-none mb-1">
                  30+
                </span>
                <span className="text-[9px] sm:text-[10px] font-bold tracking-widest text-[#64748b] uppercase">
                  YEARS EXP
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[34px] sm:text-[38px] font-black text-[#1A7A43] leading-none mb-1">
                  500+
                </span>
                <span className="text-[9px] sm:text-[10px] font-bold tracking-widest text-[#64748b] uppercase">
                  CASES WON
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[34px] sm:text-[38px] font-black text-[#1A7A43] leading-none mb-1">
                  15
                </span>
                <span className="text-[9px] sm:text-[10px] font-bold tracking-widest text-[#64748b] uppercase">
                  AWARDS
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <Link 
                href="/people/founder-al-zekry" 
                className="inline-flex items-center justify-center gap-3 rounded-sm bg-[#0f172a] px-5 py-3 text-[13px] font-bold text-white transition-all hover:bg-[#1e293b] hover:shadow-md cursor-pointer group"
              >
                View Full Profile
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
