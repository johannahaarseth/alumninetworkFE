export interface IPostPost {
	postId: number;
	targetGroupId: number;
	targetTopicId: number | null;
	targetEventId: number;
	targetUserId: number;
	postTitle: string;
	postBody: string;
}
