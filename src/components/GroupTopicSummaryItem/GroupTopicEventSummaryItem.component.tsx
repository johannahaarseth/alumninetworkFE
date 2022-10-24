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
    <div key={props.grouptopicevent.id} className={styles.itemContainer}>
      <Link to={props.linkItems + "/" + props.grouptopicevent.id}>
        {props.grouptopicevent.name}
      </Link>
      {"startTime" in props.grouptopicevent && (
        <p>
          {props.grouptopicevent.startTime} to {props.grouptopicevent.endTime}
        </p>
      )}
    </div>
  );
};
