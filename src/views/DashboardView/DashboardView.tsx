import TimelineComponent from "../../components/Timeline/Timeline.component";
import ListBox from "../../components/ListBox/ListBox.component";
import ProfileCard from "../../components/ProfileCard/ProfileCard.component";
import FiltersCard from "../../components/FiltersCard/FiltersCard.component";
import styles from "./DashboardView.module.css";
import CreateNewPost from "../../components/CreateNewPost/CreateNewPost.component";
import { useApi } from "../../api/useApi";
import { useEffect, useState } from "react";
import { IPostResponse } from "../../interfaces/IPostResponse";
import NavBar from "../../components/NavBar/NavBar.component";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Fab, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { apiClient } from "../../api/apiClient";
import { IGroupResponse } from "../../interfaces/IGroupResponse";
import { ITopicResponse } from "../../interfaces/ITopicResponse";
import { IEventResponse } from "../../interfaces/IEventResponse";
import { IUserSummary } from "../../interfaces/IUserSummary";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
    },
  },
});

const DashboardView = () => {
  const [isFilterHidden, setIsFilterHidden] = useState(false);

  const filterHidden = () => {
    setIsFilterHidden(true);
    if (isFilterHidden) {
      setIsFilterHidden(false);
    }
  };

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
		apiClient.get<IUserSummary>("/user/current", config);

	const getUserApi = useApi<IUserSummary>(getCurrentUser, {} as IUserSummary);

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
		getTopicApi.request().then();
		getEventApi.request().then();
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		getPostsApi.request().then();
		getUserApi.request().then();
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
						{isFilterHidden && (
							<div className={styles.filter2}>
								<FiltersCard />
							</div>
						)}
						<TimelineComponent
							posts={posts.results}
							count={posts.count}
							handleGetNext={handleGetNext}
							handleGet={handleGet}
							hasMore={posts.next !== "" || getPostsApi.loading}
						/>
					</div>
					<div className={styles.profileAndFilterColumn}>
						<div className={styles.profile}>
							<ProfileCard
								status={getUserApi.data.status}
								bio={getUserApi.data.bio}
								funfact={getUserApi.data.funfact}
							/>
						</div>
						<div className={styles.filter}>
							<FiltersCard />
						</div>
						<div className={styles.filterIconFilter}>
							<ThemeProvider theme={theme}>
								<Fab
									variant="extended"
									color="primary"
									onClick={filterHidden}
									className={styles.filterIcon}
									style={{ borderRadius: 15, boxShadow: "0 0 0 0" }}
								>
									<FilterAltIcon sx={{ fontSize: 30 }} />
								</Fab>
							</ThemeProvider>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default DashboardView;
