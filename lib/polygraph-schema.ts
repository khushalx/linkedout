import { z } from "zod";

export const polygraphResultSchema = z.object({
  humbleBragScore: z.number().int().min(0).max(100),
  corporateSpeakScore: z.number().int().min(0).max(100),
  authenticityScore: z.number().int().min(0).max(100),
  verdict: z.string().min(1).max(160),
  realMeaning: z.string().min(1).max(600),
  savageComment: z.string().min(1).max(400),
  honestRewrite: z.string().min(1).max(2000),
  detectedPhrases: z.array(z.object({
    phrase: z.string().min(1),
    translation: z.string().min(1),
    severity: z.enum(["low", "medium", "high"]),
  })).max(5),
});

export type PolygraphResult = z.infer<typeof polygraphResultSchema>;

export const aiRequestSchema = z.object({
  feature: z.literal("polygraph"),
  data: z.object({ text: z.string().trim().min(25).max(5000), savageMode: z.boolean() }),
});
