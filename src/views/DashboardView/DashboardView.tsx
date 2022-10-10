import TimelineComponent from "../../components/Timeline/Timeline.component";
import ListBox from "../../components/ListBox/ListBox.component";
import ProfileCard from "../../components/ProfileCard/ProfileCard.component";
import FiltersCard from "../../components/FiltersCard/FiltersCard.component";
import styles from "./DashboardView.module.css";

const DashboardView = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.groupsTopicsEventsListsColumn}>
        <ListBox />
        <ListBox />
        <ListBox />
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
