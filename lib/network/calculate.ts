import type { NetworkAccount,NetworkBalance } from "./types";
/** Positive means their received value exceeds what they returned; negative means the user should return value. */
export function calculateNetworkBalance(account:NetworkAccount):NetworkBalance{
 const given=account.favoursGiven.reduce((n,f)=>n+f.weight*10,0);const received=account.favoursReceived.reduce((n,f)=>n+f.weight*10,0);const overdueCount=account.outstandingPromises.filter(p=>p.status==="overdue").length;
 const promisePenalty=overdueCount*12;const fulfilledCredit=account.outstandingPromises.filter(p=>p.status==="fulfilled").length*4;const balance=Math.max(-100,Math.min(100,given-received+promisePenalty-account.ignoredAskCount*2-fulfilledCredit));
 const direction=balance>8?"they_owe_you":balance< -8?"you_owe_them":"balanced";const relationshipHealth=Math.max(15,Math.min(100,86-Math.abs(balance)*.35-overdueCount*9-account.ignoredAskCount*8-Math.max(0,account.lastReplyDaysAgo-14)*.35));
 const ghostingRisk=account.ignoredAskCount>=3||account.lastReplyDaysAgo>40?"high":account.ignoredAskCount||account.lastReplyDaysAgo>18?"medium":"low";
 const accountStatus=overdueCount&&ghostingRisk==="high"?"collections_candidate":overdueCount?"overdue":direction!=="balanced"?"payment_pending":"in_good_standing";
 return {balance:Math.round(balance),direction,relationshipHealth:Math.round(relationshipHealth),overdueCount,ghostingRisk,accountStatus};
}
