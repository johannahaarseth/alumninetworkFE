import { IRsvp } from "./IRSVP";
import { IUserSummary } from "./IUserSummary";

export interface IGroup {
	eventId: number;
	name: string;
	description: string;
	createdBy: IUserSummary;
	rsvp: IRsvp;
	invitedCount: number;
	attendeesCount: number;
	Count: number;
	startTime: string;
	endTime: string;
}
