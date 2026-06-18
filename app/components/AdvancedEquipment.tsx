"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Reveal } from "./motion/Reveal";
import { Stagger } from "./motion/Stagger";
import { Icon } from "./Icon";
import { openWhatsApp } from "../lib/wa";

interface Equipment {
 id: string;
 name: string;
 category: "Robotic" | "Electrotherapy" | "Rehabilitation" | "Recovery";
 uses: string;
 image: string;
 alt: string;
}

const EQUIPMENT: Equipment[] = [
 {
 id: "robotic-arm",
 name: "Robotic Arm Trainer",
 category: "Robotic",
 uses: "Stroke & neuro upper-limb recovery",
 image: "/images/advanced/01_robotic_arm.jpg",
 alt: "Robotic arm rehabilitation device for neuro patients",
 },
 {
 id: "robotic-gait",
 name: "Robotic Gait Trainer",
 category: "Robotic",
 uses: "Walking retraining after stroke or spinal injury",
 image: "/images/advanced/02_robotic_gait_trainer.jpg",
 alt: "Robotic gait training system for walking recovery",
 },
 {
 id: "ultrasound",
 name: "Ultrasound Therapy",
 category: "Electrotherapy",
 uses: "Deep tissue healing for tendons and ligaments",
 image: "/images/advanced/03_ultrasound_therapy.jpg",
 alt: "Therapeutic ultrasound machine being applied to a joint",
 },
 {
 id: "tens",
 name: "TENS Therapy",
 category: "Electrotherapy",
 uses: "Drug-free pain relief for acute and chronic pain",
 image: "/images/advanced/04_tens_therapy.jpg",
 alt: "TENS unit electrodes providing pain relief",
 },
 {
 id: "laser",
 name: "Class-IV Laser",
 category: "Electrotherapy",
 uses: "Accelerated tissue repair and inflammation control",
 image: "/images/advanced/05_laser_therapy.jpg",
 alt: "Class-IV laser therapy device for tissue healing",
 },
 {
 id: "diathermy",
 name: "Shortwave Diathermy",
 category: "Electrotherapy",
 uses: "Deep heat for arthritis, spasm and joint stiffness",
 image: "/images/advanced/06_shortwave_diathermy.jpg",
 alt: "Shortwave diathermy machine for deep heat therapy",
 },
 {
 id: "ift",
 name: "Interferential (IFT)",
 category: "Electrotherapy",
 uses: "Deep pain relief for back, knee and shoulder",
 image: "/images/advanced/07_interferential_ift.jpg",
 alt: "Interferential therapy unit with suction electrodes",
 },
 {
 id: "ems",
 name: "Muscle Stimulation (EMS)",
 category: "Electrotherapy",
 uses: "Muscle re-education after surgery or disuse",
 image: "/images/advanced/08_muscle_stimulation_ems.jpg",
 alt: "Electrical muscle stimulation for strength recovery",
 },
 {
 id: "traction",
 name: "Spinal Traction",
 category: "Rehabilitation",
 uses: "Decompression for slip disc and cervical issues",
 image: "/images/advanced/09_spinal_traction.jpg",
 alt: "Spinal traction table for cervical and lumbar decompression",
 },
 {
 id: "cpm",
 name: "CPM Knee Machine",
 category: "Rehabilitation",
 uses: "Passive motion after TKR and knee surgery",
 image: "/images/advanced/10_cpm_knee.jpg",
 alt: "Continuous passive motion machine for knee rehab",
 },
 {
 id: "shockwave",
 name: "Shockwave Therapy",
 category: "Recovery",
 uses: "Chronic tendon pain and plantar fasciitis",
 image: "/images/advanced/11_shockwave_therapy.jpg",
 alt: "Shockwave therapy device for chronic tendon and plantar pain",
 },
 {
 id: "electrotherapy",
 name: "Electrotherapy Suite",
 category: "Electrotherapy",
 uses: "Combined modalities for pain and inflammation",
 image: "/images/advanced/12_electrotherapy_suite.jpg",
 alt: "Combined electrotherapy modalities for pain and inflammation",
 },
 {
 id: "resistance",
 name: "Resistance Band Exercise",
 category: "Rehabilitation",
 uses: "Progressive loading for sports and strength rehab",
 image: "/images/advanced/13_resistance_band_exercise.jpg",
 alt: "Resistance band exercises for strength rehabilitation",
 },
 {
 id: "parallel-bars",
 name: "Parallel Bars (Gait)",
 category: "Rehabilitation",
 uses: "Gait training and lower-limb rehab",
 image: "/images/advanced/14_parallel_bars_gait.jpg",
 alt: "Adjustable parallel bars for gait rehabilitation",
 },
 {
 id: "swiss-ball",
 name: "Swiss Ball Core Training",
 category: "Rehabilitation",
 uses: "Core stability, balance and posture work",
 image: "/images/advanced/15_swiss_ball_core.jpg",
 alt: "Swiss ball core training for stability and posture",
 },
 {
 id: "balance-senior",
 name: "Balance Training (Senior)",
 category: "Rehabilitation",
 uses: "Fall-prevention for elderly and post-orthopaedic",
 image: "/images/advanced/16_balance_training_senior.jpg",
 alt: "Balance training program for senior fall prevention",
 },
 {
 id: "stroke-hand",
 name: "Stroke Hand Rehab",
 category: "Robotic",
 uses: "Fine motor recovery after stroke",
 image: "/images/advanced/17_stroke_hand_rehab.jpg",
 alt: "Hand rehabilitation equipment for stroke recovery",
 },
 {
 id: "sports-functional",
 name: "Sports Functional Training",
 category: "Recovery",
 uses: "Sport-specific return-to-play conditioning",
 image: "/images/advanced/18_sports_functional_training.jpg",
 alt: "Functional training for sports return-to-play conditioning",
 },
];

const CATEGORIES = ["All", "Robotic", "Electrotherapy", "Rehabilitation", "Recovery"] as const;
type Cat = (typeof CATEGORIES)[number];

export function AdvancedEquipment() {
 const reduce = useReducedMotion();
 const [active, setActive] = useState<Cat>("All");
 const filtered = active === "All" ? EQUIPMENT : EQUIPMENT.filter((e) => e.category === active);

 return (
 <section id="equipment" className="section bg-gradient-to-b from-primary-50/40 to-primary-50/80">
 <div className="container-page">
 <Reveal>
 <div className="text-center mb-10 lg:mb-12">
 <span className="eyebrow">Advanced equipment</span>
 <h2 className="h-section mt-3">Clinic-grade technology, at your service</h2>
 <p className="p-section mt-3 max-w-2xl mx-auto">
 From robotic gait trainers to class-IV lasers — our clinic is equipped with the same advanced tools you&apos;d find at a metro rehab centre.
 </p>
 </div>
 </Reveal>

 {/* Category filter */}
 <Reveal delay={0.1}>
 <div className="flex flex-wrap gap-2 justify-center mb-8 px-2">
 {CATEGORIES.map((c) => {
 const isActive = active === c;
 return (
 <button
 key={c}
 onClick={() => setActive(c)}
 className={`rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold transition-all duration-200 ${
 isActive
 ? "bg-accent-600 text-white shadow-cta"
 : "bg-white/70 text-primary-700 border border-primary-100 hover:bg-white"
 }`}
 >
 {c}
 </button>
 );
 })}
 </div>
 </Reveal>

 <AnimatePresence mode="wait">
 <motion.div
 key={active}
 initial={reduce ? false : { opacity: 0, y: 12 }}
 animate={{ opacity: 1, y: 0 }}
 exit={reduce ? undefined : { opacity: 0, y: -8 }}
 transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
 >
 <Stagger className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5" stagger={0.04}>
 {filtered.map((e) => (
 <article
 key={e.id}
 className="group glass rounded-glass overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-expo"
 >
 <div className="relative aspect-[4/3] overflow-hidden bg-primary-50">
 <Image
 src={e.image}
 alt={e.alt}
 fill
 sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 22vw"
 className="object-cover group-hover:scale-105 transition-transform duration-500 ease-expo"
 />
 <div className="absolute top-2 left-2 text-[10px] font-semibold uppercase tracking-wider rounded-full px-2 py-0.5 bg-white/90 backdrop-blur-sm text-primary-700">
 {e.category}
 </div>
 </div>
 <div className="p-3 sm:p-4 flex flex-col flex-1">
 <h3 className="font-display text-sm sm:text-base font-semibold text-primary-900 leading-snug">
 {e.name}
 </h3>
 <p className="text-xs text-ink-muted mt-1.5 leading-relaxed flex-1">{e.uses}</p>
 </div>
 </article>
 ))}
 </Stagger>
 </motion.div>
 </AnimatePresence>

 <Reveal delay={0.2}>
 <div className="mt-10 text-center">
 <button
 onClick={() => openWhatsApp({ source: "equipment-gallery" })}
 className="btn-secondary"
 >
 <Icon.whatsapp size={18} />
 Ask about a specific machine
 </button>
 </div>
 </Reveal>
 </div>
 </section>
 );
}