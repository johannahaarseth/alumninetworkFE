import TimelineComponent from "../../components/Timeline/Timeline.component";
import ListBox from "../../components/ListBox/ListBox.component";
import ProfileCard from "../../components/ProfileCard/ProfileCard.component";
import FiltersCard from "../../components/FiltersCard/FiltersCard.component";
import styles from "./DashboardView.module.css";
import CreateNewPost from "../../components/CreateNewPost/CreateNewPost.component";
import { useApi } from "../../api/useApi";
import { getPosts } from "../../api/postsApi";
import { useEffect } from "react";
import { IPostResponse } from "../../interfaces/IPostResponse";
import { useAuth0 } from "@auth0/auth0-react";
import NavBar from "../../components/NavBar/NavBar.component";
import { IUserResponse } from "../../interfaces/IUserResponse";
import { getCurrentUser } from "../../api/userApi";

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
	const getUserApi = useApi<IUserResponse>(
		getCurrentUser,
		{} as IUserResponse
	);

	useEffect(() => {
		getPostsApi.request();
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		getUserApi.request();
		// eslint-disable-next-line
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
								posts={getPostsApi.data?.results}
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
				)}
			</div>
		</>
	);
};

export default DashboardView;
