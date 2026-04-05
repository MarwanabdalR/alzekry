/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const QUICK_LINKS_KEYS = [
  { key: "about", href: "/about" },
  { key: "expertise", href: "/expertise" },
  { key: "people", href: "/people" },
  { key: "news", href: "/news" },
  { key: "values", href: "/values" },
  { key: "testimonials", href: "/testimonials" },
  { key: "contact", href: "/contact" },
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
  const t = useTranslations("Footer");

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
                <Image src="/logo.png" alt="Logo" width={50} height={50} />
              </div>
              <div>
                <h2 className="text-lg font-bold leading-none tracking-tight">{t("logoTitle")}</h2>
                <span className="text-[11px] text-[#1A7A43] font-medium">{t("logoSubtitle")}</span>
              </div>
            </div>

            <p className="text-[#94a3b8] text-[13px] leading-relaxed">
              {t("description")}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-1">
              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[#94a3b8] hover:text-white hover:border-white/30 transition-colors cursor-pointer">
                <Link href="https://www.facebook.com/profile.php?id=100063503696585&mibextid=wwXIfr&rdid=i3gC8JC0IO0QKjdY&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1ETJt8bsNQ%2F%3Fmibextid%3DwwXIfr#" target="_blank" >
                  <FaFacebookF />
                </Link>
              </motion.button>
              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[#94a3b8] hover:text-white hover:border-white/30 transition-colors cursor-pointer">
                <Link href="https://www.linkedin.com/company/al-zekry-law-firm/?viewAsMember=true" target="_blank" >
                  <FaLinkedinIn />

                </Link>
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
            <h3 className="text-[15px] font-bold tracking-wide">{t("quickLinksTitle")}</h3>
            <ul className="flex flex-col gap-3.5">
              {QUICK_LINKS_KEYS.map((link, i) => (
                <motion.li
                  key={link.key}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                >
                  <Link
                    href={link.href as any}
                    className="text-[#94a3b8] text-[14px] hover:text-white transition-colors"
                  >
                    {t(`links.${link.key as any}`)}
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
            <h3 className="text-[15px] font-bold tracking-wide">{t("contactUsTitle")}</h3>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-3">
                <span className="text-[#1A7A43] mt-0.5 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <span className="text-[#94a3b8] text-[13px] leading-relaxed">
                  <p className="text-[14px] text-[#94a3b8] leading-relaxed">
                    {t.rich("address", { br: () => <br /> })}
                  </p>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#1A7A43] shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.35 2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <span className="text-[#94a3b8] text-[13px]">+201117710976</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#1A7A43] shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </span>
                <a
                  href="mailto:alzekrylawfirm@gmail.com"
                  className="text-[#94a3b8] text-[13px] hover:text-white transition-colors"
                >
                  alzekrylawfirm@gmail.com
                </a>
              </li>
            </ul>
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
        <div className="container mx-auto max-w-7xl px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-[#475569] text-[12px]">
            {t("copyright")}
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
