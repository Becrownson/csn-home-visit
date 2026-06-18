"use client";

import Image from "next/image";
import { Reveal } from "./motion/Reveal";
import { Stagger } from "./motion/Stagger";
import { Icon } from "./Icon";
import { openWhatsApp } from "../lib/wa";

const VALUES = [
 {
 icon: "check" as const,
 title: "Evidence-based",
 body: "Every protocol we use is grounded in current peer-reviewed research and adapted to your specific condition.",
 },
 {
 icon: "home" as const,
 title: "Care where you are",
 body: "Whether at home, in clinic, or via video — we bring the same standard of professional care to you.",
 },
 {
 icon: "clock" as const,
 title: "Same-day slots",
 body: "Pain doesn't wait. We confirm most bookings within minutes and offer same-day visits across Sambhajinagar.",
 },
];

export function About() {
 return (
 <section id="about" className="section">
 <div className="container-page">
 <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-center">
 {/* Left: founder portrait + facility collage */}
 <Reveal className="lg:col-span-3">
 <div className="grid grid-cols-2 gap-3 sm:gap-4">
 {/* Founder portrait — large hero tile */}
 <div className="col-span-2 sm:col-span-2 lg:col-span-2 relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5] rounded-3xl overflow-hidden glass shadow-glass">
 <Image
 src="/images/website/05_founder_portrait.jpg"
 alt="Lead physiotherapist and founder of CrownPhysio"
 fill
 sizes="(max-width: 640px) 90vw, (max-width: 1024px) 60vw, 45vw"
 className="object-cover"
 priority
 />
 <div className="absolute inset-0 bg-gradient-to-t from-primary-900/75 via-primary-900/10 to-transparent" />
 <div className="absolute bottom-4 left-4 right-4 text-white">
 <div className="text-[10px] sm:text-xs uppercase tracking-wider text-cyan-200 font-semibold">
 Lead physiotherapist
 </div>
 <div className="font-display text-lg sm:text-xl font-semibold mt-0.5">
 Dr. Aarti Deshpande, MPT
 </div>
 <div className="text-xs sm:text-sm text-cyan-100 mt-0.5 leading-snug">
 Neuro & Sports · 20+ years · Licensed IAP member
 </div>
 </div>
 </div>

 {/* Recovery results banner — full width below portrait */}
 <div className="col-span-2 relative aspect-[16/9] sm:aspect-[16/8] rounded-3xl overflow-hidden glass shadow-glass">
 <Image
 src="/images/website/24_process_recovery.jpg"
 alt="Patient making excellent recovery progress under physiotherapy care"
 fill
 sizes="(max-width: 640px) 90vw, 60vw"
 className="object-cover"
 />
 </div>

 {/* Team members — two side by side */}
 <div className="relative aspect-square rounded-3xl overflow-hidden glass shadow-glass">
 <Image
 src="/images/website/33_team_member_1.jpg"
 alt="CrownPhysio senior physiotherapist"
 fill
 sizes="(max-width: 640px) 45vw, 30vw"
 className="object-cover"
 />
 </div>
 <div className="relative aspect-square rounded-3xl overflow-hidden glass shadow-glass">
 <Image
 src="/images/website/34_team_member_2.jpg"
 alt="CrownPhysio sports and rehab specialist"
 fill
 sizes="(max-width: 640px) 45vw, 30vw"
 className="object-cover"
 />
 </div>
 </div>
 </Reveal>

 {/* Right: copy */}
 <div className="lg:col-span-2">
 <Reveal>
 <span className="eyebrow">About CrownPhysio</span>
 <h2 className="h-section mt-3">Twenty years of hands-on healing, in your city.</h2>
 <p className="p-section mt-4">
 We started in 2004 with one clinic and one promise — that every patient in Chhatrapati Sambhajinagar deserves hospital-grade physiotherapy without the hospital bill. Today our team of seven licensed therapists treats over 350 patients a year, across every neighbourhood from CIDCO to Cantonment.
 </p>
 </Reveal>

 <Stagger className="mt-8 space-y-4" stagger={0.1}>
 {VALUES.map((v) => {
 const I = (Icon as any)[v.icon] as React.FC<{ size?: number; className?: string }>;
 return (
 <div key={v.title} className="flex items-start gap-4">
 <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 text-white flex-shrink-0">
 <I size={20} />
 </div>
 <div>
 <h3 className="font-display text-base sm:text-lg font-semibold text-primary-900">
 {v.title}
 </h3>
 <p className="text-sm text-ink-muted mt-1 leading-relaxed">{v.body}</p>
 </div>
 </div>
 );
 })}
 </Stagger>

 <Reveal delay={0.2}>
 <button
 onClick={() => openWhatsApp({ source: "about-section" })}
 className="mt-8 btn-secondary"
 >
 Talk to our team
 <Icon.arrow size={16} />
 </button>
 </Reveal>
 </div>
 </div>
 </div>
 </section>
 );
}