import TimelineComponent from "../../components/Timeline/Timeline.component";
import ListBox from "../../components/ListBox/ListBox.component";
import ProfileCard from "../../components/ProfileCard/ProfileCard.component";
import FiltersCard from "../../components/FiltersCard/FiltersCard.component";
import styles from "./DashboardView.module.css";
import CreateNewPost from "../../components/CreateNewPost/CreateNewPost.component";
import { useApi } from "../../api/useApi";
import { getPosts, getPostsGeneric } from "../../api/postsApi";
import { useEffect, useState } from "react";
import { IPostResponse } from "../../interfaces/IPostResponse";
import { useAuth0 } from "@auth0/auth0-react";
import NavBar from "../../components/NavBar/NavBar.component";

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
	//   );
	// };

	const getPostsApi = useApi<IPostResponse>(getPosts, {} as IPostResponse);
	const getPostsGenericApi = useApi<IPostResponse>(getPostsGeneric, {
		count: 0,
		next: "",
		results: [],
	} as IPostResponse);
	const [posts, setPosts] = useState<IPostResponse>({
		count: 0,
		next: "",
		results: [],
	} as IPostResponse);

	const handleGetNext = () => {
		if (posts.next !== "") {
			console.log(posts.next);
			getPostsGenericApi.request({ url: posts.next }).then(() => {
				setPosts({
					count: getPostsGenericApi.data.count ?? 0,
					next: getPostsGenericApi.data.next ?? "",
					results: [
						...posts.results,
						...getPostsGenericApi.data?.results,
					],
				} as IPostResponse);
			});
		}
	};

	useEffect(() => {
		setPosts({
			count: getPostsApi.data.count ?? 0,
			next: getPostsApi.data.next ?? "",
			results: getPostsApi.data?.results ?? [],
		} as IPostResponse);
	}, [getPostsApi.data]);

	useEffect(() => {
		if (Object.keys(getPostsApi.data).length === 0) {
			getPostsApi.request();
		}
	}, []);

	return (
		<>
			<NavBar />
			<div className={styles.container}>
				{isAuthenticated && (
					<div className={styles.dashboard}>
						<div className={styles.groupsTopicsEventsListsColumn}>
							<ListBox title="Groups" visibleSeeMoreBtn={true}>
								{/*{firstFewGroupsJsx!}*/}
							</ListBox>
							<ListBox title="Topics" visibleSeeMoreBtn={true}>
								{/*{firstFewTopicsJsx!}*/}
							</ListBox>
							<ListBox title="Events" visibleSeeMoreBtn={true}>
								{/*{firstFewEventsJsx!}*/}
							</ListBox>
						</div>
						<div className={styles.timelineColumn}>
							<CreateNewPost />
							<TimelineComponent
								posts={posts.results}
								count={posts.count}
								handleGetNext={handleGetNext}
							/>
						</div>
						<div className={styles.profileAndFilterColumn}>
							<ProfileCard />
							<FiltersCard />
						</div>
					</div>
				)}
			</div>
		</>
	);
};

export default DashboardView;
