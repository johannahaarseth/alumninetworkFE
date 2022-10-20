import { useState } from "react";
import CreateNewPost from "../../components/CreateNewPost/CreateNewPost.component";
import EventCard from "../../components/EventCard/EventCard.component";
import GroupCard from "../../components/GroupCard/GroupCard.component";
import NavBar from "../../components/NavBar/NavBar.component";
import TimelineComponent from "../../components/Timeline/Timeline.component";
import styles from "./PostView.module.css";
import Modal from "../../components/Modal/Modal.component";
import InviteModal from "../../components/InviteModalContent/InviteModal.component";
import ButtonCustom from "../../components/ButtonCustom/ButtonCustom";

const PostView = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <NavBar />

      <div className={styles.container}>
        <div className={styles.postView}>
          <div className={styles.emptyColumn}></div>
          <div className={styles.postColumn}>
            <CreateNewPost />
            <TimelineComponent posts={[]} />
          </div>
          <div className={styles.infoColumn}>
            {window.location.pathname === "/event" ? (
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
      {window.location.pathname !== "/topic" && isOpen && (
        <div className={styles.modalSize}>
          <Modal setIsOpen={setIsOpen}>
            <InviteModal setIsOpen={setIsOpen} />
          </Modal>
        </div>
      )}
    </>
  );
};

export default PostView;
