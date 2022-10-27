import { MouseEventHandler } from "react";
import LogoImage from "../../assets/Logo/LogoAlumni.png";
import styles from "./Logo.module.css";

type LogoProps = {
	onLogoClick?: MouseEventHandler<HTMLImageElement>;
};

const Logo = ({ onLogoClick }: LogoProps) => {
	return (
		<img alt="" className={styles.logo} src={LogoImage} onClick={onLogoClick} />
	);
};

export default Logo;
