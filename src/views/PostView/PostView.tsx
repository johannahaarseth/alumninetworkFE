import CreateNewPost from "../../components/CreateNewPost/CreateNewPost.component";
import EventCard from "../../components/EventCard/EventCard.component";
import GroupCard from "../../components/GroupCard/GroupCard.component";
import NavBar from "../../components/NavBar/NavBar.component";
import TimelineComponent from "../../components/Timeline/Timeline.component";
import styles from "./PostView.module.css";
import ButtonCustom from "../../components/ButtonCustom/ButtonCustom";

const PostView = () => {
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
              <ButtonCustom />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostView;
