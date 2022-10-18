import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar.component";

const ListView = () => {
  const { isAuthenticated, user } = useAuth0();
  if (!user) {
    return <Navigate to="/" replace />;
  } else {
    return <>{isAuthenticated && <NavBar />}</>;
  }
};

export default ListView;
