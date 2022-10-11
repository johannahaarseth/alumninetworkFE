import LoginButton from "../LoginButton/LoginButton.component";
import styles from "./LoginCard.module.css";

const LoginCard = () => {
  const logo = require("../../assets/Pictures/LogoAlumni.png");
  const illustration = require("../../assets/Pictures/whiteIllustration.jpg");
  return (
    <>
      <div className={styles.card}>
        <img className={styles.illustration} src={illustration} />
        <img className={styles.logo} src={logo} />
        <h2 className={styles.h2}>Sign in</h2>
        <LoginButton />
      </div>
    </>
  );
};

export default LoginCard;
