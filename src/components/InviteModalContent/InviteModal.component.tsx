import { Dispatch, SetStateAction } from "react";
import Button from "../Button/Button.component";
import styles from "./InviteModalContent.module.css";
import Input from "../Input/Input.component";
import InviteModalContent from "./InviteModalContent.component";

type InviteModalProps = {
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const InviteModal = ({ setOpen }: InviteModalProps) => {
  return (
    <>
      <div className={styles.topContainer}>
        <p>"Title"</p>
        <div className={styles.closeButton}>
          <Button onClick={() => setOpen(false)}>
            <p>Close X</p>
          </Button>
        </div>
      </div>

      {/* <div className={styles.searchContainer}>
				<Input placeholderText="Search" />
			</div> */}

      <div className={styles.list}>
        <InviteModalContent />
        <InviteModalContent />
        <InviteModalContent />
        <InviteModalContent />
        <InviteModalContent />
      </div>
    </>
  );
};

export default InviteModal;
