export interface IEventResponse {
	count: number;
	next: string;
	results: IEventSummary[];
}

export interface IEventSummary {
	id: number;
	name: string;
	startTime?: string;
	endTime?: string;
}
