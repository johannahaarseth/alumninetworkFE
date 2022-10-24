import NavBar from "../../components/NavBar/NavBar.component";
import ProfileCard from "../../components/ProfileCard/ProfileCard.component";
import React, { useEffect } from "react";
import styles from "./GroupView.module.css";
import { useApi } from "../../api/useApi";
import { IUserResponse } from "../../interfaces/IUserResponse";
import { IGroup } from "../../interfaces/IGroup";
import { useParams } from "react-router-dom";
import { apiClient } from "../../api/apiClient";
import GroupCard from "../../components/GroupCard/GroupCard.component";

const GroupView = () => {
	const { groupId } = useParams();

	const getGroup = (config: {}) =>
		apiClient.get<IGroup>("/group/" + groupId, config);

	const getGroupApi = useApi<IGroup>(getGroup, {} as IGroup);

	useEffect(() => {
		getGroupApi.request();
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
						<GroupCard group={getGroupApi.data} />
					</div>
				</div>
			</div>
		</>
	);
};

export default GroupView;
