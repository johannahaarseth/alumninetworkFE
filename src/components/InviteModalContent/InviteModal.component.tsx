import { Dispatch, SetStateAction, useState } from "react";
import Button from "../Button/Button.component";
import styles from "./InviteModalContent.module.css";
import Input from "../Input/Input.component";
import InviteModalContent from "./InviteModalContent.component";
type InviteModalProps = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};
const InviteModal = ({ setIsOpen }: InviteModalProps) => {
  const [isOpen] = useState(false);
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
      <div className={styles.emptySpace}>
        <Input placeholderText={`Search`} />
      </div>
      <div style={{ overflowY: "scroll", height: "300px" }}>
        <div className={styles.form}>
          <InviteModalContent />
          <InviteModalContent />
          <InviteModalContent />
          <InviteModalContent />
          <InviteModalContent />
        </div>
      </div>
      <div className={styles.emptySpace2}></div>
    </>
  );
};

export default InviteModal;
