import React, { useState } from "react";
import styles from "./EventCard.module.css";
import Card from "../Card/Card.component";
import Button from "../Button/Button.component";

const EventCard = () => {
  const [isAccept, setIsAccept] = useState(false);
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
        <p className={styles.text}>Event info</p>
        <div className={`${styles.textBox}`}></div>
      </div>
      <Button
        className={styles.button}
        onClick={onClickAcceptBtn}
        disabled={isAccept}
      >
        <p className={styles.newPost}>Accept</p>
      </Button>
      <Button
        className={styles.button2}
        onClick={onClickDeclineBtn}
        disabled={isDeclined}
      >
        <p className={styles.newPost}>Decline</p>
      </Button>
    </Card>
  );
};

export default EventCard;
