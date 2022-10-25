import ListBox from "../../components/ListBox/ListBox.component";
import { apiClient } from "../../api/apiClient";
import { IEventResponse } from "../../interfaces/IEventResponse";
import { useEffect } from "react";
import { useApi } from "../../api/useApi";
import ListViewComponent from "../../components/ListViewComponent/ListView.component";

const EventListView = () => {
	const getEventApi = useApi<IEventResponse>(
		(config: {}) =>
			apiClient.get<IEventResponse>("/event?offset=0&limit=1000", config),
		{} as IEventResponse
	);

	useEffect(() => {
		getEventApi.request().then();
		// eslint-disable-next-line
	}, []);

	return (
		<ListViewComponent>
			<ListBox
				title="Your Events"
				visibleSeeMoreBtn={false}
				grouptopicevent={getEventApi.data?.results}
				linkItems={"/event"}
			/>
		</ListViewComponent>
	);
};

export default EventListView;
