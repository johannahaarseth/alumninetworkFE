export interface IGroupResponse {
	count: number;
	next: string;
	results: IGroupSummary[];
}

export interface IGroupSummary {
	groupId: number;
	name: string;
	member: boolean;
}
