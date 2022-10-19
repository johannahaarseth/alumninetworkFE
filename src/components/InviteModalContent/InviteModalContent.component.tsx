import { Dispatch, SetStateAction, useState } from "react";
import Button from "../Button/Button.component";
import styles from "./InviteModalContent.module.css";
import { Stack } from "@mui/material";
import ProfilePic from "../ProfilePic/ProfilePic.component";
type InviteModalProps = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};
const InviteModalContent = ({ setIsOpen }: InviteModalProps) => {
  const [isInvited, setIsInvited] = useState(false);
  return (
    <>
      <div className={styles.textBox}>
        <Stack direction="row" spacing={"45%"}>
          <Stack direction="row">
            <div className={styles.profilepic}>
              <ProfilePic />
            </div>
            <p className={styles.profilename}>username</p>
          </Stack>
          <div>
            <Button
              className={styles.invbutton}
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
