import "./Global.css";
import styles from "./App.module.css";
import LoginView from "./views/LoginView/LoginView";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardView from "./views/DashboardView/DashboardView";
import ProfileView from "./views/ProfileView/ProfileView";

function App() {
  return (
    <div className="App">
      <div className={styles.dashboard}></div>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/login" element={<LoginView />} />
            <Route path="*" element={<LoginView />} />
            <Route path="/dashboard" element={<DashboardView />} />
            <Route path="/profile" element={<ProfileView />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
