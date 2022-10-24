import styles from "./ButtonCustom.module.css";
import Button from "../Button/Button.component";
import React, { useState } from "react";

type ButtonCustomProps = {
  onClick?: React.MouseEventHandler;
};

const ButtonCustom = ({ onClick }: ButtonCustomProps) => {
  const [isJoined, setIsJoined] = useState(false);

  const inviteBtn = (
    <Button className={styles.button} onClick={onClick}>
      <p>Invite</p>
      <p>+</p>
    </Button>
  );

  const joinOrLeaveBtn = (
    <>
      {isJoined && inviteBtn}
      <Button className={styles.button} onClick={() => setIsJoined(!isJoined)}>
        {!isJoined ? (
          <>
            <p>Join</p>
            <p>+</p>
          </>
        ) : (
          <p>Leave</p>
        )}
      </Button>
    </>
  );

  return (
    <>{window.location.pathname.match(/event/) ? inviteBtn : joinOrLeaveBtn}</>
  );
};

export default ButtonCustom;
