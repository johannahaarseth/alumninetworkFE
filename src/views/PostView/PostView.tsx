import { useState } from "react";
import Button from "../../components/Button/Button.component";
import CreateNewPost from "../../components/CreateNewPost/CreateNewPost.component";
import EventCard from "../../components/EventCard/EventCard.component";
import GroupCard from "../../components/GroupCard/GroupCard.component";
import NavBar from "../../components/NavBar/NavBar.component";
import RadioButton from "../../components/RadioButton/RadioButton.component";
import TimelineComponent from "../../components/Timeline/Timeline.component";
import styles from "./PostView.module.css";
import Modal from "../../components/Modal/Modal.component";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { locale } from "dayjs";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input/Input.component";

import TextField1 from "../../components/TextField/TextField.component";
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
            <TimelineComponent />
          </div>
          <div className={styles.profile}>
            {window.location.pathname === "/event" ? (
              <EventCard />
            ) : (
              <GroupCard />
            )}

            <Button className={styles.button} onClick={() => setIsOpen(true)}>
              {window.location.pathname === "/topic" ? (
                <p className={styles.newPost}>Join</p>
              ) : (
                <p className={styles.newPost}>Invite</p>
              )}
              <p className={styles.newPostPlus}>+</p>
            </Button>
          </div>
        </div>
      </div>
      {isOpen && (
        <Modal setIsOpen={setIsOpen}>
          <p className={styles.modalHeader}>Group title</p>
          <form className={styles.form}>
            <div>
              <Input placeholderText={`Search: name`} />
            </div>

            <div>
              <TextField1 placeholderText={`Add description`} />
            </div>
          </form>
        </Modal>
      )}
    </>
  );
};

export default PostView;
