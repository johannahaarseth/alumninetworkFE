export interface ITopicResponse {
  count: number;
  next: string;
  results: ITopicSummary[];
}

export interface ITopicSummary {
  id: number;
  name: string;
  subscriber: boolean;
}
