import { ITopicSummary } from "./ITopicSummary";

export interface ITopicResponse {
  count: number;
  next: string;
  results: ITopicSummary[];
}
