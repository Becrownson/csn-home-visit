import type { Config } from "tailwindcss";

const config: Config = {
 content: [
 "./app/**/*.{ts,tsx}",
 ],
 theme: {
 extend: {
 colors: {
 // UI/UX Pro Max — Liquid Glass / Healthcare
 primary: {
 DEFAULT: "#0891B2", // cyan-600
 50: "#ECFEFF",
 100: "#CFFAFE",
 200: "#A5F3FC",
 300: "#67E8F9",
 400: "#22D3EE",
 500: "#06B6D4",
 600: "#0891B2",
 700: "#0E7490",
 800: "#155E75",
 900: "#164E63",
 },
 accent: {
 DEFAULT: "#059669", // emerald-600
 50: "#ECFDF5",
 100: "#D1FAE5",
 200: "#A7F3D0",
 300: "#6EE7B7",
 400: "#34D399",
 500: "#10B981",
 600: "#059669",
 700: "#047857",
 800: "#065F46",
 900: "#064E3B",
 },
 ink: {
 DEFAULT: "#164E63",
 muted: "#475569",
 subtle: "#64748B",
 },
 },
 fontFamily: {
 sans: ["var(--font-body)", "system-ui", "sans-serif"],
 display: ["var(--font-display)", "system-ui", "sans-serif"],
 },
 borderRadius: {
 glass: "1.25rem",
 },
 backdropBlur: {
 glass: "20px",
 },
 boxShadow: {
 glass: "0 8px 32px 0 rgba(8, 145, 178, 0.12)",
 cta: "0 10px 30px -8px rgba(5, 150, 105, 0.5)",
 },
 transitionTimingFunction: {
 expo: "cubic-bezier(0.16, 1, 0.3, 1)",
 },
 },
 },
 plugins: [],
};

export default config;
