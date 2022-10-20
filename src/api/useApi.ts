import { useState } from "react";

export const useApi = <T>(apiFunc: Function, previousState: T) => {
	const [data, setData] = useState<T>(previousState);
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const request = async (...args: string[]) => {
		setLoading(true);
		try {
			const result = await apiFunc(...args);
			setData(result.data);
			console.log("data:" + data);
			console.log(result.data);
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
