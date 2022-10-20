import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";

export const useApi = <T>(apiFunc: Function, currentState: T) => {
	const [data, setData] = useState<T>(currentState);
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const { getAccessTokenSilently } = useAuth0();

	type AxiosInput = {
		headers: {};
		params: {};
	};

	const request = async (configInput?: AxiosInput) => {
		const token = await getAccessTokenSilently({
			audience: "https://bealumninetwork.azurewebsites.net/",
			scope: "read:users",
		});

		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
				...configInput?.headers,
			},
			...configInput?.params,
		};
		setLoading(true);
		try {
			const result = await apiFunc(config);
			setData(result.data);
		} catch (err: any) {
			setError(err.message || "Unexpected Error!");
		} finally {
			setLoading(false);
		}
	};

	return {
		data,
		error,
		loading,
		request,
	};
};
