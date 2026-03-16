"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Logo() {
    return (
        <div className="flex justify-center relative w-full my-8 z-20">
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="bg-white rounded-full shadow-lg p-2"
            >
                <Image width={180} height={180} src="/logo.png" alt="Logo" className="object-contain" />
            </motion.div>
        </div>
    );
}