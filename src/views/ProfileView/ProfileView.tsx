import NavBar from "../../components/NavBar/NavBar.component";
import ProfileCard from "../../components/ProfileCard/ProfileCard.component";
import React, { useEffect } from "react";
import styles from "./ProfileView.module.css";
import { useApi } from "../../api/useApi";
import { IUserResponse } from "../../interfaces/IUserResponse";
import { apiClient } from "../../api/apiClient";

const ProfileView = () => {
  const getCurrentUser = (config: {}) =>
    apiClient.get<IUserResponse>("/user/current", config);
  const getUserApi = useApi<IUserResponse>(getCurrentUser, {} as IUserResponse);

  useEffect(() => {
    getUserApi.request().then();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.profileView}>
          <div className={styles.emptyColumn}></div>
          <div className={styles.postsColumn}></div>
          <div className={styles.postAndFilterColumn}>
            <ProfileCard
              status={getUserApi.data.status}
              bio={getUserApi.data.bio}
              funfact={getUserApi.data.funfact}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileView;
