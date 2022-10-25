import styles from "./ListBox.module.css";
import Button from "../Button/Button.component";
import Card from "../Card/Card.component";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import TextArea from "../TextArea/TextArea.component";
import RadioButton from "../RadioButton/RadioButton.component";
import Input from "../Input/Input.component";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import TextField from "@mui/material/TextField";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Link, useNavigate } from "react-router-dom";
import { IGroupSummary } from "../../interfaces/IGroupResponse";
import { IEventSummary } from "../../interfaces/IEventResponse";
import { ITopicSummary } from "../../interfaces/ITopicResponse";
import { IPostEvent } from "../../interfaces/IPostEvent";
import { apiClient } from "../../api/apiClient";
import { useApi } from "../../api/useApi";
import { IPostGroup } from "../../interfaces/IPostGroup";
import { IPostTopic } from "../../interfaces/IPostTopic";
import { GroupTopicEventSummaryList } from "../GroupTopicEventSummaryList/GroupTopicEventSummaryList.component";

type ListBoxProps = {
	title: string;
	visibleSeeMoreBtn: boolean;
	grouptopicevent: IGroupSummary[] | IEventSummary[] | ITopicSummary[];
	linkItems: string;
};

const ListBox = ({
	title,
	visibleSeeMoreBtn,
	grouptopicevent,
	linkItems,
}: ListBoxProps) => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const navigate = useNavigate();
	const [startDate, setStartDate] = useState<Dayjs | null>(dayjs());
	const [endDate, setEndDate] = useState<Dayjs | null>(dayjs());
	const [postEventData, setPostEventData] = useState<IPostEvent | null>(null);

	const titleToLowerAndMinusPlural = title?.toLowerCase().slice(0, -1);
	const path = "/" + title.charAt(0).toLowerCase() + title.slice(1);

	const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setPostEventData({ ...postEventData!, name: event.target.value });
	};

	const handleStartDateChange = (newValue: Dayjs | null) => {
		if (startDate?.isAfter(endDate)) {
			setEndDate(startDate);
		}
		setStartDate(newValue);
		setPostEventData({
			...postEventData!,
			startDate: newValue?.toJSON()!,
		});
	};

	const handleEndDateChange = (newValue: Dayjs | null) => {
		if (endDate?.isBefore(startDate)) {
			setStartDate(endDate);
		}
		setEndDate(newValue);
		setPostEventData({ ...postEventData!, endDate: newValue?.toJSON()! });
	};

	const handleDescriptionTextAreaChange = (
		event: ChangeEvent<HTMLTextAreaElement>
	) => {
		setPostEventData({
			...postEventData!,
			description: event.target.value,
		});
	};

	const postEvent = (config: {}, data: {}) =>
		apiClient.post<IPostEvent>("/event", config, data);

	const postEventApi = useApi<IPostEvent>(postEvent, {} as IPostEvent);

	const saveEvent = (e: FormEvent<HTMLButtonElement>) => {
		e.preventDefault(); // remove when this works
		postEventApi
			.request({ data: postEventData })
			.then(() => navigate("/group/" + postEventApi.data.id));
	};

	const postGroup = (config: {}, data: {}) =>
		apiClient.post<IPostGroup>("/event", config, data);

	const postGroupApi = useApi<IPostGroup>(postGroup, {} as IPostGroup);

	const saveGroup = (e: FormEvent<HTMLButtonElement>) => {
		e.preventDefault(); // remove when this works
		postGroupApi
			.request({ data: postEventData })
			.then(() => navigate("/group/" + postGroupApi.data.id));
	};

	const postTopic = (config: {}) =>
		apiClient.post<IPostTopic>("/topic", config);

	const postTopicApi = useApi<IPostTopic>(postTopic, {} as IPostTopic);

	const saveTopic = (e: FormEvent<HTMLButtonElement>) => {
		e.preventDefault(); // remove when this works
		postTopicApi
			.request({ data: postEventData })
			.then(() => navigate("/group/" + postTopicApi.data.id));
	};

	return (
		<>
			<Card cardHoverEffect={false}>
				<div className={styles.titleAndAddBtn}>
					<p>{title}</p>
					<Button onClick={handleOpen}>
						<p>+ Add new</p>
					</Button>
				</div>
				<GroupTopicEventSummaryList
					grouptopicevent={grouptopicevent}
					linkItems={linkItems}
				/>
				<div className={styles.seeMoreBtn}>
					<span
						className={
							!visibleSeeMoreBtn ? styles.invisibleSeeMoreBtn : ""
						}
					>
						<Button>
							<Link to={linkItems}>See more &gt;</Link>
						</Button>
					</span>
				</div>
			</Card>

			{open && (
				<Modal open={open} onClose={handleClose}>
					<div className={styles.centered}>
						<div className={styles.modal}>
							<Card cardHoverEffect={false}>
								<p className={styles.modalHeader}>
									Create new {titleToLowerAndMinusPlural}
								</p>
								<form className={styles.form}>
									<div>
										<Input
											placeholderText={`Add ${titleToLowerAndMinusPlural} title`}
											onChange={handleTitleChange}
										/>
									</div>
									{title.toString() === "Groups" && (
										<div className={styles.radioButtons}>
											<RadioButton valueProp={"Public"} />
											<RadioButton
												valueProp={"Private"}
											/>
										</div>
									)}
									{title.toString() === "Events" && (
										<LocalizationProvider
											dateAdapter={AdapterDayjs}
											adapterLocale={"nb"}
										>
											<DateTimePicker
												label="Start date"
												value={startDate}
												onChange={handleStartDateChange}
												disablePast
												inputFormat="DD-MM-YYYY hh:mm"
												renderInput={(params) => (
													<TextField
														{...params}
														type="datetime-local"
													/>
												)}
											/>
											<DateTimePicker
												label="End date"
												value={endDate?.add(1, "hours")}
												onChange={handleEndDateChange}
												disablePast
												inputFormat="DD-MM-YYYY hh:mm"
												renderInput={(params) => (
													<TextField
														{...params}
														type="datetime-local"
													/>
												)}
											/>
										</LocalizationProvider>
									)}

									<div>
										<TextArea
											placeholderText={`Add ${titleToLowerAndMinusPlural} description`}
											onChange={
												handleDescriptionTextAreaChange
											}
										/>
									</div>
									<div className={styles.buttonContainer}>
										{title.toString() === "Events" && (
											<Button onClick={saveEvent}>
												<p>
													Create{" "}
													{titleToLowerAndMinusPlural}{" "}
													&gt;
												</p>
											</Button>
										)}
										{title.toString() === "Groups" && (
											<Button onClick={saveGroup}>
												<p>
													Create{" "}
													{titleToLowerAndMinusPlural}{" "}
													&gt;
												</p>
											</Button>
										)}
										{title.toString() === "Topics" && (
											<Button onClick={saveTopic}>
												<p>
													Create{" "}
													{titleToLowerAndMinusPlural}{" "}
													&gt;
												</p>
											</Button>
										)}
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

export default ListBox;
