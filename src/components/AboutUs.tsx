"use client";

import { motion } from "framer-motion";
import Separator from "./layout/Separator";


export default function AboutUs() {
    return (
        <div className="bg-white container mx-auto min-h-screen flex flex-col items-center justify-start pt-20 px-6 text-left lg:px-8 ">
            <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-[#b38b57] text-4xl font-bold uppercase mb-8"
            >
                About Us
            </motion.h1>
            <Separator />
            <div className="flex flex-col gap-6 text-xl font-light leading-relaxed text-black max-w-4xl">
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                >
                    <strong className="font-bold">Al-Zekry Law Firm</strong> is a specialized institution dedicated to providing professional legal 
                    services and consultations with the highest standards of expertise. Founded on the principles of integrity, precision, and an 
                    unwavering commitment to client rights, the firm strives to deliver integrated legal solutions that cater to the needs of both individuals and corporations.
                </motion.p>
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                >
                    By leveraging deep-rooted legal experience and a clear vision, we aim to achieve optimal results in accordance with the rule of law. <br />
                    <strong className="font-bold">Our team </strong> comprises seasoned lawyers with extensive legal and judicial backgrounds, ensuring a meticulous understanding of procedures and judicial rulings.
                </motion.p>
            </div>
        </div>
    );
}