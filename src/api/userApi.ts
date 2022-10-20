import { IPostResponse } from "../interfaces/IPostResponse";
import { IUserResponse } from "../interfaces/IUserResponse";
import { apiClient } from "./apiClient";

const getUserById = (userId: number) =>
	apiClient.get<IUserResponse>("/user/" + userId);

const getCurrentUser = (args: {}) =>
	apiClient.get<IUserResponse>("/user/current", args);

const patchUser = (args: {}) =>
	apiClient.patch<IUserResponse>("/user/current", args);

export { getUserById, getCurrentUser, patchUser };
