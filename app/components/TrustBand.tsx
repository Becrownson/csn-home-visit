"use client";

import Image from "next/image";
import { Reveal } from "./motion/Reveal";
import { Counter } from "./motion/Counter";
import { Icon } from "./Icon";

const STATS = [
 { value: 350, suffix: "+", label: "Patients recovered" },
 { value: 20, suffix: "+", label: "Years experience" },
 { value: 7, suffix: "", label: "Days a week" },
 { value: 100, suffix: "%", label: "Licensed therapists" },
];

const PROOFS = [
 { icon: "home", text: "Home-visit citywide" },
 { icon: "tele", text: "Tele-consultation" },
 { icon: "clock", text: "Same-day slots" },
 { icon: "globe", text: "Hindi • Marathi • English" },
];

export function TrustBand() {
 return (
 <section className="py-12 lg:py-16">
 <div className="container-page">
 <Reveal>
 <div className="relative overflow-hidden rounded-3xl glass shadow-glass">
 {/* Trust strip image */}
 <div className="relative aspect-[16/5] sm:aspect-[16/4] w-full">
 <Image
 src="/images/website/04_trust_strip.jpg"
 alt="CrownPhysio team with patients across Chhatrapati Sambhajinagar"
 fill
 sizes="100vw"
 className="object-cover"
 />
 <div className="absolute inset-0 bg-gradient-to-r from-primary-900/85 via-primary-900/55 to-primary-900/20" />
 <div className="absolute inset-0 flex items-center px-5 sm:px-10">
 <div className="max-w-md text-white">
 <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-cyan-200">
 Trusted since 2004
 </span>
 <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-semibold mt-2 leading-snug">
 Real patients. Real recovery. Across Sambhajinagar.
 </h3>
 </div>
 </div>
 </div>

 {/* Stats row */}
 <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-6 lg:p-8">
 {STATS.map((s) => (
 <div key={s.label} className="text-center">
 <div className="text-3xl lg:text-4xl font-bold text-primary-900 tabular-nums">
 <Counter to={s.value} suffix={s.suffix} />
 </div>
 <div className="text-xs sm:text-sm text-ink-muted mt-1">{s.label}</div>
 </div>
 ))}
 </div>
 </div>
 </Reveal>

 <Reveal delay={0.15}>
 <ul className="mt-8 flex flex-wrap gap-2 sm:gap-3 justify-center">
 {PROOFS.map((p) => {
 const I = (Icon as any)[p.icon] as React.FC<{ size?: number }>;
 return (
 <li
 key={p.text}
 className="glass-soft inline-flex items-center gap-2 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-primary-800"
 >
 <I size={14} />
 {p.text}
 </li>
 );
 })}
 </ul>
 </Reveal>
 </div>
 </section>
 );
}