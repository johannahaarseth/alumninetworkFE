import { IGroupTopicEventSummary } from "../../interfaces/IGroupTopicEventSummary";
import { GroupTopicEventSummaryItem } from "../GroupTopicSummaryItem/GroupTopicSummaryItem.component";

type GroupTopicEventSummaryListProps = {
	grouptopicevent: IGroupTopicEventSummary[];
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
					/>
				);
			})}
		</div>
	);
};
