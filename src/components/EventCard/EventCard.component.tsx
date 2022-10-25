import { useEffect, useState } from "react";
import styles from "./EventCard.module.css";
import Button from "../Button/Button.component";
import { IEvent } from "../../interfaces/IEvent";
import InfoCard from "../InfoCardWrapper/InfoCard";

type EventCardProps = {
	event: IEvent;
};

const EventCard = (props: EventCardProps) => {
	const [accept, setAccept] = useState<null | boolean>(null);

	const onClickAcceptBtn = () => {
		setAccept(true);
	};

	const onClickDeclineBtn = () => {
		setAccept(false);
	};

	useEffect(() => {
		accept !== null && alert("Accepted: " + accept);
	});

	return (
		<InfoCard description={props.event.description}>
			<p>{props.event.name}</p>
			<p>{props.event.startTime + " to " + props.event.endTime}</p>
			<p>Attending: {props.event.attendeesCount}</p>
			<p>Invited: {props.event.invitedCount}</p>
			<p>Number of guests: </p>

			<div className={styles.btnContainer}>
				<Button className={styles.acceptBtn} onClick={onClickAcceptBtn}>
					<p>Accept</p>
				</Button>
				<Button className={styles.declineBtn} onClick={onClickDeclineBtn}>
					<p>Decline</p>
				</Button>
			</div>
		</InfoCard>
	);
};

export default EventCard;
