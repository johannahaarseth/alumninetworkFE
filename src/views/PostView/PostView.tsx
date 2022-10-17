import Button from "../../components/Button/Button.component";
import CreateNewPost from "../../components/CreateNewPost/CreateNewPost.component";
import EventCard from "../../components/EventCard/EventCard.component";
import GroupCard from "../../components/GroupCard/GroupCard.component";
import NavBar from "../../components/NavBar/NavBar.component";
import TimelineComponent from "../../components/Timeline/Timeline.component";
import styles from "./PostView.module.css";

const PostView = () => {
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

            <Button className={styles.button}>
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
    </>
  );
};

export default PostView;
