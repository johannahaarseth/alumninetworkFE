import "./Global.css";
import LoginView from "./views/LoginView/LoginView";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DashboardView from "./views/DashboardView/DashboardView";
import ProfileView from "./views/ProfileView/ProfileView";
import { useAuth0 } from "@auth0/auth0-react";
import PostDetailView from "./views/PostDetailView/PostDetailView";
import CalendarView from "./views/CalendarView/CalendarView";
import GroupView from "./views/GroupView/GroupView";
import TopicView from "./views/TopicView/TopicView";
import EventView from "./views/EventView/EventView";
import GroupListView from "./views/GroupListView/GroupListView";
import EventListView from "./views/EventListView/EventListView";
import TopicListView from "./views/TopicListView/TopicListView";

function App() {
	let { isAuthenticated, isLoading } = useAuth0();

	return !isLoading ? (
		<div className="App">
			<BrowserRouter>
				<div className="App">
					<Routes>
						<Route
							path="/login"
							element={
								isAuthenticated ? <Navigate to="/dashboard" /> : <LoginView />
							}
						/>
						<Route
							path="*"
							element={
								isAuthenticated ? <Navigate to="/dashboard" /> : <LoginView />
							}
						/>
						{isAuthenticated && (
							<Route path="/dashboard" element={<DashboardView />} />
						)}
						{isAuthenticated && (
							<Route path="/profile" element={<ProfileView />} />
						)}
						{isAuthenticated && (
							<Route path="/group/:groupId" element={<GroupView />} />
						)}
						{isAuthenticated && (
							<Route path="/topic/:topicId" element={<TopicView />} />
						)}
						{isAuthenticated && (
							<Route path="/event/:eventId" element={<EventView />} />
						)}

						{isAuthenticated && (
							<Route path="/group" element={<GroupListView />} />
						)}
						{isAuthenticated && (
							<Route path="/topic" element={<TopicListView />} />
						)}
						{isAuthenticated && (
							<Route path="/event" element={<EventListView />} />
						)}
						{isAuthenticated && (
							<Route path="/post/:postId" element={<PostDetailView />} />
						)}

						{isAuthenticated && (
							<Route path="/calendar" element={<CalendarView />} />
						)}
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	) : (
		<>
			<h1>Loading...</h1>
		</>
	);
}

export default App;
