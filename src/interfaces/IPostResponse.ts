import { IPostSummary } from "./IPostSummary";

export interface IPostResponse {
  count: number;
  next: string;
  results: IPostSummary[];
}
