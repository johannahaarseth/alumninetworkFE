import LoginButton from "../LoginButton/LoginButton.component";
import styles from "./LoginCard.module.css";

const LoginCard = () => {
  const logo = require("../../assets/Pictures/LogoAlumni.png");
  const illustration = require("../../assets/Pictures/whiteIllustration.jpg");

  return (
    <>
      <div className={styles.card}>
        <img alt="" className={styles.illustration} src={illustration} />
        <div className={styles.title}>Welcome back!</div>
        <div className={styles.undertitle}>Sign in to gain access.</div>
        <img alt="" className={styles.logo} src={logo} />
        <LoginButton />
      </div>
    </>
  );
};

export default LoginCard;
