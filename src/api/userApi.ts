import { IUserResponse } from "../interfaces/IUserResponse";
import { apiClient } from "./apiClient";

const getUserById = (userId: number) =>
	apiClient.get<IUserResponse>("/user/" + userId);

const getCurrentUser = (config: {}) =>
	apiClient.get<IUserResponse>("/user/current", config);

const patchUser = (config: {}) =>
	apiClient.patch<IUserResponse>("/user/current", config);

export { getUserById, getCurrentUser, patchUser };
