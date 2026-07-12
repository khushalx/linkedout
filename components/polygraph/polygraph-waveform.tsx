export function PolygraphWaveform({loading,score=20}:{loading:boolean;score?:number}){
  const amp=10+score*.15; const points=Array.from({length:25},(_,i)=>`${i*18},${34+Math.sin(i*1.7)*amp*(i%5===0?1.5:.45)}`).join(" ");
  return <div className="relative h-[72px] overflow-hidden rounded border border-[#ded8c9] bg-[#fffdf5]" aria-label="Polygraph waveform">
    <svg width="720" height="72" className={loading?"wave-track":""}>
      <defs><pattern id="grid" width="18" height="18" patternUnits="userSpaceOnUse"><path d="M18 0H0V18" fill="none" stroke="#d7d0bd" strokeWidth=".6"/></pattern></defs>
      <rect width="720" height="72" fill="url(#grid)"/><line x1="0" y1="35" x2="720" y2="35" stroke="#c4bba6" strokeWidth=".7"/>
      <polyline points={`${points} ${points.split(" ").map(p=>{const [x,y]=p.split(',');return `${Number(x)+450},${y}`}).join(" ")}`} fill="none" stroke="#B24020" strokeWidth="1.7" strokeLinejoin="round"/>
    </svg><span className="absolute left-2 top-1 rounded bg-[#fffdf5]/90 px-1 font-mono text-[8px] text-[#8b7b62]">LO/POLY–01</span>
  </div>
}
