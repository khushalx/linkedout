export type FavourType="introduction"|"feedback"|"referral"|"project_help"|"resource"|"other";
export type Favour={id:string;type:FavourType;description:string;date:string;weight:1|2|3};
export type NetworkAccount={id:string;person:{name:string;headline:string;avatarInitials:string;connectionSince:string};favoursGiven:Favour[];favoursReceived:Favour[];outstandingPromises:Array<{id:string;promise:string;promisedAt:string;dueAt:string;status:"pending"|"overdue"|"fulfilled"}>;lastReplyDaysAgo:number;ignoredAskCount:number};
export type NetworkBalance={balance:number;direction:"they_owe_you"|"you_owe_them"|"balanced";relationshipHealth:number;overdueCount:number;ghostingRisk:"low"|"medium"|"high";accountStatus:"in_good_standing"|"payment_pending"|"overdue"|"collections_candidate"};
export type DebtTone="friendly"|"polite"|"mild_guilt"|"passive_aggressive"|"final_notice";
