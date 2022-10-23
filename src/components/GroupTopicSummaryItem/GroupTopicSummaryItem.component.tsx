import React from "react";
import { IGroupTopicEventSummary } from "../../interfaces/IGroupTopicEventSummary";

type GroupTopicEventSummaryItemProps = {
	grouptopicevent: IGroupTopicEventSummary;
};

export const GroupTopicEventSummaryItem = (
	props: GroupTopicEventSummaryItemProps
) => {
	return (
		<div key={props.grouptopicevent.id}>
			<p>{props.grouptopicevent.name}</p>
			{props.grouptopicevent.startTime && (
				<p>
					{props.grouptopicevent.startTime} to{" "}
					{props.grouptopicevent.endTime}
				</p>
			)}
		</div>
	);
};
