"use client";

import Image from "next/image";
import { Reveal } from "./motion/Reveal";
import { Stagger } from "./motion/Stagger";
import { Icon } from "./Icon";

const STEPS = [
 {
 n: "01",
 icon: "phone" as const,
 title: "Book in 60 seconds",
 body: "Tap WhatsApp, share your pain area and preferred time. We confirm a slot within minutes.",
 image: "/images/website/21_process_assessment.jpg",
 alt: "Patient booking a physiotherapy session over a phone call",
 },
 {
 n: "02",
 icon: "mapPin" as const,
 title: "Detailed assessment",
 body: "A licensed physio evaluates your movement, strength and pain — both in clinic and at home.",
 image: "/images/website/22_process_plan.jpg",
 alt: "Physiotherapist performing a detailed physical assessment",
 },
 {
 n: "03",
 icon: "check" as const,
 title: "Guided therapy",
 body: "Manual therapy, electrotherapy and supervised exercises — every session tailored to your milestone.",
 image: "/images/website/23_process_therapy.jpg",
 alt: "Guided treatment session with progressive exercise plan",
 },
 {
 n: "04",
 icon: "star" as const,
 title: "Recover and thrive",
 body: "Discharge with a home plan, tele follow-ups, and a progress dashboard — until you're truly back.",
 image: "/images/website/24_process_recovery.jpg",
 alt: "Patient fully recovered and active after completing the program",
 },
];

export function HowItWorks() {
 return (
 <section id="how-it-works" className="section">
 <div className="container-page">
 <Reveal>
 <div className="text-center mb-12">
 <span className="eyebrow">Simple process</span>
 <h2 className="h-section mt-3">From pain to plan in four steps</h2>
 <p className="p-section mt-3 max-w-xl mx-auto">
 A clear, milestone-based recovery journey — no surprises, no endless sessions, just measurable progress.
 </p>
 </div>
 </Reveal>

 <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6" stagger={0.1}>
 {STEPS.map((s) => {
 const I = (Icon as any)[s.icon] as React.FC<{ size?: number; className?: string }>;
 return (
 <article key={s.n} className="glass rounded-glass overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
 {/* Image */}
 <div className="relative aspect-[5/4] overflow-hidden">
 <Image
 src={s.image}
 alt={s.alt}
 fill
 sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 25vw"
 className="object-cover"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-primary-900/55 via-transparent to-transparent" />
 <div className="absolute top-3 left-3 font-display text-3xl font-bold text-white drop-shadow-md">
 {s.n}
 </div>
 <div className="absolute bottom-3 right-3 grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 text-white shadow-cta">
 <I size={20} />
 </div>
 </div>

 {/* Body */}
 <div className="p-5 lg:p-6 flex-1">
 <h3 className="font-display text-lg lg:text-xl font-semibold text-primary-900">
 {s.title}
 </h3>
 <p className="text-sm text-ink-muted mt-2 leading-relaxed">{s.body}</p>
 </div>
 </article>
 );
 })}
 </Stagger>
 </div>
 </section>
 );
}