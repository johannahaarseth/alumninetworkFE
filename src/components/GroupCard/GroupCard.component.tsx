import { IGroup } from "../../interfaces/IGroup";
import InfoCard from "../InfoCardWrapper/InfoCard";

type GroupCardProps = {
	group: IGroup;
};

const GroupCard = (props: GroupCardProps) => {
	return (
		<InfoCard description={props.group.description}>
			<p>{props.group.name}</p>
			<p>{props.group.isPrivate ? "Private" : "Public"}</p>
		</InfoCard>
	);
};

export default GroupCard;
