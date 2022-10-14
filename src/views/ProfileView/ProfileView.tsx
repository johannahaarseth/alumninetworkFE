import FiltersCard from "../../components/FiltersCard/FiltersCard.component";
import NavBar from "../../components/NavBar/NavBar.component";
import ProfileCard from "../../components/ProfileCard/ProfileCard.component";
import React from "react";
import styles from "./ProfileView.module.css";

const ProfileView = () => {
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.profileView}>
          <div className={styles.emptyColumn}></div>
          <div className={styles.postsColumn}></div>
          <div className={styles.profileAndFilterColumn}>
            <ProfileCard />
            <FiltersCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileView;
