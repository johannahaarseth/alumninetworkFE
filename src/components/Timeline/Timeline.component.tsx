import PostCard from "../PostCard/PostCard.component";
import PostEventCard from "../PostEventCard/PostEventCard.component";

const TimelineComponent = () => {
  const dummyArray = [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0];
  const timelineContent = dummyArray.map((e, i) => {
    return e ? <PostEventCard key={i} /> : <PostCard key={i} />;
  });

  return <div>{timelineContent}</div>;
};

export default TimelineComponent;
