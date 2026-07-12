export function Avatar({ initials, size = 48, color = "#0A66C2" }: { initials:string; size?:number; color?:string }) {
  return <span className="avatar" style={{ width:size, height:size, background:color, fontSize:size*.32 }} aria-label={`${initials} avatar`}>{initials}</span>;
}
