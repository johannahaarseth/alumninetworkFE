export interface IPostGroup {
	groupId: number;
	topicId: number | null;
	eventId: number | null;
	userId: number | null;
	postTitle: string;
	postBody: string;
}
