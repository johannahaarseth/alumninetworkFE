import { ITarget } from "./ITarget";
import { IUserSummary } from "./IUserSummary";

export interface IPostSummary {
  postId: number;
  postTitle: string;
  postBody: string;
  target: ITarget;
  createdBy: IUserSummary;
  commentCount: number;
}
