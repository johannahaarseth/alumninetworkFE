import { IPostSummary } from "../../interfaces/IPostSummary";
import PostCard from "../PostCard/PostCard.component";

type TimelineProps = {
  posts: IPostSummary[] | undefined;
};

const test = [
  {
    postId: 0,
    postTitle: "string",
    postBody: "string",
    target: {
      targetType: "string",
      id: 0,
      name: "string",
    },
    createdBy: {
      userId: 0,
      name: "string",
    },
    commentCount: 0,
  },
  {
    postId: 0,
    postTitle: "string",
    postBody: "string",
    target: {
      targetType: "string",
      id: 0,
      name: "string",
    },
    createdBy: {
      userId: 0,
      name: "string",
    },
    commentCount: 0,
  },
  {
    postId: 0,
    postTitle: "string",
    postBody: "string",
    target: {
      targetType: "string",
      id: 0,
      name: "string",
    },
    createdBy: {
      userId: 0,
      name: "string",
    },
    commentCount: 0,
  },
  {
    postId: 0,
    postTitle: "string",
    postBody: "string",
    target: {
      targetType: "string",
      id: 0,
      name: "string",
    },
    createdBy: {
      userId: 0,
      name: "string",
    },
    commentCount: 0,
  },
  {
    postId: 0,
    postTitle: "string",
    postBody: "string",
    target: {
      targetType: "string",
      id: 0,
      name: "string",
    },
    createdBy: {
      userId: 0,
      name: "string",
    },
    commentCount: 0,
  },
  {
    postId: 0,
    postTitle: "string",
    postBody: "string",
    target: {
      targetType: "string",
      id: 0,
      name: "string",
    },
    createdBy: {
      userId: 0,
      name: "string",
    },
    commentCount: 0,
  },
  {
    postId: 0,
    postTitle: "string",
    postBody: "string",
    target: {
      targetType: "string",
      id: 0,
      name: "string",
    },
    createdBy: {
      userId: 0,
      name: "string",
    },
    commentCount: 0,
  },
  {
    postId: 0,
    postTitle: "string",
    postBody: "string",
    target: {
      targetType: "string",
      id: 0,
      name: "string",
    },
    createdBy: {
      userId: 0,
      name: "string",
    },
    commentCount: 0,
  },
  {
    postId: 0,
    postTitle: "string",
    postBody: "string",
    target: {
      targetType: "string",
      id: 0,
      name: "string",
    },
    createdBy: {
      userId: 0,
      name: "string",
    },
    commentCount: 0,
  },
  {
    postId: 0,
    postTitle: "string",
    postBody: "string",
    target: {
      targetType: "string",
      id: 0,
      name: "string",
    },
    createdBy: {
      userId: 0,
      name: "string",
    },
    commentCount: 0,
  },
  {
    postId: 0,
    postTitle: "string",
    postBody: "string",
    target: {
      targetType: "string",
      id: 0,
      name: "string",
    },
    createdBy: {
      userId: 0,
      name: "string",
    },
    commentCount: 0,
  },
  {
    postId: 0,
    postTitle: "string",
    postBody: "string",
    target: {
      targetType: "string",
      id: 0,
      name: "string",
    },
    createdBy: {
      userId: 0,
      name: "string",
    },
    commentCount: 0,
  },
];

const Timeline = ({ posts }: TimelineProps) => {
  const timelineContent = test.map((post, i) => {
    return <PostCard post={post} key={i} />;
  });

  return <div>{timelineContent}</div>;
};

export default Timeline;
