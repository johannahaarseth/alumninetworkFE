import LoginButton from "../LoginButton/LoginButton.component";
import styles from "./LoginCard.module.css";

const LoginCard = () => {
  const logo = require("../../assets/Pictures/LogoAlumniWhite.png");
  return (
    <>
      <div className={styles.card}>
        \<h2 className={styles.h2}>Welcome!</h2>
        <LoginButton />
      </div>
    </>
  );
};

export default LoginCard;
