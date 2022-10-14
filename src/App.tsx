import "./Global.css";
import LoginView from "./views/LoginView/LoginView";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DashboardView from "./views/DashboardView/DashboardView";
import ProfileView from "./views/ProfileView/ProfileView";
import { useAuth0 } from "@auth0/auth0-react";
import PostView from "./views/PostView/PostView";

function App() {
  let { isAuthenticated, isLoading } = useAuth0();

  return !isLoading ? (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route
              path="/login"
              element={
                isAuthenticated ? <Navigate to="/dashboard" /> : <LoginView />
              }
            />
            <Route
              path="*"
              element={
                isAuthenticated ? <Navigate to="/dashboard" /> : <LoginView />
              }
            />
            {isAuthenticated && (
              <Route path="/dashboard" element={<DashboardView />} />
            )}
            {isAuthenticated && (
              <Route path="/profile" element={<ProfileView />} />
            )}
            {/* change afterwards to => path="/group/:id/" */}
            {isAuthenticated && <Route path="/group" element={<PostView />} />}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  ) : (
    <>
      <h1>Loading...</h1>
    </>
  );
}

export default App;
