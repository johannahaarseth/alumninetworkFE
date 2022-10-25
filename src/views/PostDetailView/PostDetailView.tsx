import NavBar from "../../components/NavBar/NavBar.component";
import styles from "./PostDetailView.module.css";
import Button from "../../components/Button/Button.component";
import PostEventCard from "../../components/PostEventCard/PostEventCard.component";
import Card from "../../components/Card/Card.component";
import ButtonCustom from "../../components/ButtonCustom/ButtonCustom";
import Input from "../../components/Input/Input.component";
import { useState } from "react";
import InviteModal from "../../components/InviteModalContent/InviteModal.component";
import Modal from "@mui/material/Modal";

const PostDetailView = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.postView}>
          <div className={styles.emptyColumn}></div>
          <div className={styles.postColumn}>
            <PostEventCard />
            <div className={styles.commentsContainer}>
              <Card cardHoverEffect={true}>
                <p>This is a comment</p>
              </Card>
              <Card cardHoverEffect={true}>
                <p>This is another comment</p>
              </Card>
            </div>
            <hr />
            <div className={styles.postCommentContainer}>
              <Input placeholderText="Type a comment..." />
              <Button className={styles.replyBtn}>Reply</Button>
            </div>
          </div>
          <div className={styles.infoColumn}>
            <div className={styles.btnContainer}>
              <ButtonCustom onClick={handleOpen} />
            </div>
          </div>
        </div>
      </div>
      {window.location.pathname !== "/topic/post" && open && (
        <Modal open={open} onClose={handleClose}>
          <div className={styles.centered}>
            <div className={styles.modal}>
              <Card cardHoverEffect={false}>
                <InviteModal setOpen={setOpen} />
              </Card>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default PostDetailView;
