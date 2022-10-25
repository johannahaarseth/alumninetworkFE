import React, { useState } from "react";
import styles from "./EventCard.module.css";
import Card from "../Card/Card.component";
import Button from "../Button/Button.component";
import { IEvent } from "../../interfaces/IEvent";

type EventCardProps = {
  event: IEvent;
};

const EventCard = (props: EventCardProps) => {
  const [, setIsAccept] = useState(false);
  const [isDeclined, setIsDeclined] = useState(false);

  const onClickAcceptBtn = () => {
    setIsAccept(true);
    setIsDeclined(false);
  };

  const onClickDeclineBtn = () => {
    setIsDeclined(true);
    setIsAccept(false);
  };

  return (
    <Card cardHoverEffect={false}>
      <div className={styles.headerBox}></div>
      <div className={styles.infoBox}>
        <p className={styles.text}>{props.event.name}</p>
        <p className={styles.text}>
          {props.event.startTime + " to " + props.event.endTime}
        </p>
        <p>Attending: {props.event.attendeesCount}</p>
        <p>Invited: {props.event.invitedCount}</p>
        <p>Guest allowes: </p>
        <div className={styles.textBox}>{props.event.description}</div>
      </div>
      <div className={styles.btnContainer}>
        <Button
          className={styles.button}
          onClick={onClickAcceptBtn}
          disabled={isDeclined}
        >
          <p>Accept</p>
        </Button>
        <Button
          className={styles.button2}
          onClick={onClickDeclineBtn}
          disabled={isDeclined}
        >
          <p>Decline</p>
        </Button>
      </div>
    </Card>
  );
};

export default EventCard;
