import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { UseUser } from "../context/useUser";

export const useApi = <T>(apiFunc: Function) => {
	const [data, setData] = useState<T>();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const { getAccessTokenSilently } = useAuth0();

	const request = async (...args: string[]) => {
		const token = await getAccessTokenSilently({
			audience: "https://bealumninetwork.azurewebsites.net/",
			scope: "read:users",
		});

		console.log(token);

		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
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
