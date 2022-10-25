import React, { useState } from "react";
import NavBar from "../NavBar/NavBar.component";
import styles from "./InfoView.module.css";
import Modal from "@mui/material/Modal";
import Card from "../Card/Card.component";
import InviteModal from "../InviteModalContent/InviteModal.component";
import ButtonCustom from "../ButtonCustom/ButtonCustom";

type Props = {
	leftContentCol?: JSX.Element | JSX.Element[];
	middleContentCol?: JSX.Element | JSX.Element[];
	rightContentCol?: JSX.Element | JSX.Element[];
	btnGroupHidden?: boolean;
};

const InfoView = ({
	rightContentCol,
	middleContentCol,
	leftContentCol,
	btnGroupHidden,
}: Props) => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<>
			<NavBar />
			<div className={styles.container}>
				<div className={styles.view}>
					<div className={styles.leftColumn}>{leftContentCol}</div>
					<div className={styles.middleColumn}>{middleContentCol}</div>
					<div className={styles.rightColumn}>
						{rightContentCol}
						<div
							className={`${styles.btnContainer} ${
								btnGroupHidden && styles.hidden
							}`}
						>
							<ButtonCustom onClick={handleOpen} />
						</div>
					</div>
				</div>
			</div>
			<Modal open={open} onClose={handleClose}>
				<div className={styles.centered}>
					<div className={styles.modal}>
						<Card cardHoverEffect={false}>
							<InviteModal setOpen={setOpen} />
						</Card>
					</div>
				</div>
			</Modal>
		</>
	);
};

export default InfoView;
