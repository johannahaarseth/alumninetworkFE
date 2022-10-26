import { useEffect, useState } from "react";
import { useApi } from "../../api/useApi";
import { IEvent } from "../../interfaces/IEvent";
import { useParams } from "react-router-dom";
import { apiClient } from "../../api/apiClient";
import EventCard from "../../components/EventCard/EventCard.component";
import InfoView from "../../components/InfoViewWrapper/InfoView.component";
import TimelineComponent from "../../components/Timeline/Timeline.component";
import { IPostResponse } from "../../interfaces/IPostResponse";

const EventView = () => {
	const { eventId } = useParams();

	const getEventApi = useApi<IEvent>(
		(config: {}) => apiClient.get<IEvent>("/event/" + eventId, config),
		{} as IEvent
	);

	const [posts, setPosts] = useState<IPostResponse>({
		count: 0,
		next: "",
		results: [],
	} as IPostResponse);

	const getPosts = (config: {}) =>
		apiClient.get<IPostResponse>(
			"event/" + eventId + "/post?offset=0&limit=20",
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
		getEventApi.request().then();
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
			rightContentCol={<EventCard event={getEventApi.data} />}
		/>
	);
};

export default EventView;
