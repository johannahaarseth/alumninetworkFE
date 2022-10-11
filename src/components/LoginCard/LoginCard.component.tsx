import LoginButton from "../LoginButton/LoginButton.component";
import styles from "./LoginCard.module.css";

const LoginCard = () => {
  const logo = require("../../assets/Pictures/LogoAlumni.png");
  const illustration = require("../../assets/Pictures/whiteIllustration.jpg");
  return (
    <>
      <div className={styles.card}>
        <img className={styles.illustration} src={illustration} />

        <h1 className={styles.title}>Welcome back!</h1>
        <h2 className={styles.undertitle}>Sign in to gain access.</h2>
        <img className={styles.logo} src={logo} />
        <LoginButton />
      </div>
    </>
  );
};

export default LoginCard;
