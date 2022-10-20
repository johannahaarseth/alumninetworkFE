import { IPostResponse } from "../interfaces/IPostResponse";
import { apiClient } from "./apiClient";

const getPosts = (config: {}) => apiClient.get<IPostResponse>("/post", config);
const getPostById = (postId: number) =>
	apiClient.get<IPostResponse>("/post/" + postId);

export { getPosts, getPostById };
