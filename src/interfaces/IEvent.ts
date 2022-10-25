import { IRSVP } from "./IRSVP";
import { IUserSummary } from "./IUserSummary";

export interface IEvent {
	eventId: number;
	name: string;
	description: string;
	createdBy: IUserSummary;
	rsvp: IRSVP;
	invitedCount: number;
	attendeesCount: number;
	Count: number;
	startTime: string;
	endTime: string;
}
