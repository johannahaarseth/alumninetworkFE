import { Dispatch, SetStateAction, useState } from "react";
import Button from "../../components/Button/Button.component";
import styles from "./InviteModal.module.css";
import Input from "../../components/Input/Input.component";
import { Stack } from "@mui/material";
import ProfilePic from "../../components/ProfilePic/ProfilePic.component";
type InviteModalProps = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};
const InviteModal = ({ setIsOpen }: InviteModalProps) => {
  const [isOpen] = useState(false);
  const [isInvited, setIsInvited] = useState(false);
  return (
    <>
      <div style={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingRight: "75%",
          }}
        >
          <p>"Title"</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className={styles.closeButton}>
            {!isOpen && (
              <Button onClick={() => setIsOpen(false)}>
                <p>Close X</p>
              </Button>
            )}
          </div>
        </div>
      </div>

      <form className={styles.form}>
        <div>
          <Input placeholderText={`Search`} />
        </div>

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
                onClick={() => setIsInvited(true)}
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
      </form>
    </>
  );
};

export default InviteModal;
