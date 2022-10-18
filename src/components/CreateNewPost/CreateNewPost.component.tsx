import styles from "./CreateNewPost.module.css";
import Card from "../Card/Card.component";
import { useState } from "react";
import Modal from "../Modal/Modal.component";
import Input from "../Input/Input.component";
import RadioButton from "../RadioButton/RadioButton.component";
import TextField from "../TextField/TextField.component";
import Button from "../Button/Button.component";
import { useNavigate } from "react-router-dom";

const CreateNewPost = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Card cardHoverEffect={true}>
        <button
          className={styles.createNewPostButton}
          onClick={() => setIsOpen(true)}
        >
          <p className={styles.newPost}>Create new post</p>
          <p className={styles.newPostPlus}>+</p>
        </button>
      </Card>
      {isOpen && (
        <Modal setIsOpen={setIsOpen}>
          <p className={styles.modalHeader}>Create new post</p>
          <form className={styles.form}>
            <Input placeholderText={"Add post title"} />
            <p>Post to:</p>
            <div className={styles.radioButtons}>
              <RadioButton valueProp={"Group"} />
              <RadioButton valueProp={"Event"} />
              <RadioButton valueProp={"Person"} />
            </div>
            <Input placeholderText={"Search for group / event / person"} />
            <div>
              <TextField placeholderText={"Add post content"} />
            </div>
            <div className={styles.buttonContainer}>
              <Button onClick={() => navigate("/group")}>
                <p>Create post &gt;</p>
              </Button>
            </div>
          </form>
        </Modal>
      )}
    </>
  );
};

export default CreateNewPost;
