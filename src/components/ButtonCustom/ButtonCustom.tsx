import styles from "./ButtonCustom.module.css";
import Button from "../Button/Button.component";
import { Dispatch, SetStateAction, useState } from "react";
type ButtonCustomProps = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};
const ButtonCustom = ({ setIsOpen }: ButtonCustomProps) => {
  const [isJoined, setIsJoined] = useState(false);

  return (
    <>
      {window.location.pathname === "/topic/post" ||
      window.location.pathname === "/topic" ? (
        <Button
          className={styles.button}
          onClick={() => {
            setIsJoined(true);
          }}
        >
          {!isJoined ? (
            <>
              <p>Join</p>
              <p>+</p>
            </>
          ) : (
            <p>Joined</p>
          )}
        </Button>
      ) : (
        <Button className={styles.button} onClick={() => setIsOpen(true)}>
          <p>Invite</p>
          <p>+</p>
        </Button>
      )}
    </>
  );
};

export default ButtonCustom;
