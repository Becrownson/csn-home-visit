"use client";

import { Reveal } from "./motion/Reveal";
import { Stagger } from "./motion/Stagger";
import { SERVICES } from "../lib/services";
import { Icon } from "./Icon";

export function Services() {
 return (
 <section id="services" className="section">
 <div className="container-page">
 <Reveal>
 <div className="text-center mb-12 lg:mb-16">
 <span className="eyebrow">What we treat</span>
 <h2 className="h-section mt-3">Services that meet you where you are</h2>
 <p className="p-section mt-3 max-w-2xl mx-auto">
 From doorstep care to in-clinic electrotherapy, from live video to specialist neuro rehab — we cover the full recovery journey.
 </p>
 </div>
 </Reveal>

 <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5" stagger={0.08}>
 {SERVICES.map((s) => {
 const I = (Icon as any)[s.icon] as React.FC<{ size?: number; className?: string }>;
 return (
 <div
 key={s.id}
 className="glass rounded-glass p-5 lg:p-6 hover:scale-[1.02] transition-transform duration-200 ease-expo cursor-pointer"
 >
 <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-primary-100 to-accent-100 text-primary-700">
 <I size={22} />
 </div>
 <h3 className="font-display text-lg lg:text-xl font-semibold text-primary-900 mt-4">
 {s.title}
 </h3>
 <p className="text-sm text-ink-muted mt-2 leading-relaxed">{s.blurb}</p>
 <ul className="mt-4 flex flex-wrap gap-1.5">
 {s.tags.map((t) => (
 <li
 key={t}
 className="text-[10px] font-medium uppercase tracking-wide bg-white/70 text-primary-700 rounded-full px-2 py-0.5 border border-white"
 >
 {t}
 </li>
 ))}
 </ul>
 </div>
 );
 })}
 </Stagger>
 </div>
 </section>
 );
}
