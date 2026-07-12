import { Info, Plus } from "lucide-react"; import { news } from "@/lib/mock-data"; import { Avatar } from "@/components/shared/avatar";
const people=[
  {name:"Kabir Malhotra",role:"Data Scientist · Reads the docs",initials:"KM",color:"#486581"},
  {name:"Tara Bose",role:"UX Researcher · Asks why",initials:"TB",color:"#A65A44"},
  {name:"Dev Varma",role:"Indie hacker · 11 open tabs",initials:"DV",color:"#337A65"},
];
export function RightSidebar(){return <aside className="right-sidebar space-y-3">
  <section className="card p-3"><div className="mb-2 flex items-center justify-between"><h2 className="font-semibold">LinkedOut News</h2><Info size={16}/></div>
    <ul>{news.map(([title,meta])=><li key={title}><a href="#" className="group block rounded px-1 py-2 hover:bg-[#f3f3f3]"><p className="relative pl-3 text-[13px] font-semibold leading-[17px] before:absolute before:left-0 before:top-[7px] before:h-1 before:w-1 before:rounded-full before:bg-[#666]">{title}</p><p className="pl-3 pt-1 text-[11px] text-[#777]">{meta}</p></a></li>)}</ul>
  </section>
  <section className="card p-4"><h2 className="mb-4 font-semibold">People you may tolerate</h2>{people.map(p=><div key={p.name} className="mb-4 flex gap-2"><Avatar initials={p.initials} size={42} color={p.color}/><div className="min-w-0"><p className="text-[13px] font-semibold">{p.name}</p><p className="mb-2 text-[11px] leading-4 text-[#666]">{p.role}</p><button className="outline-button flex items-center gap-1 px-3 py-1 text-[12px]"><Plus size={14}/>Connect</button></div></div>)}</section>
  <section className="px-4 text-center text-[11px] leading-5 text-[#777]">About · Accessibility · User Agreement<br/><span className="italic">Professional networking, without the professional theatre.</span><br/><b className="text-[#0A66C2]">LinkedOut</b> © 2026</section>
  </aside>}
