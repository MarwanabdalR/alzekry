"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<'firm' | 'expertise' | null>(null);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 5.2, ease: "easeOut" }}
      className="bg-white shadow-sm"
    >
      <nav className="container mx-auto flex items-center justify-between p-4 lg:px-8" aria-label="Global">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <div className="relative h-24 w-24 sm:h-16 sm:w-16">
            <Image src="/logo.png" alt="Logo" fill className="object-contain" />
          </div>
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3">
            <div className="flex flex-col text-[#1e293b]">
              <h1 className="text-xl sm:text-2xl font-bold tracking-tight">Al Zekry</h1>
              <span className="text-[10px] sm:text-xs font-semibold text-[#1A7A43]">مؤسسة آل ذكري</span>
            </div>
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex lg:gap-x-10">
          <Link href="/" className="text-[15px] font-semibold text-[#1e293b] hover:text-[#1A7A43] transition-colors">Home</Link>
          <Link href="/founder" className="text-[15px] font-semibold text-[#475569] hover:text-[#1A7A43] transition-colors">Founder</Link>
          <Link href="/practice-areas" className="text-[15px] font-semibold text-[#475569] hover:text-[#1A7A43] transition-colors">Practice Areas</Link>
          <Link href="/people" className="text-[15px] font-semibold text-[#475569] hover:text-[#1A7A43] transition-colors">Our People</Link>
          <Link href="/news" className="text-[15px] font-semibold text-[#475569] hover:text-[#1A7A43] transition-colors">News</Link>
        </div>

        {/* Right side (Desktop) */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-6">
          <button className="flex items-center gap-2 text-[#1e293b] hover:text-[#1A7A43] font-semibold text-[15px] transition-colors cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            AR
          </button>
          <Link href="/contact" className="bg-[#1A7A43] text-white px-6 py-2.5 rounded-md font-medium hover:bg-[#146336] transition-colors shadow-sm cursor-pointer border-transparent">
            Contact Us
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex flex-col items-end gap-1.5 justify-center rounded-md p-2.5 cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <div className={`h-0.5 w-8 transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'bg-transparent' : 'bg-[#1e293b]'}`} />
            <div className={`h-0.5 w-6 transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'bg-transparent' : 'bg-[#1e293b]'}`} />
            <div className={`h-0.5 w-8 transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'bg-transparent' : 'bg-[#1e293b]'}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu, show/hide based on menu state. */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 flex">
            {/* Dark background overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60"
              onClick={() => {
                setMobileMenuOpen(false);
                setActiveSubmenu(null);
              }}
            />

            {/* Sliding panel from left */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
              className="relative flex w-[85%] max-w-sm flex-col bg-white shadow-xl h-full overflow-y-auto"
            >

              {/* Dynamic Header / Close Button Area based on Submenu State */}
              {activeSubmenu ? (
                <div className="flex items-center justify-between px-8 pt-8 pb-10">
                  <span className="text-sm tracking-[0.2em] text-zinc-800 uppercase font-medium">
                    {activeSubmenu === 'firm' ? 'OUR FIRM' : activeSubmenu === 'expertise' ? 'EXPERTISE' : ''}
                  </span>
                  <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-zinc-500 hover:text-zinc-900 transition-colors cursor-pointer"
                    onClick={() => setActiveSubmenu(null)}
                  >
                    <span className="sr-only">Go back</span>
                    <svg className="h-6 w-6 stroke-[1.5px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                </div>
              ) : (
                <div className="flex items-center justify-end px-6 pt-8 pb-10">
                  <motion.button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-zinc-900 cursor-pointer"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <svg className="h-10 w-10 stroke-[1px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>
              )}

              {/* Links Content Area */}
              <div className="px-8 flex flex-col gap-8">

                {/* MAIN MENU */}
                {!activeSubmenu && (
                  <>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      onClick={() => setActiveSubmenu('firm')}
                      className="flex w-full items-center justify-between text-left text-[22px] font-light tracking-wide text-zinc-900 transition-colors hover:text-[#09b353] cursor-pointer "
                    >
                      Our Firm
                      <svg className="h-5 w-5 stroke-[1px] text-zinc-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setActiveSubmenu('expertise')}
                      className="flex w-full items-center justify-between text-left text-[22px] font-light tracking-wide text-zinc-900 transition-colors hover:text-[#09b353] cursor-pointer"
                    >
                      Expertise
                      <svg className="h-5 w-5 stroke-[1px] text-zinc-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.button>
                    <Link href="/people" onClick={() => setMobileMenuOpen(false)} className="block text-[22px] font-light tracking-wide text-zinc-900 transition-colors hover:text-[#09b353]">
                      People
                    </Link>
                    <Link href="/awards" onClick={() => setMobileMenuOpen(false)} className="block text-[22px] font-light tracking-wide text-zinc-900 transition-colors hover:text-[#09b353]">
                      Awards
                    </Link>
                    <Link href="/careers" onClick={() => setMobileMenuOpen(false)} className="block text-[22px] font-light tracking-wide text-zinc-900 transition-colors hover:text-[#09b353]">
                      Careers
                    </Link>
                    <Link href="/news" onClick={() => setMobileMenuOpen(false)} className="block text-[22px] font-light tracking-wide text-zinc-900 transition-colors hover:text-[#09b353]">
                      News
                    </Link>
                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block text-[22px] font-light tracking-wide text-zinc-900 transition-colors hover:text-[#09b353]">
                      Contact
                    </Link>
                  </>
                )}

                {/* OUR FIRM SUBMENU */}
                {activeSubmenu === 'firm' && (
                  <>
                    <Link href="/our-firm/who-we-are" onClick={() => { setMobileMenuOpen(false); setActiveSubmenu(null); }} className="block text-[22px] font-light tracking-wide text-zinc-900 transition-colors hover:text-[#09b353]">
                      Who We Are
                    </Link>
                    <Link href="/our-firm/values-principles" onClick={() => { setMobileMenuOpen(false); setActiveSubmenu(null); }} className="block text-[22px] font-light tracking-wide text-zinc-900 transition-colors hover:text-[#09b353]">
                      Values & Principles
                    </Link>
                    <Link href="/our-firm/testimonials" onClick={() => { setMobileMenuOpen(false); setActiveSubmenu(null); }} className="block text-[22px] font-light tracking-wide text-zinc-900 transition-colors hover:text-[#09b353]">
                      Testimonials
                    </Link>
                  </>
                )}

                {/* EXPERTISE SUBMENU */}
                {activeSubmenu === 'expertise' && (
                  <>
                    <Link href="/expertise/practice-areas" onClick={() => { setMobileMenuOpen(false); setActiveSubmenu(null); }} className="block text-[22px] font-light tracking-wide text-zinc-900 transition-colors hover:text-[#09b353]">
                      Practice Areas
                    </Link>
                    <Link href="/expertise/specializations" onClick={() => { setMobileMenuOpen(false); setActiveSubmenu(null); }} className="block text-[22px] font-light tracking-wide text-zinc-900 transition-colors hover:text-[#09b353]">
                      Specializations
                    </Link>
                    <Link href="/expertise/business-sectors" onClick={() => { setMobileMenuOpen(false); setActiveSubmenu(null); }} className="block text-[22px] font-light tracking-wide text-zinc-900 transition-colors hover:text-[#09b353]">
                      Business Sectors
                    </Link>
                  </>
                )}

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
