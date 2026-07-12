"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, BriefcaseBusiness, Home, MessageSquare, Search, Users } from "lucide-react";
import { Avatar } from "@/components/shared/avatar";

const nav = [
  ["Home", "/feed", Home], ["My Network", "/network", Users], ["Jobs", "/jobs", BriefcaseBusiness],
  ["Messaging", "/messages", MessageSquare], ["Notifications", "/notifications", Bell],
] as const;

export function Logo() { return <Link href="/feed" aria-label="LinkedOut home" className="grid h-[35px] w-[35px] place-items-center rounded-[7px] bg-[#0A66C2] text-[15px] font-black tracking-[-1px] text-white">LO</Link>; }

export function TopNavbar() {
  const path = usePathname();
  return <header className="sticky top-0 z-40 h-[53px] border-b border-[#e0dfdc] bg-white">
    <div className="shell flex h-full items-center gap-2 px-3 md:px-0">
      <Logo />
      <label className="relative ml-1 hidden w-[310px] md:block">
        <span className="sr-only">Search LinkedOut</span><Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#444]" />
        <input className="h-[36px] w-full rounded-[5px] bg-[#edf3f8] pl-10 pr-3 text-[13px] transition-all focus:w-[360px] focus:bg-white focus:ring-1 focus:ring-[#191919]" placeholder="Search people, posts and professional excuses" />
      </label>
      <nav aria-label="Primary navigation" className="ml-auto hidden h-full items-stretch sm:flex">
        {nav.map(([label,href,Icon]) => { const active=path===href; return <Link key={href} href={href} className={`relative flex min-w-[75px] flex-col items-center justify-center gap-[1px] text-[11px] transition-colors hover:text-[#191919] ${active?"text-[#191919]":"text-[#666]"}`}>
          <span className="relative"><Icon size={21} strokeWidth={active?2.3:1.8}/>{label==="Notifications"&&<b className="absolute -right-2 -top-1 rounded-full bg-[#B24020] px-[5px] text-[9px] text-white">3</b>}</span><span>{label}</span>
          {active&&<span className="absolute bottom-0 h-[2px] w-[70px] bg-[#191919]"/>}
        </Link>; })}
        <Link href="/profile" className={`ml-1 flex min-w-[68px] flex-col items-center justify-center gap-0 border-l border-[#e0dfdc] text-[11px] ${path==="/profile"?"text-black":"text-[#666]"}`}><Avatar initials="KD" size={23}/><span>Me ▾</span></Link>
      </nav>
      <div className="ml-auto flex items-center gap-3 sm:hidden"><button className="icon-button h-9 w-9" aria-label="Search"><Search size={21}/></button><Link href="/messages"><MessageSquare size={21}/></Link><Link href="/profile"><Avatar initials="KD" size={29}/></Link></div>
    </div>
  </header>;
}
