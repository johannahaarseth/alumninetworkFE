import { useEffect } from "react";
import { useApi } from "../../api/useApi";
import { useParams } from "react-router-dom";
import { IEvent } from "../../interfaces/IEvent";
import { apiClient } from "../../api/apiClient";
import EventCard from "../../components/EventCard/EventCard.component";
import InfoView from "../../components/InfoViewWrapper/InfoView.component";

const EventView = () => {
	const { eventId } = useParams();

	const getEvent = (config: {}) =>
		apiClient.get<IEvent>("/event/" + eventId, config);

	const getEventApi = useApi<IEvent>(getEvent, {} as IEvent);

	useEffect(() => {
		getEventApi.request().then();
		// eslint-disable-next-line
	}, []);

	return <InfoView rightContentCol={<EventCard event={getEventApi.data} />} />;
};

export default EventView;
