import styles from "./PostEventCard.module.css";

const PostEventCard = () => {
  return (
    <div className={styles.eventCard}>
      <div className={styles.highlighter}></div>
      <div className={styles.postCard}>
        <div className={styles.card}>
          <p className={styles.postedInfo}>Posted in *Group* by *User*</p>
          <p className={styles.title}>Event Title</p>
          <p className={styles.date}>dd.mm.yy hh:mm</p>
          <div className={styles.postBody}></div>
          <p className={styles.comments}>42 comments</p>
        </div>
      </div>
    </div>
  );
};

export default PostEventCard;
