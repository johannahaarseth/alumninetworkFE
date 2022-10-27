import styles from "./CreateNewPost.module.css";
import Card from "../Card/Card.component";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Input from "../Input/Input.component";
import RadioButton from "../RadioButton/RadioButton.component";
import TextField from "../TextField/TextField.component";
import Button from "../Button/Button.component";
import { useNavigate } from "react-router-dom";
import {
	FormControl,
	InputLabel,
	Select,
	OutlinedInput,
	MenuItem,
	Grid,
	SelectChangeEvent,
} from "@mui/material";
import { useApi } from "../../api/useApi";
import { apiClient } from "../../api/apiClient";
import { IGroupResponse } from "../../interfaces/IGroupResponse";
import { ITopicResponse } from "../../interfaces/ITopicResponse";
import { IEventResponse } from "../../interfaces/IEventResponse";
import { IPostGroup } from "../../interfaces/IPostGroup";
import { IUserResponse } from "../../interfaces/IUserResponse";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
};

const CreateNewPost = () => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const navigate = useNavigate();
	const [groupsTitle, setGroupsTitle] = useState("");
	const [topicsTitle, setTopicsTitle] = useState("");
	const [eventsTitle, setEventsTitle] = useState("");
	const [usersTitle, setUsersTitle] = useState("");

	const [postData, setPostData] = useState<IPostGroup | null>(null);
	const [status, setStatus] = useState(0); // 0: no show, 1: show yes, 2: show no.

	const radioHandler = (status: number) => {
		setStatus(status);
	};

	const getGroups = (config: {}) =>
		apiClient.get<IGroupResponse>("/group?offset=0&limit=100", config);
	const getGroupsApi = useApi<IGroupResponse>(getGroups, {} as IGroupResponse);

	const getTopics = (config: {}) =>
		apiClient.get<ITopicResponse>("/topic?offset=0&limit=100", config);
	const getTopicsApi = useApi<ITopicResponse>(getTopics, {} as ITopicResponse);

	const getEvents = (config: {}) =>
		apiClient.get<IEventResponse>("/event?offset=0&limit=100", config);
	const getEventsAPI = useApi<IEventResponse>(getEvents, {} as IEventResponse);

	const getUsers = (config: {}) =>
		apiClient.get<IUserResponse>("/user?offset=0&limit=100", config);
	const getUsersAPI = useApi<IUserResponse>(getUsers, {} as IUserResponse);

	const postGroup = (config: {}, data: {}) =>
		apiClient.post<IPostGroup>("/post", data, config);
	const postToGroupApi = useApi<IPostGroup>(postGroup, {} as IPostGroup);

	const handleChangeGroups = (event: SelectChangeEvent) => {
		setGroupsTitle(event.target.value);
		setPostData({
			...postData!,
			targetGroupId: parseInt(event.target.value),
		});
	};

	const handleChangeTopics = (event: SelectChangeEvent) => {
		setTopicsTitle(event.target.value);
		setPostData({ ...postData!, targetTopicId: parseInt(event.target.value) });
	};
	const handleChangeEvents = (event: SelectChangeEvent) => {
		setEventsTitle(event.target.value);
		setPostData({ ...postData!, targetEventId: parseInt(event.target.value) });
	};
	const handleChangeUsers = (event: SelectChangeEvent) => {
		setUsersTitle(event.target.value);
		setPostData({ ...postData!, targetUserId: parseInt(event.target.value) });
	};

	const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setPostData({ ...postData!, postTitle: event.target.value });
	};
	const handleBodyChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setPostData({ ...postData!, postBody: event.target.value });
	};

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		postToGroupApi.request({ data: postData });
		handleClose();
	};

	useEffect(() => {
		getGroupsApi.request();
		getTopicsApi.request();
		getEventsAPI.request();
		getUsersAPI.request();
	}, []);

	return (
		<>
			<Card cardHoverEffect={true}>
				<button className={styles.createNewPostButton} onClick={handleOpen}>
					<p className={styles.newPost}>Create new post</p>
					<p className={styles.newPostPlus}>+</p>
				</button>
			</Card>
			{open && (
				<Modal open={open} onClose={handleClose}>
					<div className={styles.centered}>
						<div className={styles.modal}>
							<Card cardHoverEffect={false}>
								<p className={styles.modalHeader}>Create new post</p>
								<form className={styles.form} onSubmit={handleSubmit}>
									<Input
										placeholderText={"Add post title"}
										onChange={handleTitleChange}
									/>
									<p>Post to:</p>
									<div className={styles.radioButtons}>
										<RadioButton
											valueProp={"Group"}
											isChecked={status === 0}
											onChange={(e) => radioHandler(0)}
										/>
										<RadioButton
											valueProp={"Event"}
											isChecked={status === 1}
											onChange={(e) => radioHandler(1)}
										/>
										<RadioButton
											valueProp={"Person"}
											isChecked={status === 2}
											onChange={(e) => radioHandler(2)}
										/>
									</div>

									<Grid
										container
										rowSpacing={1}
										columnSpacing={{ xs: 1, sm: 2, md: 3 }}
									>
										{status === 0 && (
											<Grid item xs={5}>
												<FormControl sx={{ m: 1, width: 180 }}>
													<InputLabel
														id="demo-multiple-name-label"
														defaultValue={""}
														sx={{
															color: "#000",
															"&.Mui-focused": {
																color: "#000",
															},
														}}
													>
														Groups
													</InputLabel>
													<Select
														id="demo-multiple-name"
														value={groupsTitle}
														onChange={handleChangeGroups}
														defaultValue={""}
														input={<OutlinedInput label="Groups" />}
														MenuProps={MenuProps}
														sx={{
															"& fieldset": {
																borderColor: "#16697a",
															},
															"&:hover .MuiOutlinedInput-notchedOutline": {
																borderColor: "#16697a",
																background: "#ede7e3",
															},
															"&.Mui-focused .MuiOutlinedInput-notchedOutline":
																{
																	borderColor: "#16697a",
																},
														}}
													>
														{getGroupsApi.data.results.map((data) => (
															<MenuItem key={data.groupId} value={data.groupId}>
																{data.name}
															</MenuItem>
														))}
													</Select>
												</FormControl>
											</Grid>
										)}

										{status === 1 && (
											<Grid item xs={5}>
												<FormControl sx={{ m: 1, width: 180 }}>
													<InputLabel
														id="demo-multiple-name-label"
														defaultValue={""}
														sx={{
															color: "#000",
															"&.Mui-focused": {
																color: "#000",
															},
														}}
													>
														Events
													</InputLabel>
													<Select
														id="demo-multiple-name"
														value={eventsTitle}
														onChange={handleChangeEvents}
														defaultValue={""}
														input={<OutlinedInput label="Events" />}
														MenuProps={MenuProps}
														sx={{
															"& fieldset": {
																borderColor: "#16697a",
															},
															"&:hover .MuiOutlinedInput-notchedOutline": {
																borderColor: "#16697a",
																background: "#ede7e3",
															},
															"&.Mui-focused .MuiOutlinedInput-notchedOutline":
																{
																	borderColor: "#16697a",
																},
														}}
													>
														{getEventsAPI.data.results.map((data) => (
															<MenuItem key={data.eventId} value={data.eventId}>
																{data.name}
															</MenuItem>
														))}
													</Select>
												</FormControl>
											</Grid>
										)}
										{status === 2 && (
											<Grid item xs={5}>
												<FormControl sx={{ m: 1, width: 180 }}>
													<InputLabel
														id="demo-multiple-name-label"
														defaultValue={""}
														sx={{
															color: "#000",
															"&.Mui-focused": {
																color: "#000",
															},
														}}
													>
														Users
													</InputLabel>
													<Select
														id="demo-multiple-name"
														value={usersTitle}
														onChange={handleChangeUsers}
														defaultValue={""}
														input={<OutlinedInput label="Users" />}
														MenuProps={MenuProps}
														sx={{
															"& fieldset": {
																borderColor: "#16697a",
															},
															"&:hover .MuiOutlinedInput-notchedOutline": {
																borderColor: "#16697a",
																background: "#ede7e3",
															},
															"&.Mui-focused .MuiOutlinedInput-notchedOutline":
																{
																	borderColor: "#16697a",
																},
														}}
													>
														{getUsersAPI.data.results.map((data) => (
															<MenuItem key={data.userId} value={data.userId}>
																{data.name}
															</MenuItem>
														))}
													</Select>
												</FormControl>
											</Grid>
										)}

										<Grid item>
											<FormControl sx={{ m: 1, width: 180 }}>
												<InputLabel
													id="demo-multiple-name-label"
													defaultValue={" "}
													sx={{
														color: "#000",
														"&.Mui-focused": {
															color: "#000",
														},
													}}
												>
													Topics
												</InputLabel>
												<Select
													id="demo-multiple-name"
													value={topicsTitle}
													onChange={handleChangeTopics}
													defaultValue={""}
													input={<OutlinedInput label="Topics" />}
													MenuProps={MenuProps}
													sx={{
														"& fieldset": {
															borderColor: "#16697a",
														},
														"&:hover .MuiOutlinedInput-notchedOutline": {
															borderColor: "#16697a",
															background: "#ede7e3",
														},
														"&.Mui-focused .MuiOutlinedInput-notchedOutline": {
															borderColor: "#16697a",
														},
													}}
												>
													{getTopicsApi.data.results.map((data) => (
														<MenuItem key={data.topicId} value={data.topicId}>
															{data.name}
														</MenuItem>
													))}
												</Select>
											</FormControl>
										</Grid>
									</Grid>
									<div>
										<TextField
											placeholderText={"Add post content"}
											onChange={handleBodyChange}
										/>
									</div>
									<div className={styles.buttonContainer}>
										<Button type="submit">
											<p>Create post &gt;</p>
										</Button>
									</div>
								</form>
							</Card>
						</div>
					</div>
				</Modal>
			)}
		</>
	);
};

export default CreateNewPost;
