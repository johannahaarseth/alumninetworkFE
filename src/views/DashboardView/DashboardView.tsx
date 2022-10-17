import TimelineComponent from "../../components/Timeline/Timeline.component";
import ListBox from "../../components/ListBox/ListBox.component";
import ProfileCard from "../../components/ProfileCard/ProfileCard.component";
import FiltersCard from "../../components/FiltersCard/FiltersCard.component";
import styles from "./DashboardView.module.css";
import CreateNewPost from "../../components/CreateNewPost/CreateNewPost.component";
import { useAuth0 } from "@auth0/auth0-react";
import NavBar from "../../components/NavBar/NavBar.component";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const DashboardView = () => {
  const { isAuthenticated } = useAuth0();
  const appContext = useContext(AppContext);

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
                <div className={styles.itemBox}></div>
                <div className={`${styles.itemBox} ${styles.itemBoxTwo}`}></div>
                <div
                  className={`${styles.itemBox} ${styles.itemBoxThree}`}
                ></div>
              </ListBox>
              <ListBox
                title={appContext?.titles.titles.topics!}
                visibleSeeMoreBtn={true}
                data={appContext?.topics!}
              >
                <div className={styles.itemBox}></div>
                <div className={`${styles.itemBox} ${styles.itemBoxTwo}`}></div>
                <div
                  className={`${styles.itemBox} ${styles.itemBoxThree}`}
                ></div>
              </ListBox>

              <ListBox
                title={appContext?.titles.titles.events!}
                visibleSeeMoreBtn={true}
                data={appContext?.events!}
              >
                <div className={styles.itemBox}></div>
                <div className={`${styles.itemBox} ${styles.itemBoxTwo}`}></div>
                <div
                  className={`${styles.itemBox} ${styles.itemBoxThree}`}
                ></div>
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
