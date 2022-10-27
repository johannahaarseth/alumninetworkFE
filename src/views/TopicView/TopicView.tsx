import { useEffect, useState } from "react";
import { useApi } from "../../api/useApi";
import { ITopic } from "../../interfaces/ITopic";
import { useParams } from "react-router-dom";
import { apiClient } from "../../api/apiClient";
import TopicCard from "../../components/TopicCard/TopicCard.component";
import InfoView from "../../components/InfoViewWrapper/InfoView.component";
import TimelineComponent from "../../components/Timeline/Timeline.component";
import { IPostResponse } from "../../interfaces/IPostResponse";

const TopicView = () => {
	const { topicId } = useParams();

	const getTopicApi = useApi<ITopic>(
		(config: {}) => apiClient.get<ITopic>("/topic/" + topicId, config),
		{} as ITopic
	);

	const [posts, setPosts] = useState<IPostResponse>({
		count: 0,
		next: "",
		results: [],
	} as IPostResponse);

	const getPosts = (config: {}) =>
		apiClient.get<IPostResponse>(
			"topic/" + topicId + "/post?offset=0&limit=20",
			config
		);

	const getPostsApi = useApi<IPostResponse>(getPosts, {} as IPostResponse);

	const getPostsNext = (config: {}) =>
		apiClient.get<IPostResponse>(posts.next, config);

	const getPostsNextApi = useApi<IPostResponse>(getPostsNext, {
		count: 0,
		next: "",
		results: [],
	} as IPostResponse);

	const handleGetNext = () => {
		getPostsNextApi.request().then();
	};

	const handleGet = () => {
		getPostsApi.request().then();
	};

	useEffect(() => {
		setPosts({
			count: getPostsNextApi.data.count ?? 0,
			next: getPostsNextApi.data.next ?? "",
			results: [...posts.results, ...getPostsNextApi.data?.results],
		} as IPostResponse);
		// eslint-disable-next-line
	}, [getPostsNextApi.data]);

	useEffect(() => {
		setPosts({
			count: getPostsApi.data.count ?? 0,
			next: getPostsApi.data.next ?? "",
			results: getPostsApi.data?.results ?? [],
		} as IPostResponse);
	}, [getPostsApi.data]);

	useEffect(() => {
		getTopicApi.request().then();
		getPostsApi.request().then();
		// eslint-disable-next-line
	}, []);

	const middleContentCol = (
		<>
			<TimelineComponent
				posts={posts.results}
				count={posts.count}
				handleGetNext={handleGetNext}
				handleGet={handleGet}
				hasMore={posts.next !== "" || getPostsApi.loading}
			/>
		</>
	);

	return (
		<InfoView
			middleContentCol={
				getPostsApi.loading ? <p>Loading...</p> : middleContentCol
			}
			rightContentCol={<TopicCard topic={getTopicApi.data} />}
		/>
	);
};

export default TopicView;
