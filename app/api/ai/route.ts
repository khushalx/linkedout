import { NextResponse } from "next/server"; import { aiRequestSchema } from "@/lib/polygraph-schema"; import { analyseLocally } from "@/lib/polygraph-fallback"; import { analyseWithGroq } from "@/lib/groq";
export async function POST(request:Request){
  let body:unknown; try{body=await request.json()}catch{return NextResponse.json({error:"The request body must be valid JSON."},{status:400})}
  const parsed=aiRequestSchema.safeParse(body); if(!parsed.success)return NextResponse.json({error:"Send a polygraph request with at least 25 characters."},{status:400});
  const {text,savageMode}=parsed.data.data;
  if(!process.env.GROQ_API_KEY)return NextResponse.json({result:analyseLocally(text,savageMode),demo:true});
  try{return NextResponse.json({result:await analyseWithGroq(text,savageMode),demo:false})}catch{return NextResponse.json({error:"The polygraph could not complete its reading. Please try again."},{status:502})}
}
