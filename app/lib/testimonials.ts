export interface Testimonial {
 id: string;
 name: string;
 area: string;
 condition: string;
 quote: string;
 rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
 {
 id: "t1",
 name: "Anita Joshi",
 area: "CIDCO N-7",
 condition: "Post-knee replacement",
 quote: "After my TKR I couldn't climb stairs. The home-visit team came with a full setup — three weeks in I was back to morning walks. Polite, on-time, and very professional.",
 rating: 5,
 },
 {
 id: "t2",
 name: "Suresh Patil",
 area: "Garkheda",
 condition: "Stroke recovery",
 quote: "My father had a stroke and the right side was weak. The neuro team visited daily, taught my mother simple exercises, and we saw real movement in two months. Worth every rupee.",
 rating: 5,
 },
 {
 id: "t3",
 name: "Pooja Deshmukh",
 area: "Osmanpura",
 condition: "Lower back pain (slip disc)",
 quote: "I was scared of surgery. Six weeks of McKenzie + core work, and I'm back at the gym. They explained everything — no scary jargon, no pressure.",
 rating: 5,
 },
 {
 id: "t4",
 name: "Ramesh Kulkarni",
 area: "Jalna Road",
 condition: "Frozen shoulder",
 quote: "Six months of pain and one cream after another. Then CrownPhysio — manual therapy and a home plan. 80% range back in four weeks. Highly recommend the home-visit option.",
 rating: 5,
 },
 {
 id: "t5",
 name: "Meera Kulkarni",
 area: "Cantonment",
 condition: "Pre-natal back pain",
 quote: "Pregnancy back pain was ruining my sleep. The tele sessions were a lifesaver — I could do the exercises at home after a long day. Gentle and very knowledgeable.",
 rating: 5,
 },
 {
 id: "t6",
 name: "Vijay Deshpande",
 area: "Nirala Bazaar",
 condition: "Sports injury (ACL)",
 quote: "Surgery in Pune, rehab in Sambhajinagar. The team coordinated with my surgeon and got me running again in 5 months. Real, measurable progress.",
 rating: 5,
 },
];
