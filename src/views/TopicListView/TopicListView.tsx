import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar.component";
import ListBox from "../../components/ListBox/ListBox.component";
import styles from "./TopicListView.module.css";
import { useApi } from "../../api/useApi";
import { ITopicResponse } from "../../interfaces/ITopicResponse";
import { apiClient } from "../../api/apiClient";
import { useEffect } from "react";

const TopicListView = () => {
	const { isAuthenticated, user } = useAuth0();

	const getTopicApi = useApi<ITopicResponse>(
		(config: {}) =>
			apiClient.get<ITopicResponse>("/topic?offset=0&limit=3", config),
		{} as ITopicResponse
	);
	useEffect(() => {
		getTopicApi.request();
		// eslint-disable-next-line
	}, []);

	if (!user) {
		return <Navigate to="/" replace />;
	} else {
		return (
			<>
				{isAuthenticated && (
					<>
						<NavBar />
						<div className={styles.container}>
							<div className={styles.list}>
								<div className={styles.leftColumn}></div>
								<div className={styles.middleColumn}>
									<ListBox
										title="All topics"
										visibleSeeMoreBtn={false}
										grouptopicevent={
											getTopicApi.data?.results
										}
										linkItems={"/topic"}
									/>
								</div>
								<div className={styles.rightColumn}></div>
							</div>
						</div>
					</>
				)}
			</>
		);
	}
};

export default TopicListView;
