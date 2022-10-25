import React from "react";
import styles from "./GroupCard.module.css";
import Card from "../Card/Card.component";
import { IGroup } from "../../interfaces/IGroup";

type GroupCardProps = {
	group: IGroup;
};

const GroupCard = (props: GroupCardProps) => {
	return (
		<Card cardHoverEffect={true}>
			<div className={styles.headerBox}></div>
			<div className={styles.infoBox}>
				<p>{props.group.name}</p>
				<p>{props.group.isPrivate ? "Private" : "Public"}</p>
				<div className={`${styles.textBox}`}>
					{props.group.description}
				</div>
			</div>
		</Card>
	);
};

export default GroupCard;
