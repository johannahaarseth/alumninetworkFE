import React from "react";
import styles from "./ProfileCard.module.css";
import Card from "../Card/Card.component";
import ProfilePic from "../ProfilePic/ProfilePic.component";
import { useAuth0 } from "@auth0/auth0-react";
import { UseUser } from "../../context/useUser";

const ProfileCard = () => {
  const { picture, auth0Id, name, email, bio, funfact, status} = UseUser();

  const [bioState, setBioState] = bio;
  const [funfactState, setFunfactState] = funfact;
  const [statusState, setStatusState] = status;

  return (
    <Card cardHoverEffect={false}>
      <div className={styles.headerBox}></div>
      <div className={styles.profile}>{<ProfilePic />}</div>
      <div className={styles.infoBox}>
        {name === email ? (
          <p className={styles.text}>Email: {email} </p>
        ) : (
          <p className={styles.text}>
            Name: {name} <br></br>
            <br></br>Email: {email}
          </p>
        )}
        <p className={styles.text}>{statusState}</p>
        <div className={`${styles.textBox} ${styles.shortBioBox}`}>{bioState}</div>
        <div className={`${styles.textBox} ${styles.funFactBox}`}>{funfactState}</div>
      </div>
    </Card>
  );
};

export default ProfileCard;
