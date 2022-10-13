import LogoImage from "../../assets/Logo/LogoAlumni.png";
import styles from "./Logo.module.css";

const Logo = () => {
  return <img className={styles.logo} src={LogoImage} alt="Logo" />;
};

export default Logo;
