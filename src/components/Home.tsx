
"use client";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <div className="relative min-h-screen bg-black overflow-hidden">
      {/* City Background Layer */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 4.8, ease: "easeOut" }}
        className="absolute inset-0 z-0 grayscale-50"
      >
        <video
          autoPlay
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/backgroundVideo.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay to make text readable and match standard dark mode */}
        <div className="absolute inset-0 bg-black/70"></div>
      </motion.div>

      {/* Content Layer */}
      <div className="container mx-auto relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center lg:px-8">
        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 6.4, ease: "easeOut" }}
          className="mx-auto max-w-5xl text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[90px] lg:leading-[1.1]"
        >
          Tradition of Excellence
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 6.6, ease: "easeOut" }}
          className="mx-auto mt-6 max-w-3xl text-lg sm:text-xl text-gray-200 font-light tracking-wide leading-relaxed"
        >
          Experience the pinnacle of legal expertise and dedication. Protecting your rights with integrity and unparalleled professional wisdom.
        </motion.p>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 6.8, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
        >
          <a
            href="/expertise"
            className="inline-flex items-center justify-center rounded-md bg-[#1A7A43] px-8 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-[#146336] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A7A43]"
          >
            Explore Our Expertise
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-md border border-white/30 bg-black/40 backdrop-blur-sm px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-black/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Consultation
          </a>
        </motion.div>
      </div>
    </div>
    );
}