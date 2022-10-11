import styles from "./ListBox.module.css";
import Button from "../Button/Button.component";
import Card from "../Card/Card.component";
import { useState } from "react";
import Modal from "../Modal/Modal.component";
import TextField from "../TextField/TextField.component";
import RadioButton from "../RadioButton/RadioButton.component";
import Input from "../Input/Input.component";

type ListBoxProps = {
  title: string;
};

const ListBox = ({ title }: ListBoxProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const titleToLowerAndMinusPlural = title.toLowerCase().slice(0, -1);

  return (
    <>
      <Card cardHoverEffect={false}>
        <div className={styles.titleAndAddBtn}>
          <p>{title}</p>
          <Button onClick={() => setIsOpen(true)}>
            <p>+ Add new</p>
          </Button>
        </div>
        <div className={styles.contentList}>
          <div className={styles.itemBox}></div>
          <div className={`${styles.itemBox} ${styles.itemBoxTwo}`}></div>
          <div className={`${styles.itemBox} ${styles.itemBoxThree}`}></div>
        </div>
        <div className={styles.seeMoreBtn}>
          <Button>
            <p>See more &gt;</p>
          </Button>
        </div>
      </Card>
      {isOpen && (
        <Modal setIsOpen={setIsOpen}>
          <p className={styles.modalHeader}>
            Create new {titleToLowerAndMinusPlural}
          </p>
          <form className={styles.form}>
            <div>
              <Input
                placeholderText={`Add ${titleToLowerAndMinusPlural} title`}
              />
            </div>
            <div className={styles.radioButtons}>
              <RadioButton valueProp={"Public"} />
              <RadioButton valueProp={"Private"} />
            </div>
            <div>
              <TextField
                placeholderText={`Add ${titleToLowerAndMinusPlural} description`}
              />
            </div>
            <div className={styles.buttonContainer}>
              <Button>
                <p>Create {titleToLowerAndMinusPlural} &gt;</p>
              </Button>
            </div>
          </form>
        </Modal>
      )}
    </>
  );
};

export default ListBox;
