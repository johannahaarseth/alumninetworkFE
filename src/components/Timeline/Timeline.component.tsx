import { IPostResponse } from "../../interfaces/IPostResponse";
import { IPostSummary } from "../../interfaces/IPostSummary";
import PostCard from "../PostCard/PostCard.component";
import PostEventCard from "../PostEventCard/PostEventCard.component";

type TimelineProps = {
  posts : IPostSummary[] | undefined;
};

const Timeline = ({posts} : TimelineProps) => {
  const timelineContent = posts?.map((post, i) => {
    return <PostCard post={post} key={i}/>;
  });

  return <div>{timelineContent}</div>;
};

export default Timeline;
