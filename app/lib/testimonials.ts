export interface Testimonial {
 id: string;
 name: string;
 area: string;
 condition: string;
 rating: number;
 quote: string;
 image: string;
 imageAlt: string;
}

export const TESTIMONIALS: Testimonial[] = [
 {
 id: "t1",
 name: "Priya Joshi",
 area: "CIDCO N-7",
 condition: "Post-natal recovery",
 rating: 5,
 quote:
 "After my C-section I couldn't even pick up my baby without pain. CrownPhysio came home for six sessions and within two weeks I was moving freely. Life-changing.",
 image: "/images/website/29_testimonial_young_woman.jpg",
 imageAlt: "Young mother Priya Joshi smiling after post-natal physiotherapy",
 },
 {
 id: "t2",
 name: "Ramesh Kulkarni",
 area: "Garkheda",
 condition: "Knee replacement rehab",
 rating: 5,
 quote:
 "I'm 67 and had a total knee replacement. The home visits were a blessing — same physio, same equipment as the clinic. I'm walking to the temple again.",
 image: "/images/website/27_testimonial_senior.jpg",
 imageAlt: "Senior gentleman Ramesh Kulkarni recovered after knee replacement rehab",
 },
 {
 id: "t3",
 name: "Sneha Patil",
 area: "Osmanpura",
 condition: "Sports injury — ACL",
 rating: 5,
 quote:
 "Tore my ACL playing cricket. Twelve weeks of focused rehab and I was back on the field for the district tournament. The progress tracking was so motivating.",
 image: "/images/website/28_testimonial_athlete.jpg",
 imageAlt: "Young athlete Sneha Patil recovered from ACL injury",
 },
 {
 id: "t4",
 name: "Imran Shaikh",
 area: "Cantonment",
 condition: "Chronic back pain",
 rating: 5,
 quote:
 "Three years of slip disc pain. Two physios, one surgeon, zero relief. Then CrownPhysio in eight sessions. The McKenzie protocol actually worked.",
 image: "/images/website/26_testimonial_professional.jpg",
 imageAlt: "Working professional Imran Shaikh relieved from chronic back pain",
 },
 {
 id: "t5",
 name: "Lata Deshpande",
 area: "Jalna Road",
 condition: "Stroke rehabilitation",
 rating: 5,
 quote:
 "After my father's stroke, we thought he'd never walk again. The neuro team visited us at home for three months. He walked my sister down the aisle.",
 image: "/images/website/25_results_mobility.jpg",
 imageAlt: "Family caregiver Lata Deshpande after father's stroke recovery",
 },
 {
 id: "t6",
 name: "Vikram Mehta",
 area: "Nirala Bazaar",
 condition: "Tele follow-up care",
 rating: 5,
 quote:
 "I travel for work and can't always make it to the clinic. The video sessions are shockingly thorough — form correction, exercise progressions, the works.",
 image: "/images/website/22_process_plan.jpg",
 imageAlt: "Businessman Vikram Mehta benefiting from tele-physiotherapy sessions",
 },
 {
 id: "t7",
 name: "Anjali Kulkarni",
 area: "Satara Parisar",
 condition: "Frozen shoulder",
 rating: 5,
 quote:
 "Six months of frozen shoulder pain, couldn't lift my arm. Manual therapy plus a home exercise plan — full range of motion back in five weeks.",
 image: "/images/website/23_process_therapy.jpg",
 imageAlt: "Anjali Kulkarni recovered from frozen shoulder with manual therapy",
 },
];
