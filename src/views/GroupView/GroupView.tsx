import { useEffect, useState } from "react";
import { useApi } from "../../api/useApi";
import { IGroup } from "../../interfaces/IGroup";
import { useParams } from "react-router-dom";
import { apiClient } from "../../api/apiClient";
import GroupCard from "../../components/GroupCard/GroupCard.component";
import InfoView from "../../components/InfoViewWrapper/InfoView.component";
import TimelineComponent from "../../components/Timeline/Timeline.component";
import { IPostResponse } from "../../interfaces/IPostResponse";

const GroupView = () => {
	const { groupId } = useParams();

	const getGroupApi = useApi<IGroup>(
		(config: {}) => apiClient.get<IGroup>("/group/" + groupId, config),
		{} as IGroup
	);

	const [posts, setPosts] = useState<IPostResponse>({
		count: 0,
		next: "",
		results: [],
	} as IPostResponse);

	const getPosts = (config: {}) =>
		apiClient.get<IPostResponse>(
			"group/" + groupId + "/post?offset=0&limit=20",
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
		getGroupApi.request().then();
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
			rightContentCol={<GroupCard group={getGroupApi.data} />}
		/>
	);
};

export default GroupView;
