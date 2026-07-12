import type { CareerActivity, CareerCategory, CareerPlantState } from "./types";
const categories:CareerCategory[]=["ai","frontend","backend","product","research"];
const clamp=(n:number,min=0,max=100)=>Math.max(min,Math.min(max,n));
export function calculateCareerPlant(activity:CareerActivity):CareerPlantState{
  const weights=Object.fromEntries(categories.map(c=>[c,0])) as Record<CareerCategory,number>;
  activity.completedProjects.forEach(p=>weights[p.category]+=p.significance*3);
  activity.skills.forEach(s=>{if(categories.includes(s.category as CareerCategory))weights[s.category as CareerCategory]+=1+s.evidenceCount+(s.verified?2:0)});
  const dominantCategory=categories.reduce((a,b)=>weights[b]>weights[a]?b:a,"ai");
  const branchCount=clamp(activity.completedProjects.length,1,8);
  const leafCount=clamp(activity.skills.length+Math.floor(activity.helpfulPosts/3),0,16);
  const verifiedLeafCount=Math.min(leafCount,activity.skills.filter(s=>s.verified).length);
  const verifiedEndorsements=activity.endorsements.filter(e=>e.verified).length;
  const rootStrength=clamp(activity.endorsements.length*8+verifiedEndorsements*9+activity.skills.reduce((n,s)=>n+s.evidenceCount,0),0,100);
  const flowerCount=clamp(activity.achievements.filter(a=>a.significance>=2).length,0,6);
  const sproutCount=clamp(Math.ceil(activity.connectionGrowth/8),0,7);
  const healthScore=clamp(Math.round(28+activity.learningDaysLast30*1.8+activity.helpfulPosts*1.4+verifiedLeafCount*3+Math.min(rootStrength,40)*.25));
  const points=activity.completedProjects.reduce((n,p)=>n+p.significance*7,0)+activity.skills.length*4+activity.achievements.length*8+Math.min(25,activity.learningDaysLast30);
  const overallLevel=(points<22?1:points<45?2:points<70?3:points<100?4:5) as 1|2|3|4|5;
  const status=overallLevel===1?"seedling":overallLevel===2?"growing":overallLevel===3?"branching":overallLevel===4?"blooming":"thriving";
  return {overallLevel,healthScore,branchCount,leafCount,verifiedLeafCount,rootStrength,flowerCount,sproutCount,dominantCategory,status};
}
