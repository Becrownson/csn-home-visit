"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./motion/Reveal";
import { openWhatsApp } from "../lib/wa";
import { Icon } from "./Icon";

export function FinalCTA() {
 const reduce = useReducedMotion();
 return (
 <section className="section">
 <div className="container-page">
 <Reveal>
 <div className="relative overflow-hidden rounded-3xl p-8 sm:p-12 lg:p-16 text-center text-white min-h-[300px] flex items-center justify-center">
 {/* Background image */}
 <Image
 src="/images/website/07_facility_interior.jpg"
 alt="Patient enjoying recovery and active lifestyle after physiotherapy treatment"
 fill
 sizes="100vw"
 className="object-cover"
 />
 {/* Color gradient overlay */}
 <div className="absolute inset-0 bg-gradient-to-br from-primary-900/85 via-primary-800/75 to-accent-700/80" />
 {/* Decorative orbs */}
 <motion.div
 animate={reduce ? undefined : { x: [0, 30, 0], y: [0, -20, 0] }}
 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
 className="absolute -top-20 -left-20 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl"
 />
 <motion.div
 animate={reduce ? undefined : { x: [0, -30, 0], y: [0, 20, 0] }}
 transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
 className="absolute -bottom-20 -right-20 w-80 h-80 bg-emerald-400/20 rounded-full blur-3xl"
 />

 <div className="relative max-w-2xl">
 <span className="eyebrow items-center text-cyan-200">
 <Icon.clock size={12} />
 Same-day slots available
 </span>
 <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-balance mt-3">
 Stop living with pain.<br />
 Start your recovery today.
 </h2>
 <p className="mt-4 text-cyan-100 max-w-xl mx-auto leading-relaxed">
 Book a session in 60 seconds. We&apos;ll confirm your slot on WhatsApp within minutes.
 </p>

 <div className="mt-8 flex flex-wrap gap-3 justify-center">
 <button
 onClick={() => openWhatsApp({ source: "final-cta" })}
 className="inline-flex items-center gap-2 rounded-full bg-white text-primary-800 font-semibold px-6 py-3 shadow-lg hover:scale-105 transition-transform duration-200 ease-expo"
 >
 <Icon.whatsapp size={20} className="text-accent-600" />
 Book on WhatsApp
 </button>
 <a
 href="tel:+919561998544"
 className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold px-6 py-3 hover:bg-white/20 transition-colors"
 >
 <Icon.phone size={18} />
 Call +91 95619 98544
 </a>
 </div>
 </div>
 </div>
 </Reveal>
 </div>
 </section>
 );
}