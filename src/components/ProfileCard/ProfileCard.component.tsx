import React from "react";
import styles from "./ProfileCard.module.css";
import Card from "../Card/Card.component";
import ProfilePic from "../ProfilePic/ProfilePic.component";
import { useAuth0 } from "@auth0/auth0-react";

const ProfileCard = () => {
  const { user } = useAuth0();

  return (
    <Card cardHoverEffect={false}>
      <div className={styles.headerBox}></div>
      <div className={styles.profile}>{<ProfilePic />}</div>
      <div className={styles.infoBox}>
        {user?.name === user?.email ? (
          <p className={styles.text}>Email: {user?.email} </p>
        ) : (
          <p className={styles.text}>
            Name: {user?.name} <br></br>
            <br></br>Email: {user?.email}
          </p>
        )}
        <p className={styles.text}>Status message</p>
        <div className={`${styles.textBox} ${styles.shortBioBox}`}></div>
        <div className={`${styles.textBox} ${styles.funFactBox}`}></div>
      </div>
    </Card>
  );
};

export default ProfileCard;
