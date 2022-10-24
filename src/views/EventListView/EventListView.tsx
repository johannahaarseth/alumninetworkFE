import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar.component";
import ListBox from "../../components/ListBox/ListBox.component";
import styles from "./EventListView.module.css";
import { apiClient } from "../../api/apiClient";
import { IEventResponse } from "../../interfaces/IEventResponse";
import { useEffect } from "react";
import { useApi } from "../../api/useApi";

const EventListView = () => {
	const { isAuthenticated, user } = useAuth0();

	const getEventApi = useApi<IEventResponse>(
		(config: {}) => apiClient.get<IEventResponse>("/event", config),
		{} as IEventResponse
	);

	useEffect(() => {
		getEventApi.request();
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
										title="Your Events"
										visibleSeeMoreBtn={false}
										grouptopicevent={
											getEventApi.data?.results
										}
										linkItems={"/event"}
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

export default EventListView;
