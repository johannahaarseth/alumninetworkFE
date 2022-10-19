import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { AppContext } from "./context/AppContext";
import { appContext } from "./models/appModel";
import UserProvider from "./context/useUser";



const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-nrq5rdkw.us.auth0.com"
      clientId="75ueSFCfMSTeq92b8pwu6BBF5Nl2rOA9"
      redirectUri={window.location.origin + "/dashboard"}
    >
      <UserProvider>
      <AppContext.Provider value={appContext}>
        <App />
      </AppContext.Provider>
      </UserProvider>
    </Auth0Provider>
  </React.StrictMode>
);
