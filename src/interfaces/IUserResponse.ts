export interface IUserResponse {
	count: number;
	next: string;
	results: IUserSummary[];
}

export interface IUserSummary {
	id: number;
	name: string;
}
