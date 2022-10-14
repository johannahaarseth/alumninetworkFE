import styles from "./ListBox.module.css";
import Button from "../Button/Button.component";
import Card from "../Card/Card.component";
import { useState } from "react";
import Modal from "../Modal/Modal.component";
import TextField from "../TextField/TextField.component";
import RadioButton from "../RadioButton/RadioButton.component";
import Input from "../Input/Input.component";
import { useNavigate } from "react-router-dom";

type ListBoxProps = {
  title: string;
  children: JSX.Element | JSX.Element[];
};

const ListBox = ({ title, children }: ListBoxProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const titleToLowerAndMinusPlural = title.toLowerCase().slice(0, -1);
  const navigate = useNavigate();

  return (
    <>
      <Card cardHoverEffect={false}>
        <div className={styles.titleAndAddBtn}>
          <p>{title}</p>
          <Button onClick={() => setIsOpen(true)}>
            <p>+ Add new</p>
          </Button>
        </div>
        <div className={styles.contentList}>{children}</div>
        <div className={styles.seeMoreBtn}>
          <Button onClick={() => navigate("/list")}>
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
