import { useAuth0 } from "@auth0/auth0-react";
import * as React from "react";
import NavBar from "../../components/NavBar/NavBar.component";
const DashboardView = () => {
  const { isAuthenticated, user } = useAuth0();

  return <>{isAuthenticated && <NavBar />}</>;
};

export default DashboardView;
