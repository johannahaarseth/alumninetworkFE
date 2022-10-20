import { IPostResponse } from "./../interfaces/IPostResponse";
import { apiClient } from "./apiClient";

const config = {
	headers: {
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
	},
};

const getPosts = (config: {}) =>
	apiClient.get<IPostResponse>("/post?offset=0&limit=20", config);

const getPostsGeneric = (config: {}) =>
	apiClient.get<IPostResponse>("", config);

const getPostById = (config: {}, postId: number) =>
	apiClient.get<IPostResponse>("/post/" + postId, config);

export { getPosts, getPostById, getPostsGeneric };
