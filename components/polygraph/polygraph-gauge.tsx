"use client";
export function PolygraphGauge({score,loading}:{score:number;loading:boolean}){
  const angle=-75+(Math.max(0,Math.min(100,score))/100)*150;
  return <div className="relative mx-auto w-full max-w-[310px]" aria-label={`Humble-brag score ${score} out of 100`}>
    <svg viewBox="0 0 300 170" className="w-full overflow-visible">
      <path d="M35 145 A115 115 0 0 1 265 145" fill="none" stroke="#e7e5e1" strokeWidth="19" strokeLinecap="round"/>
      <path d="M35 145 A115 115 0 0 1 92 46" fill="none" stroke="#057642" strokeWidth="19" strokeLinecap="butt"/>
      <path d="M92 46 A115 115 0 0 1 150 30" fill="none" stroke="#d1a126" strokeWidth="19"/>
      <path d="M150 30 A115 115 0 0 1 208 46" fill="none" stroke="#dc7936" strokeWidth="19"/>
      <path d="M208 46 A115 115 0 0 1 265 145" fill="none" stroke="#B24020" strokeWidth="19"/>
      {[0,25,50,75,100].map((n,i)=>{const a=(-180+i*45)*Math.PI/180;return <line key={n} x1={150+98*Math.cos(a)} y1={145+98*Math.sin(a)} x2={150+109*Math.cos(a)} y2={145+109*Math.sin(a)} stroke="#191919" strokeWidth="2"/>})}
      <g style={{"--needle-angle":`${angle}deg`,transform:`rotate(${angle}deg)`,transformOrigin:"150px 145px",transition:"transform .75s cubic-bezier(.2,.8,.2,1)"} as React.CSSProperties} className={loading?"needle-loading":""}>
        <path d="M150 145 L143 137 L150 48 L157 137 Z" fill="#242424"/><circle cx="150" cy="145" r="13" fill="#191919"/><circle cx="150" cy="145" r="5" fill="#d5d3cf"/>
      </g>
    </svg>
    <div className="-mt-3 grid grid-cols-4 gap-1 text-center text-[9px] font-semibold leading-3 text-[#666]"><span>Authentic</span><span>Mildly<br/>polished</span><span>Corporate<br/>theatre</span><span>Full<br/>humble-brag</span></div>
  </div>
}
