"use client";

import Image from "next/image";
import { Reveal } from "./motion/Reveal";
import { Stagger } from "./motion/Stagger";
import { SERVICES } from "../lib/services";
import { Icon } from "./Icon";
import { openWhatsApp } from "../lib/wa";

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

 <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6" stagger={0.06}>
 {SERVICES.map((s) => {
 const I = (Icon as any)[s.icon] as React.FC<{ size?: number; className?: string }>;
 return (
 <article
 key={s.id}
 className="group glass rounded-glass overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-expo flex flex-col"
 >
 {/* Image */}
 <div className="relative aspect-[4/3] overflow-hidden">
 <Image
 src={s.image}
 alt={s.imageAlt}
 fill
 sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
 className="object-cover group-hover:scale-105 transition-transform duration-500 ease-expo"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 via-primary-900/10 to-transparent" />
 <div className="absolute top-3 left-3 grid h-10 w-10 place-items-center rounded-2xl bg-white/90 backdrop-blur-sm text-primary-700 shadow-sm">
 <I size={20} />
 </div>
 </div>

 {/* Body */}
 <div className="p-5 lg:p-6 flex flex-col flex-1">
 <h3 className="font-display text-lg lg:text-xl font-semibold text-primary-900">
 {s.title}
 </h3>
 <p className="text-sm text-ink-muted mt-2 leading-relaxed flex-1">{s.blurb}</p>
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
 <button
 onClick={() => openWhatsApp({ source: `service-${s.id}` })}
 className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-700 hover:text-accent-800 transition-colors min-h-[44px]"
 >
 Book this service
 <Icon.arrow size={14} />
 </button>
 </div>
 </article>
 );
 })}
 </Stagger>
 </div>
 </section>
 );
}