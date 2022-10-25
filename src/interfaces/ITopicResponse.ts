export interface ITopicResponse {
	count: number;
	next: string;
	results: ITopicSummary[];
}

export interface ITopicSummary {
	topicId: number;
	name: string;
	subscriber: boolean;
}
