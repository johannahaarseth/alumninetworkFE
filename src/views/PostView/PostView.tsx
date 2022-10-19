import { useState } from "react";
import Button from "../../components/Button/Button.component";
import CreateNewPost from "../../components/CreateNewPost/CreateNewPost.component";
import EventCard from "../../components/EventCard/EventCard.component";
import GroupCard from "../../components/GroupCard/GroupCard.component";
import NavBar from "../../components/NavBar/NavBar.component";
import TimelineComponent from "../../components/Timeline/Timeline.component";
import styles from "./PostView.module.css";
import Modal from "../../components/Modal/Modal.component";
import InviteModalContent from "../../components/InviteModalContent/InviteModalContent.component";
import InviteModal from "../../components/InviteModalContent/InviteModal.component";

const PostView = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <NavBar />

      <div className={styles.container}>
        <div className={styles.timeline}>
          <div className={styles.postsColumn}></div>
          <div className={styles.timelineColumn}>
            <CreateNewPost />
            <TimelineComponent posts={[]} />
          </div>
          <div className={styles.profile}>
            {window.location.pathname === "/event" ? (
              <EventCard />
            ) : (
              <GroupCard />
            )}

            <Button className={styles.button} onClick={() => setIsOpen(true)}>
              {window.location.pathname === "/topic" ? (
                <p>Join</p>
              ) : (
                <p>Invite</p>
              )}
              <p>+</p>
            </Button>
          </div>
        </div>
      </div>
      {window.location.pathname !== "/topic" && isOpen && (
        <Modal setIsOpen={setIsOpen}>
          <InviteModal setIsOpen={setIsOpen} />
        </Modal>
      )}
    </>
  );
};

export default PostView;
