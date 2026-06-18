"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Magnetic } from "./motion/Magnetic";
import { Parallax } from "./motion/Parallax";
import { openWhatsApp } from "../lib/wa";
import { Icon } from "./Icon";
import { AREAS } from "../lib/areas";

const BULLET_ICONS = ["star", "mapPin", "clock", "phone"];

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

export function Hero() {
 const reduce = useReducedMotion();
 const [slide, setSlide] = useState(0);

 useEffect(() => {
 if (reduce) return;
 const id = setInterval(() => {
 setSlide((s) => (s + 1) % HERO_SLIDES.length);
 }, 5200);
 return () => clearInterval(id);
 }, [reduce]);

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
 <div className="flex flex-col gap-6 lg:gap-8 text-center lg:text-left order-2 lg:order-1">
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
 transition={{ duration: reduce ? 0 : 0.5, delay: reduce ? 0 : 0.5 }}
 className="flex flex-wrap gap-3 justify-center lg:justify-start"
 >
 <Magnetic>
 <a href="#pricing" className="btn-primary text-base sm:text-lg">
 Book online
 </a>
 </Magnetic>
 <Magnetic>
 <a
 onClick={() => openWhatsApp({ visitType: "home", source: "hero-phone" })}
 className="btn-secondary"
 >
 <Icon.phone size={18} />
 Call: +91 95619 98544
 </a>
 </Magnetic>
 </motion.div>

 {/* Live availability ticker */}
 <motion.div
 initial={reduce ? false : { opacity: 0, y: 16 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: reduce ? 0 : 0.5, delay: reduce ? 0 : 0.8 }}
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
 transition={{ duration: reduce ? 0 : 0.5, delay: reduce ? 0 : 1 }}
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

 {/* Right: hero image carousel */}
 <motion.div
 initial={reduce ? false : { opacity: 0, scale: 0.96 }}
 animate={{ opacity: 1, scale: 1 }}
 transition={{ duration: reduce ? 0 : 0.8, delay: reduce ? 0 : 0.3, ease: [0.16, 1, 0.3, 1] }}
 className="relative order-1 lg:order-2"
 >
 <div className="relative aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5] max-w-md mx-auto lg:max-w-none">
 {/* Stacked slides */}
 {HERO_SLIDES.map((s, i) => (
 <motion.div
 key={s.src}
 initial={false}
 animate={{
 opacity: i === slide ? 1 : 0,
 scale: i === slide ? 1 : 1.04,
 }}
 transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
 className="absolute inset-0 rounded-[2rem] overflow-hidden glass shadow-glass"
 aria-hidden={i !== slide}
 >
 <Image
 src={s.src}
 alt={s.alt}
 fill
 sizes="(max-width: 1024px) 90vw, 45vw"
 className="object-cover"
 priority={i === 0}
 />
 {/* Overlay gradient */}
 <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-primary-900/60 via-primary-900/20 to-transparent" />
 <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-2">
 <span className="glass-soft text-primary-800 text-xs font-semibold uppercase tracking-wider rounded-full px-3 py-1">
 {s.label}
 </span>
 </div>
 </motion.div>
 ))}

 {/* Floating badge */}
 <motion.div
 initial={reduce ? false : { opacity: 0, y: 12 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: reduce ? 0 : 0.6, delay: reduce ? 0 : 1.1 }}
 className="hidden sm:flex absolute -top-4 -right-4 lg:-right-6 glass-strong rounded-2xl p-3 items-center gap-2 shadow-cta z-10"
 >
 <div className="grid h-9 w-9 place-items-center rounded-xl bg-accent-100 text-accent-700">
 <Icon.star size={18} />
 </div>
 <div className="pr-1">
 <div className="text-xs text-ink-muted">Rated</div>
 <div className="text-sm font-bold text-primary-900">4.9 / 5</div>
 </div>
 </motion.div>

 {/* Floating badge - experience */}
 <motion.div
 initial={reduce ? false : { opacity: 0, y: 12 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: reduce ? 0 : 0.6, delay: reduce ? 0 : 1.3 }}
 className="hidden md:flex absolute -bottom-4 -left-4 lg:-left-6 glass-strong rounded-2xl p-3 items-center gap-2 shadow-cta z-10"
 >
 <div className="grid h-9 w-9 place-items-center rounded-xl bg-primary-100 text-primary-700">
 <Icon.check size={18} />
 </div>
 <div className="pr-1">
 <div className="text-xs text-ink-muted">Licensed</div>
 <div className="text-sm font-bold text-primary-900">Since 2004</div>
 </div>
 </motion.div>
 </div>

 {/* Slide dots */}
 <div className="mt-6 flex items-center justify-center gap-2">
 {HERO_SLIDES.map((_, i) => (
 <button
 key={i}
 onClick={() => setSlide(i)}
 aria-label={`Show hero image ${i + 1}`}
 className={`h-1.5 rounded-full transition-all duration-300 ${
 i === slide ? "w-8 bg-accent-600" : "w-1.5 bg-primary-300 hover:bg-primary-400"
 }`}
 />
 ))}
 </div>
 </motion.div>
 </div>
 </section>
 );
}