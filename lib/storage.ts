import { z } from "zod";
export function readValidated<T>(key:string,schema:z.ZodType<T>,fallback:T):T{if(typeof window==="undefined")return fallback;try{const raw=window.localStorage.getItem(key);if(!raw)return fallback;const parsed=schema.safeParse(JSON.parse(raw));return parsed.success?parsed.data:fallback}catch{return fallback}}
export function writeVersioned<T>(key:string,value:T){if(typeof window==="undefined")return;try{window.localStorage.setItem(key,JSON.stringify(value))}catch{/* best effort prototype persistence */}}
