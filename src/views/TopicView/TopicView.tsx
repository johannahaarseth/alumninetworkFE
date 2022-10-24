import NavBar from "../../components/NavBar/NavBar.component";
import React, { useEffect } from "react";
import styles from "./TopicView.module.css";
import { useApi } from "../../api/useApi";
import { ITopic } from "../../interfaces/ITopic";
import { apiClient } from "../../api/apiClient";
import { useParams } from "react-router-dom";
import TopicCard from "../../components/TopicCard/TopicCard.component";

const TopicView = () => {
	const { topicId } = useParams();

	const getTopic = (config: {}) =>
		apiClient.get<ITopic>("/group/" + topicId, config);

	const getTopicApi = useApi<ITopic>(getTopic, {} as ITopic);

	useEffect(() => {
		getTopicApi.request();
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
						<TopicCard topic={getTopicApi.data} />
					</div>
				</div>
			</div>
		</>
	);
};

export default TopicView;
