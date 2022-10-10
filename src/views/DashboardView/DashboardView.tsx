import TimelineComponent from "../../components/Timeline/Timeline.component";
import ListBox from "../../components/ListBox/ListBox.component";
import ProfileCard from "../../components/ProfileCard/ProfileCard.component";
import FiltersCard from "../../components/FiltersCard/FiltersCard.component";
import styles from "./DashboardView.module.css";

const DashboardView = () => {
  const listBoxTitles = {
    groups: "Groups",
    topics: "Topics",
    events: "Events",
  };

  return (
    <div className={styles.dashboard}>
      <div className={styles.groupsTopicsEventsListsColumn}>
        <ListBox title={listBoxTitles.groups} />
        <ListBox title={listBoxTitles.topics} />
        <ListBox title={listBoxTitles.events} />
      </div>
      <div className={styles.timelineColumn}>
        <TimelineComponent />
      </div>
      <div className={styles.profileAndFilterColumn}>
        <ProfileCard />
        <FiltersCard />
      </div>
    </div>
  );
};

export default DashboardView;
