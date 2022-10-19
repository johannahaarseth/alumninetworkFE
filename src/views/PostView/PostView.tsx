import { useState } from "react";
import Button from "../../components/Button/Button.component";
import CreateNewPost from "../../components/CreateNewPost/CreateNewPost.component";
import EventCard from "../../components/EventCard/EventCard.component";
import GroupCard from "../../components/GroupCard/GroupCard.component";
import NavBar from "../../components/NavBar/NavBar.component";
import TimelineComponent from "../../components/Timeline/Timeline.component";
import styles from "./PostView.module.css";
import Modal from "../../components/Modal/Modal.component";
import InviteModal from "../../components/InviteModalContent/InviteModal.component";

const PostView = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isJoined, setIsJoined] = useState(false);
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
            {window.location.pathname === "/topic" ? (
              <Button
                className={styles.button}
                onClick={() => {
                  setIsJoined(true);
                }}
              >
                {!isJoined ? (
                  <>
                    <p>Join</p>
                    <p>+</p>
                  </>
                ) : (
                  <p>Joined</p>
                )}
              </Button>
            ) : (
              <Button className={styles.button} onClick={() => setIsOpen(true)}>
                <p>Invite</p>
                <p>+</p>
              </Button>
            )}
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
