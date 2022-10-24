import "./Global.css";
import LoginView from "./views/LoginView/LoginView";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DashboardView from "./views/DashboardView/DashboardView";
import ProfileView from "./views/ProfileView/ProfileView";
import { useAuth0 } from "@auth0/auth0-react";
import PostView from "./views/PostView/PostView";
import PostDetailView from "./views/PostDetailView/PostDetailView";
import CalendarView from "./views/CalendarView/CalendarView";
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
								isAuthenticated ? (
									<Navigate to="/dashboard" />
								) : (
									<LoginView />
								)
							}
						/>
						<Route
							path="*"
							element={
								isAuthenticated ? (
									<Navigate to="/dashboard" />
								) : (
									<LoginView />
								)
							}
						/>
						{isAuthenticated && (
							<Route
								path="/dashboard"
								element={<DashboardView />}
							/>
						)}
						{isAuthenticated && (
							<Route path="/profile" element={<ProfileView />} />
						)}
						{/* change afterwards to => path="/group/:id/" */}
						{isAuthenticated && (
							<Route path="/group/:id" element={<PostView />} />
						)}
						{/* change afterwards to => path="/topic/:id/" */}
						{isAuthenticated && (
							<Route path="/topic/:id" element={<PostView />} />
						)}
						{isAuthenticated && (
							<Route
								path="/user/:userId"
								element={<ProfileView />}
							/>
						)}

						{/* change afterwards to => path="/event/:id/" */}
						{isAuthenticated && (
							<Route path="/event/:id" element={<PostView />} />
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
						{/* change afterwards to => path="/group/:id/post/:id or something like that" */}
						{isAuthenticated && (
							<Route
								path="/group/post"
								element={<PostDetailView />}
							/>
						)}
						{/* change afterwards to => path="/topic/:id/post/:id or something like that" */}
						{isAuthenticated && (
							<Route
								path="/topic/post"
								element={<PostDetailView />}
							/>
						)}
						{/* change afterwards to => path="/event/:id/post/:id or something like that" */}
						{isAuthenticated && (
							<Route
								path="/event/post"
								element={<PostDetailView />}
							/>
						)}
						{isAuthenticated && (
							<Route
								path="/calendar"
								element={<CalendarView />}
							/>
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
