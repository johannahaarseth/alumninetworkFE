import styles from "./PostCard.module.css";

const PostCard = () => {
  return (
    <div className={styles.card}>
      <p className={styles.postedInfo}>Posted in *Group* by *User*</p>
      <p className={styles.title}>Title</p>
      <div className={styles.postBody}>Post Body</div>
      <p className={styles.comments}>42 comments</p>
    </div>
  );
};

export default PostCard;
