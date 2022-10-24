import styles from "./ButtonCustom.module.css";
import Button from "../Button/Button.component";
import React, { useState } from "react";

type ButtonCustomProps = {
	onClick?: React.MouseEventHandler;
};

const ButtonCustom = ({ onClick }: ButtonCustomProps) => {
	const [isJoined, setIsJoined] = useState(false);

	return (
		<>
			{window.location.pathname === "/topic/post" ||
			window.location.pathname === "/topic" ? (
				<Button
					className={styles.button}
					onClick={() => {
						setIsJoined(true);
					}}
				>
					{!isJoined ? (
						<>
							<p>Join</p>
							<p>+</p>
						</>
					) : (
						<p>Joined</p>
					)}
				</Button>
			) : (
				<Button className={styles.button} onClick={onClick}>
					<p>Invite</p>
					<p>+</p>
				</Button>
			)}
		</>
	);
};

export default ButtonCustom;
