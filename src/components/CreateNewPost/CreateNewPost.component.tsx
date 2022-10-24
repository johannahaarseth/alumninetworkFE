import styles from "./CreateNewPost.module.css";
import Card from "../Card/Card.component";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import Input from "../Input/Input.component";
import RadioButton from "../RadioButton/RadioButton.component";
import TextArea from "../TextArea/TextArea.component";
import Button from "../Button/Button.component";
import { useNavigate } from "react-router-dom";

const CreateNewPost = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  return (
    <>
      <Card cardHoverEffect={true}>
        <button className={styles.createNewPostButton} onClick={handleOpen}>
          <p className={styles.newPost}>Create new post</p>
          <p className={styles.newPostPlus}>+</p>
        </button>
      </Card>
      {open && (
        <Modal open={open} onClose={handleClose}>
          <div className={styles.centered}>
            <div className={styles.modal}>
              <Card cardHoverEffect={false}>
                <p className={styles.modalHeader}>Create new post</p>
                <form className={styles.form}>
                  <Input placeholderText={"Add post title"} />
                  <p>Post to:</p>
                  <div className={styles.radioButtons}>
                    <RadioButton valueProp={"Group"} />
                    <RadioButton valueProp={"Event"} />
                    <RadioButton valueProp={"Person"} />
                  </div>
                  <Input
                    placeholderText={"Search for group / event / person"}
                  />
                  <div>
                    <TextArea placeholderText={"Add post content"} />
                  </div>
                  <div className={styles.buttonContainer}>
                    <Button onClick={() => navigate("/group")}>
                      <p>Create post &gt;</p>
                    </Button>
                  </div>
                </form>
              </Card>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default CreateNewPost;
