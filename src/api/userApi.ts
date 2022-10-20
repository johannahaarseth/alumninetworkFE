import { IPostResponse } from "../interfaces/IPostResponse";
import { IUserResponse } from "../interfaces/IUserResponse";
import { apiClient } from "./apiClient";

const config = {
	headers: {
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
	},
};

const getUserById = (userId: number) =>
	apiClient.get<IUserResponse>("/user/" + userId);

const getCurrentUser = (args: {}) =>
	apiClient.get<IUserResponse>("/user/current", args);

const patchUser = (args: {}) =>
	apiClient.patch<IUserResponse>("/user/current", args);

export { getUserById, getCurrentUser, patchUser };
