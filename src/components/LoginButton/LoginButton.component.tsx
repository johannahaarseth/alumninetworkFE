import styles from "./LoginButton.module.css";

//import { useAuth0 } from "@auth0/auth0-react";
const LoginButton = () => {
  //const { loginWithPopup, user } = useAuth0();

  //   const login = () => {
  //     loginWithPopup().then(() => console.log("Logger inn"));
  //   };

  return <button className={styles.button}>Log In</button>;
};

export default LoginButton;
