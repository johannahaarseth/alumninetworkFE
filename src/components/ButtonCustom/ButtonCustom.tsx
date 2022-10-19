import styles from "./ButtonCustom.module.css";
import Button from "../Button/Button.component";

const ButtonCustom = () => {
  return (
    <Button className={styles.button}>
      {window.location.pathname === "/topic/post" ? <p>Join</p> : <p>Invite</p>}
      <p>+</p>
    </Button>
  );
};

export default ButtonCustom;
