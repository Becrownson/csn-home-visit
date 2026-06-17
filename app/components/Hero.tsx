"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Magnetic } from "./motion/Magnetic";
import { Parallax } from "./motion/Parallax";
import { openWhatsApp } from "../lib/wa";
import { Icon } from "./Icon";
import { AREAS } from "../lib/areas";

const BULLET_ICONS = ["star", "mapPin", "clock", "phone"];

export function Hero() {
 const reduce = useReducedMotion();

 return (
 <section id="top" className="relative min-h-screen pt-20">
 {/* Ambient orbs */}
 <div className="absolute inset-0">
 <Parallax distance={60}>
 <div className="absolute top-20 left-10 w-48 h-48 bg-cyan-300/10 rounded-full blur-3xl" />
 </Parallax>
 <Parallax distance={80}>
 <div className="absolute bottom-20 right-10 w-64 h-64 bg-emerald-300/10 rounded-full blur-3xl" />
 </Parallax>
 <Parallax distance={50}>
 <div className="absolute top-1/3 right-1/4 w-36 h-36 bg-cyan-200/15 rounded-full blur-3xl" />
 </Parallax>
 </div>

 <div className="container-page flex flex-col items-center gap-10 lg:gap-16 py-32">
 <motion.div
 initial={reduce ? false : { opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ duration: reduce ? 0 : 1, delay: reduce ? 0 : 0.4 }}
 className="text-center"
 >
 <span className="eyebrow items-center gap-1">
 <Icon.mapPin size={12} className="text-primary-600" />
 Chhatrapati Sambhajinagar
 </span>
 <h1 className="h-section mt-4 text-center">
 Physiotherapy in<br />
 <span className="text-primary-600">Home, Clinic, Tele</span>
 </h1>
 <p className="p-section mt-4 max-w-2xl">
 Expert physiotherapy at your doorstep, in our clinic, or over video. Trusted by 350+ patients, serving CIDCO, Garkheda, Osmanpura & more since 2004.
 </p>
 </motion.div>

 {/* CTAs */}
 <motion.div
 initial={reduce ? false : { opacity: 0, y: 24 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: reduce ? 0 : 0.5, delay: reduce ? 0 : 0.8 }}
 className="flex flex-wrap gap-4 justify-center"
 >
 <Magnetic>
 <a
 href="#pricing"
 className="btn-primary text-lg"
 >
 Book online
 </a>
 </Magnetic>
 <Magnetic>
 <a
 onClick={() => openWhatsApp({ visitType: "home", source: "hero-phone" })}
 className="btn-secondary"
 >
 <Icon.phone size={20} />
 Call: +91 95619 98544
 </a>
 </Magnetic>
 </motion.div>

 {/* Live availability ticker */}
 <motion.div
 initial={reduce ? false : { opacity: 0, y: 24 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: reduce ? 0 : 0.5, delay: reduce ? 0 : 1.2 }}
 className="glass-soft rounded-full px-6 py-3 text-center"
 >
 <p className="flex items-center justify-center gap-2 text-sm text-primary-700">
 <span className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse" />
 3 slots open today in {AREAS.slice(0, 4).join(" · ")}
 </p>
 </motion.div>

 {/* Trust stats */}
 <motion.div
 initial={reduce ? false : { opacity: 0, y: 24 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: reduce ? 0 : 0.5, delay: reduce ? 0 : 1.4 }}
 className="flex flex-wrap gap-8 justify-center text-center mt-8"
 >
 {[
 { label: "Patients", value: 350 },
 { label: "Years", value: 20 },
 { label: "Days/wk", value: 7 },
 ].map((stat, i) => (
 <div key={i} className="flex flex-col items-center gap-1">
 <div className="text-4xl font-bold text-primary-900">
 {stat.value}+
 </div>
 <div className="text-sm text-ink-muted uppercase tracking-wider">
 {stat.label}
 </div>
 </div>
 ))}
 </motion.div>

 {/* Bullet points */}
 <motion.ul
 className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16"
 initial={reduce ? false : { opacity: 0, y: 24 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: reduce ? 0 : 0.5, delay: reduce ? 0 : 1.6 }}
 >
 {BULLET_ICONS.map((icon, i) => (
 <li key={i} className="flex items-center gap-2 text-sm">
 <Icon.star size={14} className="text-accent-600" />
 <span>Expert care</span>
 </li>
 ))}
 </motion.ul>
 </div>
 </section>
 );
}
