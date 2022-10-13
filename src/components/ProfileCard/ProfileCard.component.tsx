import React from "react";
import styles from "./ProfileCard.module.css";
import Card from "../Card/Card.component";
import ProfilePic from "../ProfilePic/ProfilePic.component";
import { useAuth0 } from "@auth0/auth0-react";

const ProfileCard = () => {
  const { user } = useAuth0();

  return (
    <Card cardHoverEffect={true}>
      <div className={styles.headerBox}></div>
      <div className={styles.profile}>{<ProfilePic />}</div>
      <div className={styles.infoBox}>
        <p className={styles.text}>{user?.name} </p>
        <p className={styles.text}>{user?.email} </p>
        <p className={styles.text}>Status message</p>
        <div className={`${styles.textBox} ${styles.shortBioBox}`}></div>
        <div className={`${styles.textBox} ${styles.funFactBox}`}></div>
      </div>
    </Card>
  );
};

export default ProfileCard;
