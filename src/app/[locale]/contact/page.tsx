"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { useTranslations } from "next-intl";

const colVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

export default function ContactPage() {
  const t = useTranslations("ContactPage");

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up form submission
    alert(t("form.alertSent"));
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <main className="min-h-screen bg-[#f3f4f6]">
      {/* Hero Banner */}
      <section className="bg-[#1A7A43] py-16 px-6 text-white text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-3"
        >
          {t("hero.title")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-white/80 text-base sm:text-lg max-w-xl mx-auto font-light"
        >
          {t("hero.subtitle")}
        </motion.p>
      </section>

      {/* Two-Column Section */}
      <section className="container mx-auto max-w-5xl px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* ── Left Column: Contact Info + Map ── */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={colVariants}
            className="flex flex-col gap-6"
          >
            {/* Info Card */}
            <div className="bg-white rounded-2xl shadow-sm p-7 flex flex-col gap-7">
              <h2 className="text-[17px] font-bold text-[#0f172a] border-b border-gray-100 pb-4">
                {t("info.title")}
              </h2>

              {/* Main Office – Giza */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#f0faf5] flex items-center justify-center text-[#1A7A43] shrink-0">
                  <FaMapMarkerAlt size={18} />
                </div>
                <div>
                  <p className="text-[12px] font-bold text-[#1A7A43] uppercase tracking-widest mb-1">{t("info.mainOffice")}</p>
                  <p className="text-[14px] text-[#475569] leading-relaxed">
                    {t.rich("info.mainOfficeAddress", { br: () => <br /> })}
                  </p>
                </div>
              </div>

              {/* Alexandria Branch */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#fff8f0] flex items-center justify-center text-[#c47a3a] shrink-0">
                  <FaMapMarkerAlt size={18} />
                </div>
                <div>
                  <p className="text-[12px] font-bold text-[#c47a3a] uppercase tracking-widest mb-1">{t("info.alexBranch")}</p>
                  <p className="text-[14px] text-[#475569] leading-relaxed">
                    {t.rich("info.alexBranchAddress", { br: () => <br /> })}
                  </p>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#f0faf5] flex items-center justify-center text-[#1A7A43] shrink-0">
                  <FaPhone size={16} />
                </div>
                <div>
                  <p className="text-[12px] font-bold text-[#1A7A43] uppercase tracking-widest mb-1">{t("info.phones")}</p>
                  <p className="text-[14px] text-[#475569]">+20 237 482 360</p>
                  <p className="text-[14px] text-[#475569]">+20 115 111 3878</p>
                  <p className="text-[14px] text-[#475569]">+20 111 771 0976</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#f0faf5] flex items-center justify-center text-[#1A7A43] shrink-0">
                  <FaEnvelope size={17} />
                </div>
                <div>
                  <p className="text-[12px] font-bold text-[#1A7A43] uppercase tracking-widest mb-1">{t("info.email")}</p>
                  <a href="mailto:alzekrylawfirm@gmail.com" className="text-[14px] text-[#475569] hover:text-[#1A7A43] transition-colors">
                    alzekrylawfirm@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 bg-white">
              <iframe
                src="https://maps.google.com/maps?q=30.0428326,31.2023323&hl=en&z=17&output=embed"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Al Zekry Law Firm Location"
              />
              <div className="px-5 py-3 border-t border-gray-100">
                <Link
                  href="https://maps.google.com/?q=30.0428326,31.2023323"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-[#1A7A43] font-semibold hover:underline inline-flex items-center gap-1"
                >
                  {t("map.open")}
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl shadow-sm p-5">
              <p className="text-[12px] font-bold text-[#0f172a] uppercase tracking-widest mb-4">{t("social.title")}</p>
              <div className="flex items-center gap-3">
                <Link href="https://www.linkedin.com/company/al-zekry-law-firm/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#475569] hover:text-[#0077B5] hover:border-[#0077B5] transition-colors cursor-pointer" title="LinkedIn">
                    <FaLinkedinIn size={17} />
                  </motion.div>
                </Link>
                <Link href="https://www.facebook.com/profile.php?id=100063503696585&mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#475569] hover:text-[#1877F2] hover:border-[#1877F2] transition-colors cursor-pointer" title="Facebook">
                    <FaFacebookF size={17} />
                  </motion.div>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* ── Right Column: Contact Form ── */}
          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={colVariants}
          >
            <div className="bg-white rounded-2xl shadow-sm p-7">
              <h2 className="text-[17px] font-bold text-[#0f172a] border-b border-gray-100 pb-4 mb-6">
                {t("form.title")}
              </h2>
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Name + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-[12px] font-semibold text-[#0f172a] uppercase tracking-wide">
                      {t("form.name")}
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder={t("form.namePlaceholder")}
                      value={form.name}
                      onChange={handleChange}
                      className="border border-gray-200 rounded-lg px-4 py-3 text-[14px] text-[#0f172a] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#1A7A43]/30 focus:border-[#1A7A43] transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-[12px] font-semibold text-[#0f172a] uppercase tracking-wide">
                      {t("form.email")}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder={t("form.emailPlaceholder")}
                      value={form.email}
                      onChange={handleChange}
                      className="border border-gray-200 rounded-lg px-4 py-3 text-[14px] text-[#0f172a] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#1A7A43]/30 focus:border-[#1A7A43] transition-colors"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="text-[12px] font-semibold text-[#0f172a] uppercase tracking-wide">
                    {t("form.subject")}
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder={t("form.subjectPlaceholder")}
                    value={form.subject}
                    onChange={handleChange}
                    className="border border-gray-200 rounded-lg px-4 py-3 text-[14px] text-[#0f172a] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#1A7A43]/30 focus:border-[#1A7A43] transition-colors"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-[12px] font-semibold text-[#0f172a] uppercase tracking-wide">
                    {t("form.message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder={t("form.messagePlaceholder")}
                    value={form.message}
                    onChange={handleChange}
                    className="border border-gray-200 rounded-lg px-4 py-3 text-[14px] text-[#0f172a] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#1A7A43]/30 focus:border-[#1A7A43] transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#1A7A43] text-white font-bold text-[15px] py-3.5 rounded-lg hover:bg-[#146336] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1A7A43]/40 cursor-pointer mt-1"
                >
                  {t("form.submit")}
                </motion.button>
              </form>
            </div>
          </motion.div>

        </div>
      </section>
    </main>
  );
}
