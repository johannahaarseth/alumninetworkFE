import { useContext, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { createContext } from 'react';

const userContext = createContext({});

const userProvider = ({children}) => {

    const { user } = useAuth0();
    const [funfact, setFunfact] = useState("");
    const [bio, setBio] = useState("");
    const [status, setStatus] = useState("");
  
    return( 
    <UserContex.Provider value={{ user?.name, user?.picture, funfact, setFunfact, bio, setBio, status, setStatus }}>
        {children}
    </UserContex.Provider>
    )
}

const useUser = () => useContext(userContext);
export { userContext, useUser }
export default userProvider;