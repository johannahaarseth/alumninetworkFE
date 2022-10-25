import React from "react";
import { ITopic } from "../../interfaces/ITopic";
import InfoCard from "../InfoCardWrapper/InfoCard";

type TopicCardProps = {
	topic: ITopic;
};

const TopicCard = (props: TopicCardProps) => {
	return (
		<InfoCard description={props.topic.description}>
			<p>{props.topic.name}</p>
		</InfoCard>
	);
};

export default TopicCard;
