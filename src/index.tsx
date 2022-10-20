import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { StyledEngineProvider } from "@mui/material/styles";

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
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </Auth0Provider>
  </React.StrictMode>
);
