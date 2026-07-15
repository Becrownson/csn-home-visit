"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Magnetic } from "./motion/Magnetic";
import { Parallax } from "./motion/Parallax";
import { openWhatsApp } from "../lib/wa";
import { Icon } from "./Icon";
import { AREAS } from "../lib/areas";
import { REGIONS } from "../lib/bodyMap";

const HERO_SLIDES = [
 {
 src: "/images/website/01_hero_main.jpg",
 alt: "Licensed physiotherapist treating a patient in a modern clinic",
 label: "Clinic Care",
 },
 {
 src: "/images/website/02_hero_tele_consult.jpg",
 alt: "Live tele-physiotherapy video consultation",
 label: "Tele Consult",
 },
 {
 src: "/images/website/03_hero_manual_therapy.jpg",
 alt: "Hands-on manual therapy and joint mobilisation",
 label: "Manual Therapy",
 },
];

const IMAGES = Array.from({ length: 10 }, (_, i) => `/images/human-body/body-${i + 1}.png`);

const FLOAT_CLASSES = [
 "float-a", "float-b", "float-c", "float-d", "float-e",
 "float-f", "float-g", "float-h", "float-i", "float-j",
];

const FLOAT_DURATIONS = [4.2, 3.8, 5.0, 4.5, 3.6, 4.8, 4.0, 5.2, 3.9, 4.3];

export function Hero() {
 const reduce = useReducedMotion();
 const [slide, setSlide] = useState(0);
 const [idx, setIdx] = useState(0);
 const region = REGIONS[idx];

 useEffect(() => {
 if (reduce) return;
 const id = setInterval(() => {
 setSlide((s) => (s + 1) % HERO_SLIDES.length);
 }, 5200);
 return () => clearInterval(id);
 }, [reduce]);

 useEffect(() => {
 IMAGES.forEach((src) => {
 const img = new Image();
 img.src = src;
 });
 const t = setInterval(() => setIdx((i) => (i + 1) % IMAGES.length), 4000);
 return () => clearInterval(t);
 }, []);

 return (
 <section id="top" className="relative min-h-screen pt-24 pb-12 lg:pt-28 lg:pb-20 overflow-hidden">
 {/* Ambient orbs */}
 <div className="absolute inset-0 pointer-events-none">
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

 <div className="container-page grid lg:grid-cols-2 gap-10 lg:gap-14 items-center relative">
 {/* Left: copy */}
 <div className="flex flex-col gap-6 lg:gap-8 text-center lg:text-left order-1">
 <motion.div
 initial={reduce ? false : { opacity: 0, y: 16 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: reduce ? 0 : 0.7, delay: reduce ? 0 : 0.2 }}
 >
 <span className="eyebrow items-center gap-1">
 <Icon.mapPin size={12} className="text-primary-600" />
 Chhatrapati Sambhajinagar
 </span>
 <h1 className="h-section mt-3 lg:mt-4 text-balance">
 Physiotherapy in<br />
 <span className="text-primary-600">Home, Clinic, Tele</span>
 </h1>
 <p className="p-section mt-4 max-w-xl mx-auto lg:mx-0">
 Expert physiotherapy at your doorstep, in our clinic, or over video. Trusted by 350+ patients, serving CIDCO, Garkheda, Osmanpura & more since 2004.
 </p>
 </motion.div>

 {/* CTAs */}
 <motion.div
 initial={reduce ? false : { opacity: 0, y: 16 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: reduce ? 0 : 0.7, delay: reduce ? 0 : 0.3 }}
 >
 <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
 <Magnetic>
 <a
 href="#pricing"
 className="btn-primary"
 >
 Book online
 <Icon.arrow size={16} />
 </a>
 </Magnetic>
 <Magnetic>
 <button
 onClick={() => openWhatsApp({ visitType: "home", source: "hero-phone" })}
 className="btn-secondary"
 >
 <Icon.phone size={18} />
 Call: +91 95619 98544
 </button>
 </Magnetic>
 </div>
 </motion.div>

 {/* Live availability ticker */}
 <motion.div
 initial={reduce ? false : { opacity: 0, y: 16 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: reduce ? 0 : 0.7, delay: reduce ? 0 : 0.5 }}
 className="glass-soft rounded-full px-5 py-2.5 inline-flex items-center self-center lg:self-start"
 >
 <p className="flex items-center justify-center gap-2 text-xs sm:text-sm text-primary-700">
 <span className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse" />
 3 slots open today in {AREAS.slice(0, 4).join(" · ")}
 </p>
 </motion.div>

 {/* Trust stats */}
 <motion.div
 initial={reduce ? false : { opacity: 0, y: 16 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: reduce ? 0 : 0.7, delay: reduce ? 0 : 0.7 }}
 className="flex flex-wrap gap-6 sm:gap-8 justify-center lg:justify-start text-center lg:text-left mt-2"
 >
 {[
 { label: "Patients", value: "350+" },
 { label: "Years", value: "20+" },
 { label: "Days/wk", value: "7" },
 ].map((stat, i) => (
 <div key={i} className="flex flex-col">
 <div className="text-3xl sm:text-4xl font-bold text-primary-900 tabular-nums">
 {stat.value}
 </div>
 <div className="text-xs sm:text-sm text-ink-muted uppercase tracking-wider">
 {stat.label}
 </div>
 </div>
 ))}
 </motion.div>
 </div>

 {/* Right: floating body map */}
 <motion.div
 initial={reduce ? false : { opacity: 0, scale: 0.96 }}
 animate={{ opacity: 1, scale: 1 }}
 transition={{ duration: reduce ? 0 : 0.8, delay: reduce ? 0 : 0.3, ease: [0.16, 1, 0.3, 1] }}
 className="relative order-2 lg:order-2 max-w-xs sm:max-w-sm lg:max-w-md mx-auto lg:mx-0"
 >
 <div className="relative h-[280px] sm:h-[340px] lg:h-[440px] flex items-center justify-center">
 {IMAGES.map((src, i) => (
 <img
 key={i}
 src={src}
 alt={`Body region ${i + 1}`}
 loading="eager"
 className={`absolute inset-0 w-full h-full object-contain drop-shadow-2xl pointer-events-none transition-opacity duration-[900ms] ease-in-out ${i === idx ? "opacity-100" : "opacity-0"} ${FLOAT_CLASSES[i]}`}
 style={{ animationDuration: `${FLOAT_DURATIONS[i]}s` }}
 />
 ))}
 </div>

 {/* Floating badge - rating */}
 <motion.div
 initial={reduce ? false : { opacity: 0, y: 12 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: reduce ? 0 : 0.6, delay: reduce ? 0 : 1.1 }}
 className="hidden sm:flex absolute -top-2 -right-2 lg:-right-4 glass-strong rounded-2xl p-3 items-center gap-2 shadow-cta z-10"
 >
 <div className="grid h-9 w-9 place-items-center rounded-xl bg-accent-100 text-accent-700">
 <Icon.star size={18} />
 </div>
 <div className="pr-1">
 <div className="text-xs text-ink-muted">Rated</div>
 <div className="text-sm font-bold text-primary-900">4.9 / 5</div>
 </div>
 </motion.div>

 {/* Floating badge - licensed */}
 <motion.div
 initial={reduce ? false : { opacity: 0, y: 12 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: reduce ? 0 : 0.6, delay: reduce ? 0 : 1.3 }}
 className="hidden md:flex absolute -bottom-2 -left-2 lg:-left-4 glass-strong rounded-2xl p-3 items-center gap-2 shadow-cta z-10"
 >
 <div className="grid h-9 w-9 place-items-center rounded-xl bg-primary-100 text-primary-700">
 <Icon.check size={18} />
 </div>
 <div className="pr-1">
 <div className="text-xs text-ink-muted">Licensed</div>
 <div className="text-sm font-bold text-primary-900">Since 2004</div>
 </div>
 </motion.div>

 {/* Region info card */}
 <motion.div
 key={region.id}
 initial={{ opacity: 0, y: 12 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
 className="glass rounded-glass p-5 lg:p-6 mt-4"
 >
 <div className="flex items-center gap-3 mb-3">
 <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent-100 text-accent-700 shrink-0">
 <Icon.check size={18} />
 </span>
 <div>
 <span className="eyebrow text-primary-600 text-xs">Region</span>
 <h3 className="font-display text-lg lg:text-xl font-semibold text-primary-900 leading-tight">
 {region.title}
 </h3>
 </div>
 </div>
 <p className="text-sm text-ink-muted leading-relaxed">{region.approach}</p>
 <div className="mt-3 flex flex-wrap gap-1.5">
 {region.conditions.slice(0, 4).map((c) => (
 <span key={c} className="bg-white/80 border border-primary-100 rounded-full px-2.5 py-0.5 text-xs text-primary-800">
 {c}
 </span>
 ))}
 </div>
 <a
 href="#pricing"
 className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-700 hover:text-accent-800 transition-colors"
 >
 Book for {region.title}
 <Icon.arrow size={14} />
 </a>
 </motion.div>
 </motion.div>
 </div>
 </section>
 );
}
