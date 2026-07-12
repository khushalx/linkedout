export type CareerCategory = "ai" | "frontend" | "backend" | "product" | "research";
export type CareerActivity = {
  completedProjects: Array<{ id:string; name:string; category:CareerCategory; completedAt:string; significance:1|2|3 }>;
  skills: Array<{ id:string; name:string; category:string; verified:boolean; evidenceCount:number }>;
  endorsements: Array<{ id:string; skillId:string; verified:boolean }>;
  achievements: Array<{ id:string; title:string; date:string; significance:1|2|3 }>;
  helpfulPosts:number; learningDaysLast30:number; connectionGrowth:number;
};
export type CareerPlantState = {
  overallLevel:1|2|3|4|5; healthScore:number; branchCount:number; leafCount:number; verifiedLeafCount:number;
  rootStrength:number; flowerCount:number; sproutCount:number; dominantCategory:CareerCategory;
  status:"seedling"|"growing"|"branching"|"blooming"|"thriving";
};
export type GrowthEntry = { id:string; date:string; text:string; type:"project"|"skill"|"verification"|"endorsement"|"post"|"learning" };
