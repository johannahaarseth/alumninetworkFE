import "./Global.css";
import styles from "./App.module.css";
import LoginView from "./views/LoginView/LoginView";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardView from "./views/DashboardView/DashboardView";
import ProfileView from "./views/ProfileView/ProfileView";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  let { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      <div className={styles.dashboard}></div>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/login" element={<LoginView />} />
            <Route path="*" element={<LoginView />} />
            {isAuthenticated && (
              <Route path="/dashboard" element={<DashboardView />} />
            )}
            {isAuthenticated && (
              <Route path="/profile" element={<ProfileView />} />
            )}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
