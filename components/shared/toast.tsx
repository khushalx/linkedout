"use client";
import { CheckCircle2, X } from "lucide-react";
export function Toast({message,onClose}:{message:string;onClose:()=>void}){if(!message)return null;return <div role="status" className="toast-in fixed bottom-20 left-1/2 z-[90] flex -translate-x-1/2 items-center gap-2 rounded-lg bg-[#222] px-4 py-3 text-[13px] text-white shadow-xl sm:bottom-6"><CheckCircle2 size={17} className="text-[#69c89d]"/>{message}<button onClick={onClose} aria-label="Dismiss" className="ml-2"><X size={15}/></button></div>}
