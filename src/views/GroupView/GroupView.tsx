import { useEffect } from "react";
import { useApi } from "../../api/useApi";
import { IGroup } from "../../interfaces/IGroup";
import { useParams } from "react-router-dom";
import { apiClient } from "../../api/apiClient";
import GroupCard from "../../components/GroupCard/GroupCard.component";
import InfoView from "../../components/InfoViewWrapper/InfoView.component";

const GroupView = () => {
	const { groupId } = useParams();

	const getGroup = (config: {}) =>
		apiClient.get<IGroup>("/group/" + groupId, config);

	const getGroupApi = useApi<IGroup>(getGroup, {} as IGroup);

	useEffect(() => {
		getGroupApi.request().then();
		// eslint-disable-next-line
	}, []);

	return <InfoView rightContentCol={<GroupCard group={getGroupApi.data} />} />;
};

export default GroupView;
