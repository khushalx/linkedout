import { NextResponse } from "next/server";import { AIRequestError,routeAIFeature } from "@/lib/ai/feature-router";
export async function POST(request:Request){
  let body:unknown; try{body=await request.json()}catch{return NextResponse.json({error:"The request body must be valid JSON."},{status:400})}
  try{return NextResponse.json(await routeAIFeature(body))}catch(error){if(error instanceof AIRequestError)return NextResponse.json({error:error.message},{status:400});return NextResponse.json({error:"The AI tool could not complete its reading. Please try again."},{status:502})}
}
