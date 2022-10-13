import FiltersCard from "../../components/FiltersCard/FiltersCard.component";
import NavBar from "../../components/NavBar/NavBar.component";
import ProfileCard from "../../components/ProfileCard/ProfileCard.component";
import React from "react";
import profile from "../../../src/components/ProfileCard/ProfileCard.module.css";
import styles from "../DashboardView/DashboardView.module.css";

const ProfileView = () => {
  return (
    <>
      <NavBar />
      <div className={styles.dashboard}>
        <div className={profile.profileAndFilterColumn}>
          <ProfileCard />
          <FiltersCard />
        </div>
      </div>
    </>
  );
};

export default ProfileView;
