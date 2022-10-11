import PostCard from "../PostCard/PostCard.component";

const TimelineComponent = () => {
  const dummyArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const timelineContent = dummyArray.map((_e, i) => {
    return <PostCard key={i} />;
  });
  return <>{timelineContent}</>;
};

export default TimelineComponent;
