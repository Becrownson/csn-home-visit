export interface Service {
 id: string;
 title: string;
 blurb: string;
 tags: string[];
 icon: "home" | "clinic" | "tele" | "neuro" | "sport" | "women" | "senior" | "surgery";
}

export const SERVICES: Service[] = [
 {
 id: "home-visit",
 title: "Home-visit Physiotherapy",
 blurb: "Recover in the comfort of your home. Our licensed physios bring clinic-grade care to your doorstep — equipment, exercise plan, and progress tracking included.",
 tags: ["Doorstep", "Citywide", "Geriatric-friendly"],
 icon: "home",
 },
 {
 id: "in-clinic",
 title: "In-clinic Sessions",
 blurb: "Visit our Chhatrapati Sambhajinagar clinic for electrotherapy, manual therapy, and supervised rehabilitation with full gym-grade equipment.",
 tags: ["Electrotherapy", "Manual therapy", "Strength gym"],
 icon: "clinic",
 },
 {
 id: "tele",
 title: "Tele Physiotherapy",
 blurb: "Live video sessions with a senior physio. Perfect for follow-ups, exercise corrections, and second opinions — anywhere in India.",
 tags: ["Video call", "Exercise plan", "Follow-ups"],
 icon: "tele",
 },
 {
 id: "neuro",
 title: "Neuro & Stroke Rehab",
 blurb: "Specialised Bobath & PNF approaches for stroke, Parkinson's, and post-neurosurgery recovery. Family caregiver coaching included.",
 tags: ["Bobath", "PNF", "Stroke"],
 icon: "neuro",
 },
 {
 id: "sports",
 title: "Sports Injury Recovery",
 blurb: "Return-to-play protocols for ACL, rotator cuff, tennis elbow, runner's knee, and ankle sprains. Sport-specific strength and agility work.",
 tags: ["ACL rehab", "Rotator cuff", "Runners"],
 icon: "sport",
 },
 {
 id: "women",
 title: "Women's Health",
 blurb: "Pre/post-natal physiotherapy, diastasis recti, pelvic floor rehabilitation, and osteoporosis programs — discreet and evidence-based.",
 tags: ["Pre-natal", "Pelvic floor", "Post-natal"],
 icon: "women",
 },
 {
 id: "senior",
 title: "Senior Care",
 blurb: "Fall-prevention, balance retraining, and arthritis management. Gentle, paced programs that respect your energy and independence.",
 tags: ["Falls", "Balance", "Arthritis"],
 icon: "senior",
 },
 {
 id: "surgery",
 title: "Post-surgery Recovery",
 blurb: "Joint replacements, fracture fixations, and spine surgeries — staged rehab with milestone-based progression and surgeon coordination.",
 tags: ["TKR/THR", "Spine", "Fractures"],
 icon: "surgery",
 },
];
