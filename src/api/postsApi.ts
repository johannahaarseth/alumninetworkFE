import { IPostResponse } from "../interfaces/IPostResponse";
import { apiClient } from "./apiClient";

const getPosts = () => apiClient.get<IPostResponse>("/post");
const getPostById = (postId: number) =>
	apiClient.get<IPostResponse>("/post/" + postId);

export { getPosts, getPostById };
