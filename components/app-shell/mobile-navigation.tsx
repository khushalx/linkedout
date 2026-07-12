"use client";
import Link from "next/link"; import { usePathname } from "next/navigation";
import { Bell, BriefcaseBusiness, Home, MessageSquare, Users } from "lucide-react";
const links=[["Home","/feed",Home],["Network","/network",Users],["Jobs","/jobs",BriefcaseBusiness],["Messages","/messages",MessageSquare],["Alerts","/notifications",Bell]] as const;
export function MobileNavigation(){const path=usePathname();return <nav aria-label="Mobile navigation" className="fixed bottom-0 z-50 flex h-[62px] w-full border-t border-[#ddd] bg-white sm:hidden">{links.map(([label,href,Icon])=><Link key={href} href={href} className={`flex flex-1 flex-col items-center justify-center gap-1 text-[10px] ${path===href?"text-black":"text-[#666]"}`}><Icon size={20} fill={path===href?"currentColor":"none"}/>{label}</Link>)}</nav>}
