import styles from "./ProfileCard.module.css";
import Card from "../Card/Card.component";
import ProfilePic from "../ProfilePic/ProfilePic.component";

const ProfileCard = () => {
  return (
    <Card cardHoverEffect={true}>
      <div className={styles.headerBox}></div>
      <div className={styles.profile}>
        <ProfilePic />
      </div>
      <div className={styles.infoBox}>
        <p className={styles.text}>Username</p>
        <p className={styles.text}>Status message</p>
        <div className={`${styles.textBox} ${styles.shortBioBox}`}></div>
        <div className={`${styles.textBox} ${styles.funFactBox}`}></div>
      </div>
    </Card>
  );
};

export default ProfileCard;
