import TimelineComponent from "../../components/Timeline/Timeline.component";
import ListBox from "../../components/ListBox/ListBox.component";
import ProfileCard from "../../components/ProfileCard/ProfileCard.component";
import FiltersCard from "../../components/FiltersCard/FiltersCard.component";
import styles from "./DashboardView.module.css";
import CreateNewPost from "../../components/CreateNewPost/CreateNewPost.component";
import { useApi } from "../../api/useApi";
import {getPosts} from "../../api/postsApi"
import { useEffect } from "react";
import { IPostResponse } from "../../interfaces/IPostResponse";

const DashboardView = () => {
  const listBoxTitles = {
    groups: "Groups",
    topics: "Topics",
    events: "Events",
  };

  const getPostsApi = useApi<IPostResponse>(getPosts);


  useEffect(() => {
    console.log(process.env.API_URL)
    getPostsApi.request();
  }, []);

  return (
    <div className={styles.dashboard}>
      <div className={styles.groupsTopicsEventsListsColumn}>
        <ListBox title={listBoxTitles.groups}>
          <div className={styles.itemBox}></div>
          <div className={`${styles.itemBox} ${styles.itemBoxTwo}`}></div>
          <div className={`${styles.itemBox} ${styles.itemBoxThree}`}></div>
        </ListBox>
        <ListBox title={listBoxTitles.topics}>
          <div className={styles.itemBox}></div>
          <div className={`${styles.itemBox} ${styles.itemBoxTwo}`}></div>
          <div className={`${styles.itemBox} ${styles.itemBoxThree}`}></div>
        </ListBox>
        <ListBox title={listBoxTitles.events}>
          <div className={styles.itemBox}></div>
          <div className={`${styles.itemBox} ${styles.itemBoxTwo}`}></div>
          <div className={`${styles.itemBox} ${styles.itemBoxThree}`}></div>
        </ListBox>
      </div>
      <div className={styles.timelineColumn}>
        <CreateNewPost />
        <TimelineComponent posts={getPostsApi.data?.results}/>
      </div>
      <div className={styles.profileAndFilterColumn}>
        <ProfileCard />
        <FiltersCard />
      </div>
    </div>
  );
};

export default DashboardView;
