import Groq from "groq-sdk";
import { polygraphResultSchema, type PolygraphResult } from "./polygraph-schema";

export const FALLBACK_GROQ_MODEL = "llama-3.3-70b-versatile";

const SYSTEM_PROMPT = `You are the Humble-Brag Polygraph inside a satirical professional networking application. Analyse professional social-media posts for fake humility, corporate clichés, inflated language, performative gratitude, self-promotion disguised as modesty, meaningless motivational language, and excessive announcement drama. Be witty, perceptive and concise. Frame interpretations as playful readings of writing style, never factual claims about private intentions. Never diagnose conditions, attack protected traits, use slurs, threaten, use explicit sexual content, or mock genuine hardship, layoffs, illness, or grief. When savage mode is false, be playful and gentle. When true, be sharper and funnier but safe and non-abusive. Return valid JSON only with integer scores 0-100 and at most five phrases, matching: {humbleBragScore, corporateSpeakScore, authenticityScore, verdict, realMeaning, savageComment, honestRewrite, detectedPhrases:[{phrase,translation,severity:"low"|"medium"|"high"}]}. Preserve the actual announcement in the honest rewrite while removing corporate theatre.`;

export async function analyseWithGroq(text: string, savageMode: boolean): Promise<PolygraphResult> {
  const client = new Groq({ apiKey: process.env.GROQ_API_KEY });
  const response = await client.chat.completions.create({
    model: process.env.GROQ_MODEL || FALLBACK_GROQ_MODEL,
    temperature: savageMode ? 0.75 : 0.45,
    response_format: { type: "json_object" },
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      { role: "user", content: JSON.stringify({ text, savageMode }) },
    ],
  });
  const content = response.choices[0]?.message?.content;
  if (!content) throw new Error("Empty model response");
  return polygraphResultSchema.parse(JSON.parse(content));
}
