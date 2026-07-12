import type { ProfileSkill,SkillEndorsement } from "./types";import { scoreEndorsement } from "./calculate";
export const ENDORSEMENTS_KEY="linkedout:endorsements:v1";export const ENDORSEMENT_REVIEWS_KEY="linkedout:endorsement-reviews:v1";
export const profileSkills:ProfileSkill[]=[
 {id:"python",name:"Python",category:"AI & backend",profileEvidence:[{type:"project",title:"Rabbit",description:"Built AI evaluation and orchestration logic in Python."},{type:"project",title:"Astroboat",description:"Created analysis utilities and model integrations."}]},
 {id:"typescript",name:"TypeScript",category:"Frontend",profileEvidence:[{type:"project",title:"Trial of Common Sense",description:"Implemented a typed interactive web experience."}]},
 {id:"nextjs",name:"Next.js",category:"Frontend",profileEvidence:[{type:"project",title:"Life OS",description:"Built an App Router product prototype."}]},
 {id:"ai-integration",name:"AI Integration",category:"AI",profileEvidence:[{type:"project",title:"Rabbit",description:"Integrated structured model responses and fallbacks."},{type:"project",title:"Astroboat",description:"Designed an AI-guided navigation experiment."}]},
 {id:"product-design",name:"Product Design",category:"Product",profileEvidence:[{type:"project",title:"Life OS",description:"Designed workflows and a personal-product interaction model."}]},
];
const witnesses=[
 {id:"meera",name:"Meera Iyer",headline:"Growth Lead at Northstar",avatarInitials:"MI",relationship:"worked_together" as const},
 {id:"rohan",name:"Rohan Kapoor",headline:"Software Engineer · Distributed systems",avatarInitials:"RK",relationship:"classmate" as const},
 {id:"ananya",name:"Ananya Mehta",headline:"Product Designer at Daybreak",avatarInitials:"AM",relationship:"worked_together" as const},
 {id:"kabir",name:"Kabir Malhotra",headline:"Data Scientist · Reads the docs",avatarInitials:"KM",relationship:"online_connection" as const},
 {id:"tara",name:"Tara Bose",headline:"UX Researcher · Asks why",avatarInitials:"TB",relationship:"friend" as const},
];
const raw:SkillEndorsement[]=[
 {id:"en1",skillId:"python",candidateId:"khushal",endorser:witnesses[1],submittedAt:"2026-06-12",answers:{personallyObserved:true,projectId:"Rabbit",contributionDescription:"Built the evaluation pipeline and error-handling utilities used during our cohort demo.",evidenceType:"repository",evidenceDescription:"Reviewed the Python modules and pull requests.",confidence:"certain"}},
 {id:"en2",skillId:"python",candidateId:"khushal",endorser:witnesses[3],submittedAt:"2026-05-08",answers:{personallyObserved:false,contributionDescription:"Often discusses Python and seems comfortable using it.",evidenceType:"none",confidence:"supportive_but_unsure"}},
 {id:"en3",skillId:"typescript",candidateId:"khushal",endorser:witnesses[0],submittedAt:"2026-06-29",answers:{personallyObserved:true,projectId:"Trial of Common Sense",contributionDescription:"Implemented the typed decision flow and fixed state bugs during our review session.",evidenceType:"collaboration",evidenceDescription:"Worked through the final interaction review together.",confidence:"certain"}},
 {id:"en4",skillId:"typescript",candidateId:"khushal",endorser:witnesses[4],submittedAt:"2026-04-13",answers:{personallyObserved:true,projectId:"Life OS",contributionDescription:"Showed me the application and explained the component model.",evidenceType:"project",confidence:"fairly_certain"}},
 {id:"en5",skillId:"nextjs",candidateId:"khushal",endorser:witnesses[1],submittedAt:"2026-05-20",answers:{personallyObserved:true,projectId:"Life OS",contributionDescription:"Structured the App Router pages and server route integration.",evidenceType:"repository",evidenceDescription:"Saw the route structure and implementation.",confidence:"certain"}},
 {id:"en6",skillId:"nextjs",candidateId:"khushal",endorser:witnesses[3],submittedAt:"2026-03-02",answers:{personallyObserved:false,contributionDescription:"I have seen several project posts mentioning Next.js.",evidenceType:"post",confidence:"fairly_certain"}},
 {id:"en7",skillId:"ai-integration",candidateId:"khushal",endorser:witnesses[0],submittedAt:"2026-06-01",answers:{personallyObserved:true,projectId:"Rabbit",contributionDescription:"Designed the structured AI response flow and a fallback that kept the demo working offline.",evidenceType:"collaboration",evidenceDescription:"Tested failure states together before the showcase.",confidence:"certain"}},
 {id:"en8",skillId:"ai-integration",candidateId:"khushal",endorser:witnesses[4],submittedAt:"2026-04-28",answers:{personallyObserved:false,contributionDescription:"Khushal is clearly interested in adding AI to products.",evidenceType:"none",confidence:"supportive_but_unsure"}},
 {id:"en9",skillId:"product-design",candidateId:"khushal",endorser:witnesses[2],submittedAt:"2026-06-18",answers:{personallyObserved:true,projectId:"Life OS",contributionDescription:"Mapped the onboarding, simplified the daily planning flow, and tested the prototype with users.",evidenceType:"project",evidenceDescription:"Reviewed the interaction map and working prototype.",confidence:"certain"}},
 {id:"en10",skillId:"product-design",candidateId:"khushal",endorser:witnesses[0],submittedAt:"2026-02-16",answers:{personallyObserved:true,contributionDescription:"Gives thoughtful product feedback and notices confusing flows.",evidenceType:"collaboration",confidence:"fairly_certain"}},
];
export const defaultEndorsements=raw.map(e=>({...e,verdict:scoreEndorsement(e,profileSkills.find(s=>s.id===e.skillId)!)}));
export const mockEndorsers=witnesses;
