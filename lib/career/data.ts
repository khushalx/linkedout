import type { CareerActivity, GrowthEntry } from "./types";

export const CAREER_ACTIVITY_KEY="linkedout:career-activity:v1";
export const GROWTH_HISTORY_KEY="linkedout:growth-history:v1";

export const defaultCareerActivity:CareerActivity={
  completedProjects:[
    {id:"astroboat",name:"Astroboat",category:"ai",completedAt:"2026-02-14",significance:2},
    {id:"rabbit",name:"Rabbit",category:"ai",completedAt:"2026-04-08",significance:3},
    {id:"life-os",name:"Life OS",category:"product",completedAt:"2026-05-19",significance:2},
    {id:"common-sense",name:"Trial of Common Sense",category:"frontend",completedAt:"2026-06-27",significance:3},
  ],
  skills:[
    {id:"python",name:"Python",category:"ai",verified:true,evidenceCount:4},
    {id:"typescript",name:"TypeScript",category:"frontend",verified:true,evidenceCount:3},
    {id:"nextjs",name:"Next.js",category:"frontend",verified:true,evidenceCount:3},
    {id:"ai-integration",name:"AI Integration",category:"ai",verified:false,evidenceCount:4},
    {id:"product-design",name:"Product Design",category:"product",verified:false,evidenceCount:2},
  ],
  endorsements:[{id:"e1",skillId:"python",verified:true},{id:"e2",skillId:"typescript",verified:true},{id:"e3",skillId:"product-design",verified:false},{id:"e4",skillId:"ai-integration",verified:true}],
  achievements:[{id:"a1",title:"Launched Trial of Common Sense",date:"2026-06-27",significance:3},{id:"a2",title:"Rabbit selected for cohort showcase",date:"2026-04-20",significance:2}],
  helpfulPosts:6,learningDaysLast30:17,connectionGrowth:23,
};
export const defaultGrowthHistory:GrowthEntry[]=[
  {id:"h1",date:"2026-06-27",text:"Flower appeared after launching Trial of Common Sense",type:"project"},
  {id:"h2",date:"2026-06-12",text:"Python leaf verified with project evidence",type:"verification"},
  {id:"h3",date:"2026-05-19",text:"Product branch formed after completing Life OS",type:"project"},
  {id:"h4",date:"2026-04-08",text:"New AI branch formed after completing Rabbit",type:"project"},
];
