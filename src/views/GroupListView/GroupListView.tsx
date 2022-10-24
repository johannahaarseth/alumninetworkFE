import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar.component";
import ListBox from "../../components/ListBox/ListBox.component";
import styles from "./GroupListView.module.css";
import { apiClient } from "../../api/apiClient";
import { IGroupResponse } from "../../interfaces/IGroupResponse";
import { useEffect } from "react";
import { useApi } from "../../api/useApi";

const GroupListView = () => {
	const { isAuthenticated, user } = useAuth0();

	const getGroupApi = useApi<IGroupResponse>(
		(config: {}) =>
			apiClient.get<IGroupResponse>("/group?offset=0&limit=3", config),
		{} as IGroupResponse
	);

	useEffect(() => {
		getGroupApi.request();
		// eslint-disable-next-line
	}, []);

	//Trenger man denne sjekken??
	if (!user) {
		return <Navigate to="/" replace />;
	} else {
		return (
			<>
				{isAuthenticated && ( //Trenger man denne sjekken??
					<>
						<NavBar />
						<div className={styles.container}>
							<div className={styles.list}>
								<div className={styles.leftColumn}></div>
								<div className={styles.middleColumn}>
									<ListBox
										title="All groups"
										visibleSeeMoreBtn={false}
										grouptopicevent={
											getGroupApi.data?.results
										}
										linkItems={"/group"}
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

export default GroupListView;
