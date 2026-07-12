import type { PolygraphResult } from "./polygraph-schema";

const flags = [
  ["humbled", "I am pleased with this achievement and want to share it.", "high"],
  ["honoured", "This matters to me and sounds impressive.", "medium"],
  ["thrilled to announce", "I have news and want your attention.", "high"],
  ["excited to share", "Here is my announcement.", "medium"],
  ["new chapter", "I changed jobs or started something new.", "medium"],
  ["grateful", "I appreciate the people who helped.", "low"],
  ["personal milestone", "I achieved something important to me.", "medium"],
  ["small win", "This win is important enough to post publicly.", "high"],
  ["delighted", "I am happy about this.", "low"],
  ["incredible journey", "The process took time and effort.", "medium"],
  ["dream come true", "I wanted this for a long time.", "medium"],
  ["blessed", "I feel fortunate.", "low"],
  ["beyond excited", "I am extremely excited.", "high"],
  ["just wanted to share", "I want to share this.", "medium"],
  ["proud to announce", "I achieved something and want people to know.", "high"],
] as const;

export function analyseLocally(text: string, savage = false): PolygraphResult {
  const lower = text.toLowerCase();
  const detected = flags.filter(([phrase]) => lower.includes(phrase)).slice(0, 5);
  const exclamations = (text.match(/!/g) || []).length;
  const score = Math.min(96, 12 + detected.reduce((n, [, , s]) => n + (s === "high" ? 17 : s === "medium" ? 11 : 7), 0) + exclamations * 3);
  const corporate = Math.min(100, Math.round(score * .75 + (lower.match(/journey|chapter|synergy|learnings|impact/g)?.length || 0) * 8));
  const realMeaning = detected.length
    ? detected.map(([, translation]) => translation).slice(0, 2).join(" ")
    : "You have professional news or an idea and would like your network to see it.";
  let honest = text
    .replace(/\b(I(?:’|')m )?(humbled and honoured|humbled|honoured) to (announce|share) that\s*/gi, "")
    .replace(/\b(beyond )?(thrilled|excited|delighted) to (announce|share) that\s*/gi, "")
    .replace(/\b(just wanted to share|new chapter|incredible journey|dream come true)\b/gi, (m) => m.toLowerCase() === "new chapter" ? "new role" : "")
    .replace(/\s{2,}/g, " ").trim();
  if (!honest) honest = "I have an update I’m happy to share.";
  honest = honest[0].toUpperCase() + honest.slice(1);
  return {
    humbleBragScore: score,
    corporateSpeakScore: corporate,
    authenticityScore: Math.max(8, 100 - Math.round((score + corporate) / 2)),
    verdict: score >= 75 ? "Full humble-brag" : score >= 50 ? "Corporate theatre" : score >= 25 ? "Mildly polished" : "Mostly authentic",
    realMeaning,
    savageComment: savage
      ? (score > 55 ? "The announcement arrived wearing a modesty costume and carrying its own applause sign." : "Suspiciously normal. Your personal brand manager may request revisions.")
      : (score > 55 ? "A worthy update with a generous coat of professional-network polish." : "Clear, human, and refreshingly low on ceremony."),
    honestRewrite: honest,
    detectedPhrases: detected.map(([phrase, translation, severity]) => ({ phrase, translation, severity })),
  };
}
