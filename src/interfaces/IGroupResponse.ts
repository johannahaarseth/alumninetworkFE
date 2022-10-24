export interface IGroupResponse {
  count: number;
  next: string;
  results: IGroupSummary[];
}

export interface IGroupSummary {
  id: number;
  name: string;
  member: boolean;
}
