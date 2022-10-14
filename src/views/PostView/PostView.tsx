import CreateNewPost from "../../components/CreateNewPost/CreateNewPost.component";
import GroupCard from "../../components/GroupCard/GroupCard.component";
import NavBar from "../../components/NavBar/NavBar.component";
import TimelineComponent from "../../components/Timeline/Timeline.component";
import styles from "./PostView.module.css";

const PostView = () => {
  return (
    <>
      <NavBar />

      <div className={styles.container}>
        <div className={styles.profileView}>
          <div className={styles.emptyColumn}></div>
          <div className={styles.postsColumn}></div>
          <div className={styles.timelineColumn}>
            <CreateNewPost />
            <TimelineComponent />
          </div>
          <div className={styles.profileAndFilterColumn}>
            <GroupCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default PostView;
