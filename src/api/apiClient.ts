import axios from "axios";
import { UseUser } from "../context/useUser";

const apiBaseUrl: string | undefined = process.env.REACT_APP_API_URL;

export const apiClient = axios.create({
	// Later read this URL from an environment variable
	baseURL: apiBaseUrl,
});
