import Groq from "groq-sdk";import { z } from "zod";import { FALLBACK_GROQ_MODEL } from "@/lib/groq";
export async function runStructured<T>(system:string,payload:unknown,schema:z.ZodType<T>,temperature=.45):Promise<T>{
 const client=new Groq({apiKey:process.env.GROQ_API_KEY});const base={model:process.env.GROQ_MODEL||FALLBACK_GROQ_MODEL,temperature,messages:[{role:"system" as const,content:system},{role:"user" as const,content:JSON.stringify(payload)}]};
 let content:string|undefined|null;
 try{const response=await client.chat.completions.create({...base,response_format:{type:"json_object"}});content=response.choices[0]?.message?.content}catch{const response=await client.chat.completions.create(base);content=response.choices[0]?.message?.content}
 if(!content)throw new Error("Empty structured response");return schema.parse(JSON.parse(content));
}
