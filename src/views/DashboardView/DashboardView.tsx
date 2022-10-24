import TimelineComponent from "../../components/Timeline/Timeline.component";
import ListBox from "../../components/ListBox/ListBox.component";
import ProfileCard from "../../components/ProfileCard/ProfileCard.component";
import FiltersCard from "../../components/FiltersCard/FiltersCard.component";
import styles from "./DashboardView.module.css";
import CreateNewPost from "../../components/CreateNewPost/CreateNewPost.component";
import { useApi } from "../../api/useApi";
import { useEffect, useState } from "react";
import { IPostResponse } from "../../interfaces/IPostResponse";
import { useAuth0 } from "@auth0/auth0-react";
import NavBar from "../../components/NavBar/NavBar.component";
import { IUserResponse } from "../../interfaces/IUserResponse";
import { apiClient } from "../../api/apiClient";
import { IGroupResponse } from "../../interfaces/IGroupResponse";
import { ITopicResponse } from "../../interfaces/ITopicResponse";
import { IEventResponse } from "../../interfaces/IEventResponse";

const DashboardView = () => {
	const { isAuthenticated } = useAuth0();

	// Html/tsx example for later (delete when dynamic data is implemented)
	// const listBoxContent = (
	//   contentArray: GroupResults[] | TopicResults[] | EventResults[]
	// ): JSX.Element | JSX.Element[] => {
	//   return contentArray.map(
	//     (e: GroupResults | TopicResults | EventResults, i: number) => {
	//       return (
	//         <div className={styles.itemBox} key={i}>
	//           <p>{e.name}</p>
	//         </div>
	//       );
	//     }
	//   );	// };

	const getGroupApi = useApi<IGroupResponse>(
		(config: {}) =>
			apiClient.get<IGroupResponse>("/group?offset=0&limit=3", config),
		{} as IGroupResponse
	);
	const getTopicApi = useApi<ITopicResponse>(
		(config: {}) =>
			apiClient.get<ITopicResponse>("/topic?offset=0&limit=3", config),
		{} as ITopicResponse
	);
	const getEventApi = useApi<IEventResponse>(
		(config: {}) =>
			apiClient.get<IEventResponse>("/event?offset=0&limit=3", config),
		{} as IEventResponse
	);

	useEffect(() => {
		getGroupApi.request();
		getTopicApi.request();
		getEventApi.request();
		// eslint-disable-next-line
	}, []);

	const [posts, setPosts] = useState<IPostResponse>({
		count: 0,
		next: "",
		results: [],
	} as IPostResponse);

	const getPosts = (config: {}) =>
		apiClient.get<IPostResponse>("/post?offset=0&limit=20", config);

	const getPostsApi = useApi<IPostResponse>(getPosts, {} as IPostResponse);

	const getPostsNext = (config: {}) =>
		apiClient.get<IPostResponse>(posts.next, config);

	const getPostsNextApi = useApi<IPostResponse>(getPostsNext, {
		count: 0,
		next: "",
		results: [],
	} as IPostResponse);

	const getCurrentUser = (config: {}) =>
		apiClient.get<IUserResponse>("/user/current", config);

	const getUserApi = useApi<IUserResponse>(
		getCurrentUser,
		{} as IUserResponse
	);

	const handleGetNext = () => {
		getPostsNextApi.request();
	};

	const handleGet = () => {
		getPostsApi.request();
	};

	useEffect(() => {
		setPosts({
			count: getPostsNextApi.data.count ?? 0,
			next: getPostsNextApi.data.next ?? "",
			results: [...posts.results, ...getPostsNextApi.data?.results],
		} as IPostResponse);
	}, [getPostsNextApi.data]);

	useEffect(() => {
		setPosts({
			count: getPostsApi.data.count ?? 0,
			next: getPostsApi.data.next ?? "",
			results: getPostsApi.data?.results ?? [],
		} as IPostResponse);
	}, [getPostsApi.data]);

	useEffect(() => {
		getPostsApi.request();
		getUserApi.request();
		// eslint-disable-next-line
	}, []);

	return (
		<>
			<NavBar />
			<div className={styles.container}>
				<div className={styles.dashboard}>
					<div className={styles.groupsTopicsEventsListsColumn}>
						<ListBox
							title="Groups"
							visibleSeeMoreBtn={true}
							grouptopicevent={getGroupApi.data?.results}
							linkItems={"/group"}
						/>
						<ListBox
							title="Topics"
							visibleSeeMoreBtn={true}
							grouptopicevent={getTopicApi.data?.results}
							linkItems={"/topic"}
						/>
						<ListBox
							title="Events"
							visibleSeeMoreBtn={true}
							grouptopicevent={getEventApi.data?.results}
							linkItems={"/event"}
						/>
					</div>
					<div className={styles.timelineColumn}>
						<CreateNewPost />
						<TimelineComponent
							posts={posts.results}
							count={posts.count}
							handleGetNext={handleGetNext}
							handleGet={handleGet}
							hasMore={posts.next !== "" || getPostsApi.loading}
						/>
					</div>
					<div className={styles.profileAndFilterColumn}>
						<ProfileCard
							status={getUserApi.data.status}
							bio={getUserApi.data.bio}
							funfact={getUserApi.data.funfact}
						/>
						<FiltersCard />
					</div>
				</div>
			</div>
		</>
	);
};

export default DashboardView;
