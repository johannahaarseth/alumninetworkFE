import { ReactNode, useContext, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { createContext } from 'react';

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
    children: ReactNode
}

const UserContext = createContext<IUser>({} as IUser);
const UserProvider = (props : UserProviderProps) => {

    const { user } = useAuth0();
    
    const [funfact, setFunfact] = useState("");
    const [bio, setBio] = useState("");
    const [status, setStatus] = useState("");
  
    return( 
        <UserContext.Provider value={{name: user?.name, auth0Id:user?.sub, picture : user?.picture, email : user?.email, funfact : [funfact, setFunfact], bio : [bio, setBio], status : [status, setStatus]}}> 
            {props.children}
        </UserContext.Provider>
    );
}

const UseUser = () => useContext(UserContext);
export { UserContext, UseUser }
export default UserProvider;