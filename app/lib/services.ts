export interface Service {
 id: string;
 title: string;
 blurb: string;
 tags: string[];
 icon: "home" | "clinic" | "tele" | "neuro" | "sport" | "women" | "senior" | "surgery";
 image: string;
 imageAlt: string;
}

export const SERVICES: Service[] = [
 {
 id: "home-visit",
 title: "Home-visit Physiotherapy",
 blurb: "Recover in the comfort of your home. Our licensed physios bring clinic-grade care to your doorstep — equipment, exercise plan, and progress tracking included.",
 tags: ["Doorstep", "Citywide", "Geriatric-friendly"],
 icon: "home",
 image: "/images/website/18_service_home_visit.jpg",
 imageAlt: "Therapist providing home-visit physiotherapy to a senior patient",
 },
 {
 id: "in-clinic",
 title: "In-clinic Sessions",
 blurb: "Visit our Chhatrapati Sambhajinagar clinic for electrotherapy, manual therapy, and supervised rehabilitation with full gym-grade equipment.",
 tags: ["Electrotherapy", "Manual therapy", "Strength gym"],
 icon: "clinic",
 image: "/images/website/08_equipment.jpg",
 imageAlt: "Modern physiotherapy clinic with advanced equipment",
 },
 {
 id: "tele",
 title: "Tele Physiotherapy",
 blurb: "Live video sessions with a senior physio. Perfect for follow-ups, exercise corrections, and second opinions — anywhere in India.",
 tags: ["Video call", "Exercise plan", "Follow-ups"],
 icon: "tele",
 image: "/images/website/19_service_tele.jpg",
 imageAlt: "Patient consulting physiotherapist via video call",
 },
 {
 id: "neuro",
 title: "Neuro & Stroke Rehab",
 blurb: "Specialised Bobath & PNF approaches for stroke, Parkinson's, and post-neurosurgery recovery. Family caregiver coaching included.",
 tags: ["Bobath", "PNF", "Stroke"],
 icon: "neuro",
 image: "/images/website/15_service_neuro.jpg",
 imageAlt: "Stroke rehabilitation with specialised neuro physiotherapy",
 },
 {
 id: "sports",
 title: "Sports Injury Recovery",
 blurb: "Return-to-play protocols for ACL, rotator cuff, tennis elbow, runner's knee, and ankle sprains. Sport-specific strength and agility work.",
 tags: ["ACL rehab", "Rotator cuff", "Runners"],
 icon: "sport",
 image: "/images/website/13_service_sports.jpg",
 imageAlt: "Athlete performing sports injury rehabilitation exercises",
 },
 {
 id: "women",
 title: "Women's Health",
 blurb: "Pre/post-natal physiotherapy, diastasis recti, pelvic floor rehabilitation, and osteoporosis programs — discreet and evidence-based.",
 tags: ["Pre-natal", "Pelvic floor", "Post-natal"],
 icon: "women",
 image: "/images/website/17_service_womens_health.jpg",
 imageAlt: "Women's health physiotherapy and pre-natal care",
 },
 {
 id: "senior",
 title: "Senior Care",
 blurb: "Fall-prevention, balance retraining, and arthritis management. Gentle, paced programs that respect your energy and independence.",
 tags: ["Falls", "Balance", "Arthritis"],
 icon: "senior",
 image: "/images/website/16_service_senior.jpg",
 imageAlt: "Senior patient receiving balance and fall-prevention physiotherapy",
 },
 {
 id: "surgery",
 title: "Post-surgery Recovery",
 blurb: "Joint replacements, fracture fixations, and spine surgeries — staged rehab with milestone-based progression and surgeon coordination.",
 tags: ["TKR/THR", "Spine", "Fractures"],
 icon: "surgery",
 image: "/images/website/14_service_post_surgery.jpg",
 imageAlt: "Post-surgery rehabilitation after joint replacement",
 },
 {
 id: "back-pain",
 title: "Back Pain & Spine",
 blurb: "Slip disc, sciatica, spondylitis and chronic lower-back pain — McKenzie, manual therapy and core-strength protocols that get you moving again.",
 tags: ["Slip disc", "Sciatica", "McKenzie"],
 icon: "clinic",
 image: "/images/website/09_service_back_pain.jpg",
 imageAlt: "Back pain and slip disc physiotherapy treatment",
 },
 {
 id: "neck-pain",
 title: "Neck Pain & Posture",
 blurb: "Cervical spondylosis, tech-neck and postural headaches — ergonomic correction, deep neck flexor training and cervical mobilisation.",
 tags: ["Tech-neck", "Spondylosis", "Mobility"],
 icon: "clinic",
 image: "/images/website/10_service_neck.jpg",
 imageAlt: "Neck pain and posture correction physiotherapy",
 },
 {
 id: "knee-pain",
 title: "Knee Pain & Arthritis",
 blurb: "Osteoarthritis, runner's knee, meniscus injuries and post-TKR recovery. Quad strengthening, VMO retraining and gait correction.",
 tags: ["Osteoarthritis", "Runners knee", "TKR"],
 icon: "clinic",
 image: "/images/website/11_service_knee.jpg",
 imageAlt: "Knee pain treatment and arthritis physiotherapy",
 },
 {
 id: "shoulder-pain",
 title: "Shoulder & Upper Limb",
 blurb: "Frozen shoulder, rotator cuff tears and tennis elbow — manual therapy plus progressive loading to restore pain-free overhead motion.",
 tags: ["Frozen shoulder", "Rotator cuff", "Tennis elbow"],
 icon: "clinic",
 image: "/images/website/12_service_shoulder.jpg",
 imageAlt: "Shoulder rehabilitation and frozen shoulder treatment",
 },
 {
 id: "corporate",
 title: "Corporate Wellness",
 blurb: "On-site ergonomics, posture workshops and physiotherapy camps for teams — reduce sick days, boost energy and prevent repetitive-strain injuries.",
 tags: ["Ergonomics", "Workshops", "RSI prevention"],
 icon: "clinic",
 image: "/images/website/20_service_corporate.jpg",
 imageAlt: "Corporate ergonomics and workplace wellness workshop",
 },
];
