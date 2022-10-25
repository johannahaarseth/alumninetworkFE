import styles from "./InfoCard.module.css";
import Card from "../Card/Card.component";
import React from "react";

type Props = {
	children: JSX.Element | JSX.Element[];
	description: string;
};

const InfoCard = ({ children, description }: Props) => {
	return (
		<Card cardHoverEffect={false}>
			<div className={styles.headerBox}></div>
			<div className={styles.infoBox}>
				{children}
				<div className={styles.textBox}>{description}</div>
			</div>
		</Card>
	);
};

export default InfoCard;
