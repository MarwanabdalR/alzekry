
"use client";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <div className="relative min-h-screen bg-black overflow-hidden">
      {/* City Background Layer */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat grayscale-50"
        style={{
          backgroundImage: "url('/herobackground.jpg')",
        }}
      >
        {/* Dark overlay to make text readable and match standard dark mode */}
        <div className="absolute inset-0 bg-black/70"></div>
      </motion.div>

      {/* Content Layer */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center lg:px-8">
        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="mx-auto max-w-5xl text-2xl font-light tracking-wider text-white sm:text-3xl md:text-5xl lg:text-[54px] lg:leading-[1.2]"
        >
          OFFERING A <span className="font-bold">COMPREHENSIVE RANGE</span> OF LEGAL SERVICES TO A <span className="font-bold">DIVERSE ARRAY</span> OF COMMERCIAL, INDUSTRIAL, AND FINANCIAL CLIENTS <span className="font-bold">BOTH IN EGYPT AND INTERNATIONALLY.</span>
        </motion.h1>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="mt-16"
        >
          <a
            href="/about"
            className="inline-block border border-white px-10 py-3 text-sm tracking-widest text-white transition-colors hover:bg-white hover:text-black uppercase"
          >
            About The Firm
          </a>
        </motion.div>
      </div>
    </div>
    );
}