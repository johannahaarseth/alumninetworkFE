import styles from "./PostCard.module.css";
import Card from "../Card/Card.component";
import { IPostSummary } from "../../interfaces/IPostSummary";

type PostCardProps = {
  post : IPostSummary
};

const PostCard = ({post} : PostCardProps) => {
  return (
    <Card cardHoverEffect={true}>
      <p className={styles.postedInfo}>{post.createdBy.name} to {post.target.name}</p>
      <p className={styles.title}>{post.postTitle}</p>
      <div className={styles.postBody}>{post.postBody}</div>
      <p className={styles.comments}>{post.commentCount} comments</p>
    </Card>
  );
};

export default PostCard;
