import Link from "next/link";
import { Bookmark, CalendarDays, Hash, UsersRound } from "lucide-react";
import { Avatar } from "@/components/shared/avatar";
import { currentUser } from "@/lib/mock-data";

export function LeftSidebar(){
  return <aside className="left-sidebar space-y-2" aria-label="Profile overview">
    <section className="card overflow-hidden text-center">
      <div className="h-[58px] bg-[linear-gradient(135deg,#9bc5e8,#d8e5d2)]" />
      <Link href="/profile" className="-mt-[38px] inline-block"><Avatar initials="KD" size={72}/></Link>
      <div className="border-b border-[#eee] px-3 pb-4 pt-2"><Link href="/profile" className="text-[16px] font-semibold hover:underline">{currentUser.name}</Link><p className="mt-1 text-[12px] leading-[17px] text-[#666]">{currentUser.headline}</p><p className="mt-2 text-[11px] text-[#777]">{currentUser.university}</p></div>
      <div className="border-b border-[#eee] py-2 text-left text-[12px]">
        <Link href="/profile" className="flex justify-between px-3 py-1.5 hover:bg-[#f3f3f3]"><span className="font-medium text-[#666]">Profile viewers</span><b className="text-[#0A66C2]">{currentUser.profileViews}</b></Link>
        <Link href="/profile" className="flex justify-between px-3 py-1.5 hover:bg-[#f3f3f3]"><span className="font-medium text-[#666]">Post impressions</span><b className="text-[#0A66C2]">{currentUser.postImpressions.toLocaleString()}</b></Link>
        <Link href="/network" className="flex justify-between px-3 py-1.5 hover:bg-[#f3f3f3]"><span className="font-medium text-[#666]">Connections</span><b className="text-[#0A66C2]">{currentUser.connections}</b></Link>
      </div>
      <Link href="/profile" className="block px-3 py-3 text-left text-[12px] font-semibold hover:bg-[#f3f3f3]"><Bookmark size={15} className="mr-2 inline"/>Saved items</Link>
    </section>
    <section className="card p-3 text-[12px] font-semibold text-[#0A66C2]">
      {[['Groups',UsersRound],['Events',CalendarDays],['Followed hashtags',Hash]].map(([label,Icon])=><a href="#" key={label as string} className="flex items-center gap-2 rounded px-1 py-2 hover:bg-[#f3f3f3]"><Icon size={15}/>{label as string}</a>)}
    </section>
  </aside>;
}
