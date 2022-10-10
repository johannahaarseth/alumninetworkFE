import styles from "./NavBar.module.css";
import ProfilePic from "../ProfilePic/ProfilePic.component";
import Logo from "../Logo/Logo.component";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <input type="text" placeholder="Search" />
      <div className={styles.profile}>
        <ProfilePic />
      </div>
    </div>
  );
};

export default NavBar;
