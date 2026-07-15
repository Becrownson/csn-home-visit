"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./motion/Reveal";
import { TESTIMONIALS } from "../lib/testimonials";
import { Icon } from "./Icon";

export function Testimonials() {
	const reduce = useReducedMotion();
	const trackRef = useRef<HTMLDivElement | null>(null);
	const [index, setIndex] = useState(0);
	const [count, setCount] = useState(1);
	const [cardW, setCardW] = useState(340);

	useEffect(() => {
		const update = () => {
			if (!trackRef.current) return;
			const w = trackRef.current.clientWidth;
			const step = window.innerWidth < 640 ? 320 : 360;
			setCount(Math.max(1, Math.round(w / step)));
			setCardW(window.innerWidth < 640 ? 300 : 340);
		};
		update();
		window.addEventListener("resize", update);
		return () => window.removeEventListener("resize", update);
	}, []);

	const max = Math.max(0, TESTIMONIALS.length - count);
	const next = () => setIndex((i) => Math.min(i + 1, max));
	const prev = () => setIndex((i) => Math.max(i - 1, 0));
	const step = cardW + 20;

	return (
	<section id="testimonials" className="section">
		<div className="container-page">
			<Reveal>
				<div className="flex items-end justify-between gap-4 mb-10">
					<div>
						<span className="eyebrow">Real stories</span>
						<h2 className="h-section mt-3">Patients who got their life back</h2>
					</div>
					<div className="hidden sm:flex gap-2">
						<button
							onClick={prev}
							disabled={index === 0}
							aria-label="Previous testimonials"
							className="grid h-11 w-11 place-items-center rounded-full bg-white border border-primary-200 text-primary-700 disabled:opacity-40 hover:bg-primary-50"
						>
							←
						</button>
						<button
							onClick={next}
							disabled={index === max}
							aria-label="Next testimonials"
							className="grid h-11 w-11 place-items-center rounded-full bg-accent-600 text-white disabled:opacity-40 hover:bg-accent-700 shadow-cta"
						>
							→
						</button>
					</div>
				</div>
			</Reveal>

			<motion.div
				ref={trackRef}
				className="overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8"
			>
				<motion.div
					className="flex gap-5 px-4 sm:px-6 lg:px-8 cursor-grab active:cursor-grabbing"
					drag={reduce ? false : "x"}
					dragConstraints={reduce ? undefined : { left: -(max * step), right: 0 }}
					dragElastic={0.1}
					animate={{ x: reduce ? 0 : -index * step }}
					transition={{ type: "spring", stiffness: 220, damping: 26 }}
					onDragEnd={(_, info) => {
						const threshold = 80;
						if (info.offset.x < -threshold) next();
						else if (info.offset.x > threshold) prev();
					}}
				>
					{TESTIMONIALS.map((t) => (
						<article
							key={t.id}
							className="glass rounded-glass overflow-hidden min-w-[300px] sm:min-w-[340px] max-w-[340px] flex-shrink-0 flex flex-col"
						>
							{/* Portrait */}
							<div className="relative aspect-[4/3] w-full bg-gradient-to-br from-primary-100 to-accent-100">
								<Image
									src={t.image}
									alt={t.imageAlt}
									fill
									sizes="340px"
									className="object-cover"
								/>
							</div>

							{/* Body */}
							<div className="p-5 lg:p-6 flex-1 flex flex-col">
								<div className="flex gap-0.5 text-accent-500 mb-3" aria-label={`${t.rating} stars`}>
									{Array.from({ length: t.rating }).map((_, i) => (
										<Icon.star key={i} size={16} />
									))}
								</div>
								<p className="text-sm lg:text-base text-ink leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
								<div className="mt-5 pt-4 border-t border-primary-100">
									<div className="font-semibold text-primary-900">{t.name}</div>
									<div className="text-xs text-ink-muted mt-0.5">{t.area} · {t.condition}</div>
								</div>
							</div>
						</article>
					))}
				</motion.div>
			</motion.div>

			{/* Dots */}
			<div className="mt-6 flex justify-center gap-2">
				{Array.from({ length: max + 1 }).map((_, i) => (
					<button
						key={i}
						onClick={() => setIndex(i)}
						aria-label={`Go to slide ${i + 1}`}
						className={`h-1.5 rounded-full transition-all duration-200 ${
							i === index ? "w-8 bg-accent-600" : "w-1.5 bg-primary-300"
						}`}
					/>
				))}
			</div>
		</div>
	</section>
	);
}
