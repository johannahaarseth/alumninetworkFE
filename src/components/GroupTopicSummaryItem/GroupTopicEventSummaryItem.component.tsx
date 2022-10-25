import React from "react";
import { Link } from "react-router-dom";
import { IEventSummary } from "../../interfaces/IEventResponse";
import { IGroupSummary } from "../../interfaces/IGroupResponse";
import { ITopicSummary } from "../../interfaces/ITopicResponse";
import styles from "./GroupTopicEventSummaryItem.module.css";

type GroupTopicEventSummaryItemProps = {
	grouptopicevent: IGroupSummary | IEventSummary | ITopicSummary;
	linkItems: string;
};

export const GroupTopicEventSummaryItem = (
	props: GroupTopicEventSummaryItemProps
) => {
	return (
		<div>
			{"groupId" in props.grouptopicevent && (
				<div
					key={props.grouptopicevent.groupId}
					className={styles.itemContainer}
				>
					<Link
						to={
							props.linkItems +
							"/" +
							props.grouptopicevent.groupId
						}
					>
						{props.grouptopicevent.name}
					</Link>
				</div>
			)}

			{"topicId" in props.grouptopicevent && (
				<div
					key={props.grouptopicevent.topicId}
					className={styles.itemContainer}
				>
					<Link
						to={
							props.linkItems +
							"/" +
							props.grouptopicevent.topicId
						}
					>
						{props.grouptopicevent.name}
					</Link>
				</div>
			)}

			{"eventId" in props.grouptopicevent && (
				<div
					key={props.grouptopicevent.eventId}
					className={styles.itemContainer}
				>
					<Link
						to={
							props.linkItems +
							"/" +
							props.grouptopicevent.eventId
						}
					>
						{props.grouptopicevent.name}
					</Link>
					<p>
						{props.grouptopicevent.startTime} to{" "}
						{props.grouptopicevent.endTime}
					</p>
				</div>
			)}
		</div>
	);
};
