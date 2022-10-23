import { IEventSummary } from "../../interfaces/IEventResponse";
import { IGroupSummary } from "../../interfaces/IGroupResponse";
import { ITopicSummary } from "../../interfaces/ITopicResponse";
import { GroupTopicEventSummaryItem } from "../GroupTopicSummaryItem/GroupTopicEventSummaryItem.component";

type GroupTopicEventSummaryListProps = {
	grouptopicevent: IGroupSummary[] | IEventSummary[] | ITopicSummary[];
	linkItems: string;
};

export const GroupTopicEventSummaryList = (
	props: GroupTopicEventSummaryListProps
) => {
	return (
		<div>
			{props.grouptopicevent?.map((item, i) => {
				return (
					<GroupTopicEventSummaryItem
						grouptopicevent={item}
						key={i}
						linkItems={props.linkItems}
					/>
				);
			})}
		</div>
	);
};
