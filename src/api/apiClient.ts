import axios from "axios";

const apiBaseUrl: string | undefined = process.env.REACT_APP_API_URL;

export const apiClient = axios.create({
	baseURL: apiBaseUrl,
});
