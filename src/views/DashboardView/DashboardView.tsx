import TimelineComponent from "../../components/Timeline/Timeline.component";
import ListBox from "../../components/ListBox/ListBox.component";
import ProfileCard from "../../components/ProfileCard/ProfileCard.component";
import FiltersCard from "../../components/FiltersCard/FiltersCard.component";

const DashboardView = () => {
  return (
    <div>
      <div>
        <ListBox />
        <ListBox />
        <ListBox />
      </div>
      <TimelineComponent />
      <div>
        <ProfileCard />
        <FiltersCard />
      </div>
    </div>
  );
};

export default DashboardView;
