import NavBar from "../../components/NavBar/NavBar.component";
import styles from "./PostDetailView.module.css";
import EventCard from "../../components/EventCard/EventCard.component";
import GroupCard from "../../components/GroupCard/GroupCard.component";
import Button from "../../components/Button/Button.component";
import PostEventCard from "../../components/PostEventCard/PostEventCard.component";
import Card from "../../components/Card/Card.component";
import ButtonCustom from "../../components/ButtonCustom/ButtonCustom";
import Input from "../../components/Input/Input.component";
import { useState } from "react";
import InviteModal from "../../components/InviteModalContent/InviteModal.component";
import Modal from "../../components/Modal/Modal.component";

const PostDetailView = () => {
  const [isOpen, setIsOpen] = useState(false);

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
            {window.location.pathname.match(/event/) ? (
              <EventCard />
            ) : (
              <GroupCard />
            )}
            <div className={styles.btnContainer}>
              <ButtonCustom setIsOpen={setIsOpen} />
            </div>
          </div>
        </div>
      </div>
      {window.location.pathname !== "/topic/post" && isOpen && (
        <div className={styles.modalSize}>
          <Modal setIsOpen={setIsOpen}>
            <InviteModal setIsOpen={setIsOpen} />
          </Modal>
        </div>
      )}
    </>
  );
};

export default PostDetailView;
