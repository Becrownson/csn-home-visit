import type { VisitType } from "./wa";

/** Per-session base rates (₹). Brief: home 1499, clinic 899, tele 599. */
export const PRICE: Record<VisitType, number> = {
 home: 1499,
 clinic: 899,
 tele: 599,
};

export interface DiscountTier {
 /** Minimum sessions to qualify. */
 min: number;
 /** Percent off (0-100). */
 pct: number;
 /** Human label for the badge. */
 label: string;
}

/** Brief: 3+ → 5%, 6+ → 12%, 12+ → 18%, 24 → 22%. */
export const TIERS: DiscountTier[] = [
 { min: 24, pct: 22, label: "Save 22%" },
 { min: 12, pct: 18, label: "Save 18%" },
 { min: 6, pct: 12, label: "Save 12%" },
 { min: 3, pct: 5, label: "Save 5%" },
];

export function discountFor(sessions: number): DiscountTier | null {
 return TIERS.find((t) => sessions >= t.min) ?? null;
}

export function perSession(visitType: VisitType, sessions: number): number {
 const base = PRICE[visitType];
 const tier = discountFor(sessions);
 if (!tier) return base;
 return Math.round(base * (1 - tier.pct / 100));
}

export function packageTotal(visitType: VisitType, sessions: number): number {
 return perSession(visitType, sessions) * sessions;
}

const INR = new Intl.NumberFormat("en-IN", {
 style: "currency",
 currency: "INR",
 maximumFractionDigits: 0,
});

export function formatINR(n: number): string {
 return INR.format(n);
}
