import { ReactNode, useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { createContext } from "react";
import { useApi } from "../api/useApi";
import { IUserResponse } from "../interfaces/IUserResponse";
import { getCurrentUser } from "../api/userApi";
import { Token } from "typescript";

export interface IUser {
	picture: string | undefined;
	auth0Id: string | undefined;
	name: string | undefined;
	email: string | undefined;
	bio: [string, React.Dispatch<React.SetStateAction<string>>];
	funfact: [string, React.Dispatch<React.SetStateAction<string>>];
	status: [string, React.Dispatch<React.SetStateAction<string>>];
}

type UserProviderProps = {
	children: ReactNode;
};

const UserContext = createContext<IUser>({} as IUser);
const UserProvider = (props: UserProviderProps) => {
	const { user } = useAuth0();

	const getUserApi = useApi<IUserResponse>(getCurrentUser);

	const [funfact, setFunfact] = useState(getUserApi.data?.funfact ?? "");
	const [bio, setBio] = useState(getUserApi.data?.bio ?? "");
	const [status, setStatus] = useState(getUserApi.data?.status ?? "");

	return (
		<UserContext.Provider
			value={{
				name: user?.name,
				auth0Id: user?.sub,
				picture: user?.picture,
				email: user?.email,
				funfact: [funfact, setFunfact],
				bio: [bio, setBio],
				status: [status, setStatus],
			}}
		>
			{props.children}
		</UserContext.Provider>
	);
};

const UseUser = () => useContext(UserContext);
export { UserContext, UseUser };
export default UserProvider;
