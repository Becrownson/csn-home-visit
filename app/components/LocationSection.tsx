"use client";

import Image from "next/image";
import { Reveal } from "./motion/Reveal";
import { Stagger } from "./motion/Stagger";
import { Icon } from "./Icon";
import { openWhatsApp } from "../lib/wa";

export function LocationSection() {
 return (
 <section id="visit" className="section">
 <div className="container-page">
 <Reveal>
 <div className="text-center max-w-2xl mx-auto">
 <span className="eyebrow">Visit our clinic</span>
 <h2 className="h-section mt-3 text-balance">
 Easy to find. Easy to reach.
 </h2>
 <p className="p-section mt-4">
 Located in the heart of Chhatrapati Sambhajinagar — three minutes from the railway station, with free parking and step-free access for senior patients.
 </p>
 </div>
 </Reveal>

 <Stagger className="mt-10 grid gap-4 sm:gap-5 lg:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
 {/* Lifestyle banner - tall image on left, spans both rows on tablet */}
 <Reveal className="sm:row-span-2 lg:row-span-2">
 <div className="relative h-full min-h-[300px] sm:min-h-[480px] lg:min-h-[560px] rounded-3xl overflow-hidden glass shadow-glass">
 <Image
 src="/images/website/30_lifestyle_banner.jpg"
 alt="HomePhysio lifestyle — patient enjoying a morning walk after recovery"
 fill
 sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 33vw"
 className="object-cover"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-primary-900/85 via-primary-900/20 to-transparent" />
 <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 text-white">
 <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/15 backdrop-blur-md mb-3">
 <Icon.star size={20} />
 </div>
 <div className="font-display text-xl sm:text-2xl font-semibold leading-snug text-balance">
 Recovery that gets you back to life.
 </div>
 <p className="text-sm text-cyan-100 mt-2 leading-relaxed">
 Our goal isn&apos;t pain relief — it&apos;s your morning walk, your child&apos;s piggyback, your cricket on Sundays.
 </p>
 </div>
 </div>
 </Reveal>

 {/* Booking welcome - small image with stats */}
 <Reveal>
 <div className="relative h-full min-h-[220px] rounded-3xl overflow-hidden glass shadow-glass">
 <Image
 src="/images/website/31_booking_welcome.jpg"
 alt="Welcoming reception area at HomePhysio"
 fill
 sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
 className="object-cover"
 />
 <div className="absolute inset-0 bg-gradient-to-br from-accent-700/85 via-accent-700/40 to-transparent" />
 <div className="relative h-full p-5 sm:p-6 text-white flex flex-col justify-end">
 <div className="flex items-center gap-2 mb-2">
 <Icon.clock size={16} className="text-cyan-200" />
 <span className="text-xs uppercase tracking-wider font-semibold text-cyan-200">
 Open today
 </span>
 </div>
 <div className="font-display text-2xl sm:text-3xl font-semibold tabular-nums">
 8 AM &ndash; 9 PM
 </div>
 <div className="text-sm text-cyan-100 mt-1">All 7 days · Walk-ins welcome</div>
 </div>
 </div>
 </Reveal>

 {/* Contact entrance - address card */}
 <Reveal>
 <div className="relative h-full min-h-[220px] rounded-3xl overflow-hidden glass shadow-glass">
 <Image
 src="/images/website/32_contact_entrance.jpg"
 alt="Entrance to the HomePhysio clinic"
 fill
 sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
 className="object-cover"
 />
 <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/65 to-primary-900/30" />
 <div className="relative h-full p-5 sm:p-6 text-white flex flex-col justify-between">
 <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/15 backdrop-blur-md">
 <Icon.mapPin size={20} />
 </div>
 <div>
 <div className="text-xs uppercase tracking-wider font-semibold text-cyan-200">
 Address
 </div>
 <div className="font-display text-base sm:text-lg font-semibold mt-1 leading-snug">
 HomePhysio, Plot 12, Above City Care Pharmacy, Cidco N-7, Chhatrapati Sambhajinagar 431003
 </div>
 <div className="mt-4 flex flex-wrap gap-2">
 <a
 href="tel:+919561998544"
 className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs font-semibold px-3 py-2 min-h-[44px] hover:bg-white/25"
 >
 <Icon.phone size={12} />
 Call
 </a>
 <button
 onClick={() => openWhatsApp({ source: "location-section" })}
 className="inline-flex items-center gap-1.5 rounded-full bg-white text-accent-700 text-xs font-semibold px-3 py-2 min-h-[44px] hover:scale-105 transition-transform"
 >
 <Icon.whatsapp size={12} />
 Directions
 </button>
 </div>
 </div>
 </div>
 </div>
 </Reveal>
 </Stagger>
 </div>
 </section>
 );
}