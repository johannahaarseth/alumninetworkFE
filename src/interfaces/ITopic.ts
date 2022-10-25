import { IUserSummary } from "./IUserSummary";

export interface ITopic {
	topicId: number;
	name: string;
	description: string;
	createdBy: IUserSummary;
	subscriber: boolean;
	subscriberCount: number;
}
