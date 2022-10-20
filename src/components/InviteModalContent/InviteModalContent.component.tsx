import { useState } from "react";
import Button from "../Button/Button.component";
import styles from "./InviteModalContent.module.css";
import { Stack } from "@mui/material";
import ProfilePic from "../ProfilePic/ProfilePic.component";

const InviteModalContent = () => {
  const [isInvited, setIsInvited] = useState(false);

  return (
    <>
      <div className={styles.textBox}>
        <Stack direction="row" spacing={"45%"}>
          <Stack direction="row">
            <div className={styles.profilePic}>
              <ProfilePic />
            </div>
            <p className={styles.profileName}>username</p>
          </Stack>
          <div>
            <Button
              className={styles.invButton}
              onClick={() => {
                setIsInvited(true);
              }}
            >
              {!isInvited ? (
                <>
                  <p>Invite</p>
                  <p>+</p>
                </>
              ) : (
                <p>Invited</p>
              )}
            </Button>
          </div>
        </Stack>
      </div>
    </>
  );
};

export default InviteModalContent;
