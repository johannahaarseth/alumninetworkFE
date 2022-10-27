import ListBox from "../../components/ListBox/ListBox.component";
import { apiClient } from "../../api/apiClient";
import { IGroupResponse } from "../../interfaces/IGroupResponse";
import { useEffect } from "react";
import { useApi } from "../../api/useApi";
import ListViewComponent from "../../components/ListViewComponent/ListView.component";

const GroupListView = () => {
	const getGroupApi = useApi<IGroupResponse>(
		(config: {}) =>
			apiClient.get<IGroupResponse>("/group?offset=0&limit=1000", config),
		{} as IGroupResponse
	);

	useEffect(() => {
		getGroupApi.request().then();
		// eslint-disable-next-line
	}, []);

	return (
		<ListViewComponent>
			<ListBox
				title="All groups"
				visibleSeeMoreBtn={false}
				grouptopicevent={getGroupApi.data?.results}
				linkItems={"/group"}
			/>
		</ListViewComponent>
	);
};

export default GroupListView;
