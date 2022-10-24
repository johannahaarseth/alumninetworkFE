import { IGroupSummary } from "./IGroupSummary";

export interface IGroupResponse {
  count: number;
  next: string;
  results: IGroupSummary[];
}
