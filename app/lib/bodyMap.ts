export interface BodyRegion {
 id: string;
 title: string;
 /** BodyMap hotspot: x/y are percentages of the silhouette's bounding box. */
 x: number;
 y: number;
 conditions: string[];
 approach: string;
}

export const REGIONS: BodyRegion[] = [
 {
 id: "head",
 title: "Head & TMJ",
 x: 50,
 y: 8,
 conditions: ["Tension headaches", "Cervicogenic dizziness", "TMJ dysfunction", "Migraine support"],
 approach: "Manual therapy to suboccipitals, TMJ mobilisation, postural correction, and relaxation protocols.",
 },
 {
 id: "neck",
 title: "Neck & Cervical",
 x: 50,
 y: 17,
 conditions: ["Neck pain", "Cervical spondylosis", "Whiplash", "Stiffness"],
 approach: "McKenzie protocol, deep neck flexor strengthening, ergonomic retraining, and manual mobilisation.",
 },
 {
 id: "shoulder",
 title: "Shoulder",
 x: 24,
 y: 25,
 conditions: ["Frozen shoulder", "Rotator cuff tear", "Impingement", "Dislocation rehab"],
 approach: "Joint mobilisations, scapular control drills, progressive loading, and rotator cuff strengthening.",
 },
 {
 id: "back",
 title: "Back & Spine",
 x: 50,
 y: 34,
 conditions: ["Lower back pain", "Slip disc", "Sciatica", "Spondylitis", "Posture"],
 approach: "McKenzie, core stabilisation, neurodynamic gliding, and graded functional restoration.",
 },
 {
 id: "elbow",
 title: "Elbow & Wrist",
 x: 19,
 y: 38,
 conditions: ["Tennis elbow", "Golfer's elbow", "Carpal tunnel", "Wrist sprain"],
 approach: "Eccentric loading, neural mobilisations, ergonomic advice, and grip strengthening.",
 },
 {
 id: "hip",
 title: "Hip & Pelvis",
 x: 50,
 y: 47,
 conditions: ["Hip arthritis", "Sacroiliac pain", "Piriformis syndrome", "Post-THR"],
 approach: "Hip mobility drills, gluteal activation, gait retraining, and post-THR protocols.",
 },
 {
 id: "knee",
 title: "Knee",
 x: 50,
 y: 64,
 conditions: ["Knee pain", "ACL rehab", "Runner's knee", "Post-TKR"],
 approach: "Quadriceps re-education, patellar mobilisation, balance work, and sport-specific progression.",
 },
 {
 id: "ankle",
 title: "Ankle & Foot",
 x: 50,
 y: 88,
 conditions: ["Heel pain", "Plantar fasciitis", "Ankle sprain", "Achilles tendinitis"],
 approach: "Calf eccentric loading, proprioceptive drills, taping, and footwear assessment.",
 },
];

export function getRegion(id: string): BodyRegion | undefined {
 return REGIONS.find((r) => r.id === id);
}
