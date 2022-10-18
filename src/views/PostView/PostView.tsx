import { useState } from "react";
import Button from "../../components/Button/Button.component";
import CreateNewPost from "../../components/CreateNewPost/CreateNewPost.component";
import EventCard from "../../components/EventCard/EventCard.component";
import GroupCard from "../../components/GroupCard/GroupCard.component";
import NavBar from "../../components/NavBar/NavBar.component";
import TimelineComponent from "../../components/Timeline/Timeline.component";
import styles from "./PostView.module.css";
import Modal from "../../components/Modal/Modal.component";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input/Input.component";
import TextField from "../../components/TextField/TextField.component";
import { Avatar, Stack } from "@mui/material";
import ProfilePic from "../../components/ProfilePic/ProfilePic.component";
const PostView = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
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
      {isOpen && (
        <Modal setIsOpen={setIsOpen}>
          <div style={{ display: "flex" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                paddingRight: "75%",
              }}
            >
              <p>"Title"</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className={styles.closeButton}>
                <Button onClick={() => setIsOpen(false)}>
                  <p>Close X</p>
                </Button>
              </div>
            </div>
          </div>

          <form className={styles.form}>
            <div>
              <Input placeholderText={`Search`} />
            </div>

            <div className={styles.textBox}>
              <Stack direction="row" spacing={"45%"}>
                <Stack direction="row">
                  <div className={styles.profilepic}>
                    <ProfilePic />
                  </div>
                  <p>username</p>
                </Stack>
                <div>
                  <Button>
                    <p>Invite +</p>
                  </Button>
                </div>
              </Stack>
            </div>
          </form>
        </Modal>
      )}
    </>
  );
};

export default PostView;
