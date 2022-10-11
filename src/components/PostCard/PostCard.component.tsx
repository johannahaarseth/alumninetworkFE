import styles from "./PostCard.module.css";
import Card from "../Card/Card.component";

const PostCard = () => {
  return (
    <Card isSticky={false}>
      <p className={styles.postedInfo}>Posted in *Group* by *User*</p>
      <p className={styles.title}>Title</p>
      <div className={styles.postBody}></div>
      <p className={styles.comments}>42 comments</p>
    </Card>
  );
};

export default PostCard;
