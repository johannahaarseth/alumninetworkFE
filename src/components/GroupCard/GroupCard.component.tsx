import React from "react";
import styles from "./GroupCard.module.css";
import Card from "../Card/Card.component";

const GroupCard = () => {
  return (
    <Card cardHoverEffect={true}>
      <div className={styles.headerBox}></div>
      <div className={styles.infoBox}>
        <p className={styles.text}>Group info</p>
        <div className={`${styles.textBox}`}></div>
      </div>
    </Card>
  );
};

export default GroupCard;
