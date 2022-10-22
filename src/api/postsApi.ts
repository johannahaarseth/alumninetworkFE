import { StringMappingType } from "typescript";
import { IPostResponse } from "./../interfaces/IPostResponse";
import { apiClient } from "./apiClient";

const getPosts = (config: {}) =>
	apiClient.get<IPostResponse>("/post?offset=0&limit=20", config);

const getPostsGeneric = (url: string, config: {}) =>
	apiClient.get<IPostResponse>(url, config);

const getPostById = (config: {}, postId: number) =>
	apiClient.get<IPostResponse>("/post/" + postId, config);

export { getPosts, getPostById, getPostsGeneric };
