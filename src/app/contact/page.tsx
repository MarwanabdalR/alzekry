"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const colVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

export default function ContactPage() {
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
    alert("Your request has been sent!");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <main className="min-h-screen bg-[#f3f4f6] ltr" dir="ltr">
      {/* Hero Banner */}
      <section className="bg-[#1A7A43] py-16 px-6 text-white text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-3"
        >
          Contact Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-white/80 text-base sm:text-lg max-w-xl mx-auto font-light"
        >
          We are here to provide legal support and representation at the highest standards of professionalism and integrity.
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
                Contact Information
              </h2>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#f0faf5] flex items-center justify-center text-[#1A7A43] shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="text-[12px] font-bold text-[#1A7A43] uppercase tracking-widest mb-1">Address</p>
                  <p className="text-[14px] text-[#475569] leading-relaxed">
                    22 Shooting Club Street, Dokki, in front of the main gate <br /> of the Shooting Club, third floor, Giza, Egypt
                  </p>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#f0faf5] flex items-center justify-center text-[#1A7A43] shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.35 2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[12px] font-bold text-[#1A7A43] uppercase tracking-widest mb-1">Phone Numbers</p>
                  <p className="text-[14px] text-[#475569]">+0237482360</p>
                  <p className="text-[14px] text-[#475569]">+201151113878</p>
                  <p className="text-[14px] text-[#475569]">+201117710976</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#f0faf5] flex items-center justify-center text-[#1A7A43] shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-[12px] font-bold text-[#1A7A43] uppercase tracking-widest mb-1">Email</p>
                  <a href="mailto:info@alzekry-law.com" className="text-[14px] text-[#475569] hover:text-[#1A7A43] transition-colors">
                    info@alzekry-law.com
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
                  Open in Google Maps
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl shadow-sm p-5">
              <p className="text-[12px] font-bold text-[#0f172a] uppercase tracking-widest mb-4">Follow Us</p>
              <div className="flex items-center gap-3">
                {[
                  {
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/company/al-zekry-law-firm/?viewAsMember=true",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
                      </svg>
                    ),
                  },
                  {
                    label: "Facebook",
                    href: "https://www.facebook.com/profile.php?id=100063503696585&mibextid=wwXIfr&rdid=i3gC8JC0IO0QKjdY&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1ETJt8bsNQ%2F%3Fmibextid%3DwwXIfr#",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    ),
                  },
                ].map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#475569] hover:text-[#1A7A43] hover:border-[#1A7A43] transition-colors cursor-pointer"
                      title={social.label}
                    >
                      {social.icon}
                    </motion.div>
                  </Link>
                ))}
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
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Name + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-[12px] font-semibold text-[#0f172a] uppercase tracking-wide">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={form.name}
                      onChange={handleChange}
                      className="border border-gray-200 rounded-lg px-4 py-3 text-[14px] text-[#0f172a] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#1A7A43]/30 focus:border-[#1A7A43] transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-[12px] font-semibold text-[#0f172a] uppercase tracking-wide">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="example@mail.com"
                      value={form.email}
                      onChange={handleChange}
                      className="border border-gray-200 rounded-lg px-4 py-3 text-[14px] text-[#0f172a] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#1A7A43]/30 focus:border-[#1A7A43] transition-colors"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="text-[12px] font-semibold text-[#0f172a] uppercase tracking-wide">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="How can we help you?"
                    value={form.subject}
                    onChange={handleChange}
                    className="border border-gray-200 rounded-lg px-4 py-3 text-[14px] text-[#0f172a] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#1A7A43]/30 focus:border-[#1A7A43] transition-colors"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-[12px] font-semibold text-[#0f172a] uppercase tracking-wide">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Write the details of your inquiry here..."
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
                  Send Request
                </motion.button>
              </form>
            </div>
          </motion.div>

        </div>
      </section>
    </main>
  );
}
