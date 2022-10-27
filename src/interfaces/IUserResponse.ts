export interface IUserResponse {
	count: number;
	next: string;
	results: IUserSummary[];
}

export interface IUserSummary {
	userId: number;
	name: string;
}
