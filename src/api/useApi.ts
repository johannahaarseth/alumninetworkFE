import { useState } from "react";

export const useApi = <T>(apiFunc: Function) => {
	const [data, setData] = useState<T>();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const request = async (...args: string[]) => {
		setLoading(true);
		try {
			const result = await apiFunc(...args);
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
