import TimelineComponent from "../../components/Timeline/Timeline.component";
import ListBox from "../../components/ListBox/ListBox.component";
import ProfileCard from "../../components/ProfileCard/ProfileCard.component";
import FiltersCard from "../../components/FiltersCard/FiltersCard.component";
import styles from "./DashboardView.module.css";
import CreateNewPost from "../../components/CreateNewPost/CreateNewPost.component";
import { useAuth0 } from "@auth0/auth0-react";
import NavBar from "../../components/NavBar/NavBar.component";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { GroupResults } from "../../models/groupModel";
import { TopicResults } from "../../models/topicModel";
import { EventResults } from "../../models/eventModel";
import { getWindowSize } from "../../services/getWindowSize";

const DashboardView = () => {
  const { isAuthenticated } = useAuth0();
  const appContext = useContext(AppContext);
  const [windowSize, setWindowSize] = useState(getWindowSize());

  const maxNumOfContent = () => {
    const h = windowSize.innerHeight;
    if (h > 1000) return 4;
    if (h < 1000 && h > 900) return 3;
    if (h < 900 && h > 800) return 2;
    if (h < 800 && h > 700) return 1;
    if (h < 700) return 0;
  };

  const firstFewGroups = appContext?.groups.results.slice(0, maxNumOfContent());
  const firstFewTopics = appContext?.topics.results.slice(0, maxNumOfContent());
  const firstFewEvents = appContext?.events.results.slice(0, maxNumOfContent());

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

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

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
              <TimelineComponent />
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
