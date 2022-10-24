import NavBar from "../../components/NavBar/NavBar.component";
import ProfileCard from "../../components/ProfileCard/ProfileCard.component";
import React, { useEffect } from "react";
import styles from "./EventView.module.css";
import { useApi } from "../../api/useApi";
import { IUserResponse } from "../../interfaces/IUserResponse";
import { useParams } from "react-router-dom";
import { IEvent } from "../../interfaces/IEvent";
import { apiClient } from "../../api/apiClient";
import EventCard from "../../components/EventCard/EventCard.component";

const EventView = () => {
	const { eventId } = useParams();

	const getEvent = (config: {}) =>
		apiClient.get<IEvent>("/group/" + eventId, config);

	const getEventApi = useApi<IEvent>(getEvent, {} as IEvent);

	useEffect(() => {
		getEventApi.request();
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
						<EventCard event={getEventApi.data} />
					</div>
				</div>
			</div>
		</>
	);
};

export default EventView;
