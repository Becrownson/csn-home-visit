"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import type { LeadPayload } from "../lib/wa";

interface LeadModalState {
 open: boolean;
 preset?: LeadPayload;
}

interface LeadModalContextValue extends LeadModalState {
 openLead: (preset?: LeadPayload) => void;
 closeLead: () => void;
}

const LeadModalContext = createContext<LeadModalContextValue | null>(null);

export function LeadModalProvider({ children }: { children: ReactNode }) {
 const [state, setState] = useState<LeadModalState>({ open: false });

 const openLead = useCallback((preset?: LeadPayload) => {
 setState({ open: true, preset });
 }, []);

 const closeLead = useCallback(() => {
 setState((s) => ({ ...s, open: false }));
 }, []);

 return (
 <LeadModalContext.Provider value={{ ...state, openLead, closeLead }}>
 {children}
 </LeadModalContext.Provider>
 );
}

export function useLeadModal() {
 const ctx = useContext(LeadModalContext);
 if (!ctx) throw new Error("useLeadModal must be used within LeadModalProvider");
 return ctx;
}
