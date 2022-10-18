import TimelineComponent from "../../components/Timeline/Timeline.component";
import ListBox from "../../components/ListBox/ListBox.component";
import ProfileCard from "../../components/ProfileCard/ProfileCard.component";
import FiltersCard from "../../components/FiltersCard/FiltersCard.component";
import styles from "./DashboardView.module.css";
import CreateNewPost from "../../components/CreateNewPost/CreateNewPost.component";
import { useApi } from "../../api/useApi";
import { getPosts } from "../../api/postsApi";
import { useEffect } from "react";
import { IPostResponse } from "../../interfaces/IPostResponse";

import { useAuth0 } from "@auth0/auth0-react";
import NavBar from "../../components/NavBar/NavBar.component";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { GroupResults } from "../../models/groupModel";
import { TopicResults } from "../../models/topicModel";
import { EventResults } from "../../models/eventModel";

const DashboardView = () => {
  const { isAuthenticated } = useAuth0();
  const appContext = useContext(AppContext);

  const firstFewGroups = appContext?.groups.results.slice(0, 4);
  const firstFewTopics = appContext?.topics.results.slice(0, 4);
  const firstFewEvents = appContext?.events.results.slice(0, 4);

  const listBoxContent = (
    contentArray: GroupResults[] | TopicResults[] | EventResults[]
  ): JSX.Element | JSX.Element[] => {
    return contentArray.map(
      (e: GroupResults | TopicResults | EventResults, i: number) => {
        return (
          <div className={styles.itemBox} key={i}>
            <p>{e.name}</p>
          </div>
        );
      }
    );
  };

  const firstFewGroupsJsx = listBoxContent(firstFewGroups!);
  const firstFewTopicsJsx = listBoxContent(firstFewTopics!);
  const firstFewEventsJsx = listBoxContent(firstFewEvents!);

  const getPostsApi = useApi<IPostResponse>(getPosts);

  useEffect(() => {
    getPostsApi.request().then(() => {});
  }, [getPostsApi]);

  return (
    <>
      <NavBar />
      <div className={styles.container}>
        {isAuthenticated && (
          <div className={styles.dashboard}>
            <div className={styles.groupsTopicsEventsListsColumn}>
              <ListBox
                title={appContext?.titles.titles.groups!}
                visibleSeeMoreBtn={true}
                data={appContext?.groups!}
              >
                {firstFewGroupsJsx!}
              </ListBox>
              <ListBox
                title={appContext?.titles.titles.topics!}
                visibleSeeMoreBtn={true}
                data={appContext?.topics!}
              >
                {firstFewTopicsJsx!}
              </ListBox>
              <ListBox
                title={appContext?.titles.titles.events!}
                visibleSeeMoreBtn={true}
                data={appContext?.events!}
              >
                {firstFewEventsJsx!}
              </ListBox>
            </div>
            <div className={styles.timelineColumn}>
              <CreateNewPost />
              <TimelineComponent posts={getPostsApi.data?.results} />
            </div>
            <div className={styles.profileAndFilterColumn}>
              <ProfileCard />
              <FiltersCard />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DashboardView;
