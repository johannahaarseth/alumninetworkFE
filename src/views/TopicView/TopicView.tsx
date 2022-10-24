import NavBar from "../../components/NavBar/NavBar.component";
import ProfileCard from "../../components/ProfileCard/ProfileCard.component";
import React, { useEffect } from "react";
import styles from "./TopicView.module.css";
import { useApi } from "../../api/useApi";
import { IUserResponse } from "../../interfaces/IUserResponse";
import { getCurrentUser } from "../../api/userApi";

const TopicView = () => {
	const getUserApi = useApi<IUserResponse>(
		getCurrentUser,
		{} as IUserResponse
	);

	useEffect(() => {
		getUserApi.request();
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

export default TopicView;
