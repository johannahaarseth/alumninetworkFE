import styles from "./LoginButton.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button className={styles.button} onClick={loginWithRedirect}>
      Log In
    </button>
  );
};

export default LoginButton;
