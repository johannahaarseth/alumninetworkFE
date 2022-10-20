import { IPostResponse } from "../interfaces/IPostResponse";
import { apiClient } from "./apiClient";

const getPosts = (args: {}) => apiClient.get<IPostResponse>("/post", args);
const getPostById = (postId: number) =>
	apiClient.get<IPostResponse>("/post/" + postId);

export { getPosts, getPostById };
