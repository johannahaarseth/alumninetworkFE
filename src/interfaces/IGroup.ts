import { IUserSummary } from "./IUserSummary";

export interface IGroup {
	groupId: number;
	name: string;
	description: string;
	isPrivate: boolean;
	createdBy: IUserSummary;
	member: boolean;
	memberCount: number;
}
