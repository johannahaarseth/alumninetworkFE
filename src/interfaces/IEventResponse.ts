export interface IEventResponse {
	count: number;
	next: string;
	results: IEventSummary[];
}

export interface IEventSummary {
	eventId: number;
	name: string;
	startTime?: string;
	endTime?: string;
}
