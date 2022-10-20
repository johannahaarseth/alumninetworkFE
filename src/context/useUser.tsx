import { ReactNode, useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { createContext } from "react";
import { useApi } from "../api/useApi";
import { IUserResponse } from "../interfaces/IUserResponse";
import { getCurrentUser, patchUser } from "../api/userApi";

export interface IUser {
	picture: string | undefined;
	auth0Id: string | undefined;
	name: string | undefined;
	email: string | undefined;
	bio: string;
	setBio: React.Dispatch<React.SetStateAction<string>>;
	funfact: string;
	setFunfact: React.Dispatch<React.SetStateAction<string>>;
	status: string;
	setStatus: React.Dispatch<React.SetStateAction<string>>;
}

type UserProviderProps = {
	children: ReactNode;
};

const UserContext = createContext<IUser>({} as IUser);
const UserProvider = (props: UserProviderProps) => {
	const { user } = useAuth0();

	const getUserApi = useApi<IUserResponse>(getCurrentUser, {
		funfact: "",
		bio: "",
		status: "",
	} as IUserResponse);

	const patchUserApi = useApi<IUserResponse>(patchUser, {
		funfact: "",
		bio: "",
		status: "",
	} as IUserResponse);

	const [funfact, setFunfact] = useState("");
	const [bio, setBio] = useState("");
	const [status, setStatus] = useState("");

	useEffect(() => {
		getUserApi.request().then(() => {
			setFunfact(getUserApi.data.funfact);
			setBio(getUserApi.data.bio);
			setStatus(getUserApi.data.status);
		});
	}, []);

	useEffect(() => {});

	return (
		<UserContext.Provider
			value={{
				name: user?.name,
				auth0Id: user?.sub,
				picture: user?.picture,
				email: user?.email,
				funfact: funfact,
				setFunfact: setFunfact,
				bio: bio,
				setBio: setBio,
				status: status,
				setStatus: setStatus,
			}}
		>
			{props.children}
		</UserContext.Provider>
	);
};

const UseUser = () => useContext(UserContext);
export { UserContext, UseUser };
export default UserProvider;
