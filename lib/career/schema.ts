import { z } from "zod";
export const careerCategorySchema=z.enum(["ai","frontend","backend","product","research"]);
export const careerActivitySchema=z.object({
  completedProjects:z.array(z.object({id:z.string(),name:z.string(),category:careerCategorySchema,completedAt:z.string(),significance:z.union([z.literal(1),z.literal(2),z.literal(3)])})),
  skills:z.array(z.object({id:z.string(),name:z.string(),category:z.string(),verified:z.boolean(),evidenceCount:z.number().int().min(0)})),
  endorsements:z.array(z.object({id:z.string(),skillId:z.string(),verified:z.boolean()})),
  achievements:z.array(z.object({id:z.string(),title:z.string(),date:z.string(),significance:z.union([z.literal(1),z.literal(2),z.literal(3)])})),
  helpfulPosts:z.number().int().min(0),learningDaysLast30:z.number().int().min(0).max(30),connectionGrowth:z.number().int().min(0),
});
export const careerPlantStateSchema=z.object({overallLevel:z.union([z.literal(1),z.literal(2),z.literal(3),z.literal(4),z.literal(5)]),healthScore:z.number().min(0).max(100),branchCount:z.number().int(),leafCount:z.number().int(),verifiedLeafCount:z.number().int(),rootStrength:z.number().min(0).max(100),flowerCount:z.number().int(),sproutCount:z.number().int(),dominantCategory:careerCategorySchema,status:z.enum(["seedling","growing","branching","blooming","thriving"])});
export const careerGardenerResultSchema=z.object({headline:z.string().min(1).max(120),interpretation:z.string().min(1).max(600),strongestArea:z.string().min(1).max(120),neglectedArea:z.string().min(1).max(120),nextActions:z.array(z.object({title:z.string(),reason:z.string(),difficulty:z.enum(["easy","medium","ambitious"])})).length(3),gardenMetaphor:z.string().min(1).max(240)});
export const careerGardenerRequestSchema=z.object({feature:z.literal("careerGardener"),data:z.object({activity:careerActivitySchema,plantState:careerPlantStateSchema})});
export const growthHistorySchema=z.array(z.object({id:z.string(),date:z.string(),text:z.string(),type:z.enum(["project","skill","verification","endorsement","post","learning"])}));
export type CareerGardenerResult=z.infer<typeof careerGardenerResultSchema>;
