"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const QUICK_LINKS = [
  { label: "About the Firm", href: "/about" },
  { label: "Legal Expertise", href: "/expertise" },
  { label: "Our Professionals", href: "/people" },
  { label: "Latest News", href: "/news" },
  { label: "Careers", href: "/careers" },
];

const TRUST_BADGES = [
  "ISO 9001",
  "LEGAL ELITE",
  "LAW SOCIETY",
  "TOP RATED",
];

const colVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
  }),
};

export default function Footer() {
  return (
    <footer className="bg-[#0f1a0f] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto max-w-7xl px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Column 1: Brand */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={colVariants}
            className="flex flex-col gap-5"
          >
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#1A7A43" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-bold leading-none tracking-tight">Al Zekry</h2>
                <span className="text-[11px] text-[#1A7A43] font-medium">مؤسسة آل ذكري</span>
              </div>
            </div>

            <p className="text-[#94a3b8] text-[13px] leading-relaxed">
              A legacy of legal excellence serving individuals and corporations with integrity for over three decades.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-1">
              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[#94a3b8] hover:text-white hover:border-white/30 transition-colors cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </motion.button>
              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[#94a3b8] hover:text-white hover:border-white/30 transition-colors cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="18" cy="5" r="3" />
                  <circle cx="6" cy="12" r="3" />
                  <circle cx="18" cy="19" r="3" />
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                </svg>
              </motion.button>
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={colVariants}
            className="flex flex-col gap-5"
          >
            <h3 className="text-[15px] font-bold tracking-wide">Quick Links</h3>
            <ul className="flex flex-col gap-3.5">
              {QUICK_LINKS.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                >
                  <Link
                    href={link.href}
                    className="text-[#94a3b8] text-[14px] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Contact Us */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={colVariants}
            className="flex flex-col gap-5"
          >
            <h3 className="text-[15px] font-bold tracking-wide">Contact Us</h3>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-3">
                <span className="text-[#1A7A43] mt-0.5 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <span className="text-[#94a3b8] text-[13px] leading-relaxed">
                  Main Office, Financial District,<br />Tower 2, 14th Floor, Riyadh, KSA
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#1A7A43] shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.35 2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <span className="text-[#94a3b8] text-[13px]">+966 (11) 456 7890</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#1A7A43] shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </span>
                <a
                  href="mailto:contact@alzekry.com"
                  className="text-[#94a3b8] text-[13px] hover:text-white transition-colors"
                >
                  contact@alzekry.com
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Column 4: Trust Badges */}
          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={colVariants}
            className="flex flex-col gap-5"
          >
            <h3 className="text-[15px] font-bold tracking-wide">Trust Badges</h3>
            <div className="grid grid-cols-2 gap-3">
              {TRUST_BADGES.map((badge, i) => (
                <motion.div
                  key={badge}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  whileHover={{ scale: 1.04, borderColor: "rgba(255,255,255,0.25)" }}
                  className="border border-white/10 rounded-sm px-3 py-3 text-[10px] font-bold tracking-[0.12em] text-[#94a3b8] text-center uppercase hover:text-white transition-colors cursor-default"
                >
                  {badge}
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="border-t border-white/5"
      >
        <div className="container mx-auto max-w-7xl px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#475569] text-[12px]">
            © 2023 Al Zekry Law Firm. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-[#475569] text-[12px] hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-[#475569] text-[12px] hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/legal" className="text-[#475569] text-[12px] hover:text-white transition-colors">Legal Disclaimer</Link>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
