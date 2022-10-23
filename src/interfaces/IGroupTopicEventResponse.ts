import { IGroupTopicEventSummary } from "./IGroupTopicEventSummary";

export interface IGroupTopicEventResponse {
	count: number;
	next: string;
	results: IGroupTopicEventSummary[];
}
