import styles from "./Modal.module.css";
import { Dispatch, SetStateAction } from "react";
import Card from "../Card/Card.component";

type ModalProps = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  children: JSX.Element | JSX.Element[];
};

const Modal = ({ setIsOpen, children }: ModalProps) => {
  return (
    <>
      <div className={styles.backdrop} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <Card cardHoverEffect={false}>{children}</Card>
        </div>
      </div>
    </>
  );
};

export default Modal;
