// Single source of truth for WhatsApp contact.
// Brief: +91 95619 98544 → wa.me/919561998544
export const WHATSAPP_NUMBER = "919561998544";
export const PHONE_DISPLAY = "+91 95619 98544";
export const EMAIL = "Crownphysio@gmail.com";

export type VisitType = "home" | "clinic" | "tele";

export interface LeadPayload {
 name?: string;
 phone?: string;
 area?: string;
 visitType?: VisitType;
 condition?: string;
 note?: string;
 source?: string;
}

const VISIT_LABEL: Record<VisitType, string> = {
 home: "Home visit",
 clinic: "Clinic visit",
 tele: "Tele consultation",
};

/** Compose a pre-filled WhatsApp message and return the wa.me URL. */
export function buildWaUrl(payload: LeadPayload): string {
 const lines = ["Namaste Crownphysio 🙏", "I'd like to book a physiotherapy session."];
 if (payload.name) lines.push(`Name: ${payload.name}`);
 if (payload.phone) lines.push(`Phone: ${payload.phone}`);
 if (payload.area) lines.push(`Area: ${payload.area}`);
 if (payload.visitType) lines.push(`Visit type: ${VISIT_LABEL[payload.visitType]}`);
 if (payload.condition) lines.push(`Condition: ${payload.condition}`);
 if (payload.note) lines.push(`Note: ${payload.note}`);
 if (payload.source) lines.push(`(via ${payload.source})`);
 return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
}

/** Open the WhatsApp chat in a new tab. */
export function openWhatsApp(payload: LeadPayload = {}): void {
 if (typeof window === "undefined") return;
 window.open(buildWaUrl(payload), "_blank", "noopener,noreferrer");
}
