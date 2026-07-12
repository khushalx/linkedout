export function currentClientStamp(){const now=new Date();return{id:String(now.getTime()),iso:now.toISOString(),day:now.toISOString().slice(0,10)}}
