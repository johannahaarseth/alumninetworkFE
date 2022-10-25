import React from "react";
import styles from "./TopicCard.module.css";
import Card from "../Card/Card.component";
import { ITopic } from "../../interfaces/ITopic";

type TopicCardProps = {
	topic: ITopic;
};

const TopicCard = (props: TopicCardProps) => {
	return (
		<Card cardHoverEffect={true}>
			<div className={styles.headerBox}></div>
			<div className={styles.infoBox}>
				<p>{props.topic.name}</p>
				<div className={`${styles.textBox}`}>
					{props.topic.description}
				</div>
			</div>
		</Card>
	);
};

export default TopicCard;
