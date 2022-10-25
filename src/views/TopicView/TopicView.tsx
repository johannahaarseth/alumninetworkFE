import { useEffect } from "react";
import { useApi } from "../../api/useApi";
import { ITopic } from "../../interfaces/ITopic";
import { apiClient } from "../../api/apiClient";
import { useParams } from "react-router-dom";
import TopicCard from "../../components/TopicCard/TopicCard.component";
import InfoView from "../../components/InfoViewWrapper/InfoView.component";

const TopicView = () => {
	const { topicId } = useParams();

	const getTopic = (config: {}) =>
		apiClient.get<ITopic>("/topic/" + topicId, config);

	const getTopicApi = useApi<ITopic>(getTopic, {} as ITopic);

	useEffect(() => {
		getTopicApi.request().then();
		// eslint-disable-next-line
	}, []);

	return <InfoView rightContentCol={<TopicCard topic={getTopicApi.data} />} />;
};

export default TopicView;
