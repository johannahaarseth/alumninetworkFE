import { ITarget } from "./ITarget";
import { IUserSummary } from "./IUserSummary";


export interface IPostSummary{
    postId : string,
    postTitle : string,
    postBody : string, 
    target : ITarget,
    sender : IUserSummary,
    commentCount : number
}