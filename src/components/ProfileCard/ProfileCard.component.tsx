import React, { useRef, useState } from "react";
import styles from "./ProfileCard.module.css";
import Card from "../Card/Card.component";
import ProfilePic from "../ProfilePic/ProfilePic.component";
import { useAuth0 } from "@auth0/auth0-react";

type ProfileCardProps = { bio: string; funfact: string; status: string };

const ProfileCard = (props: ProfileCardProps) => {
	const { user } = useAuth0();
	const { bio, funfact, status } = props;
	const editEmoji = "✏️";
	const editFinishedEmoji = "🆗️";
	const profileView = window.location.pathname.match(/profile/);
	const [editStatus, setEditStatus] = useState(false);
	const [editBio, setEditBio] = useState(false);
	const [editFunFact, setEditFunFact] = useState(false);
	const inputStatusRef = useRef<HTMLInputElement>(null);
	const inputBioRef = useRef<HTMLTextAreaElement>(null);
	const inputFunFactRef = useRef<HTMLTextAreaElement>(null);

	const handleEditStatusClick = () => {
		setEditStatus(!editStatus);
		!editStatus && inputStatusRef.current?.focus();
	};

	const handleEditStatusEnterKeyDown = (
		e: React.KeyboardEvent<HTMLInputElement>
	) => {
		if (e.key === "Enter") handleEditStatusClick();
	};

	const handleEditBioClick = () => {
		setEditBio(!editBio);
		!editBio && inputBioRef.current?.focus();
	};

	const handleEditBioEnterKeyDown = (
		e: React.KeyboardEvent<HTMLInputElement>
	) => {
		if (e.key === "Enter") handleEditBioClick();
	};

	const handleEditFunFactClick = () => {
		setEditFunFact(!editFunFact);
		!editFunFact && inputFunFactRef.current?.focus();
	};

	const handleEditFunFactEnterKeyDown = (
		e: React.KeyboardEvent<HTMLInputElement>
	) => {
		if (e.key === "Enter") handleEditFunFactClick();
	};

	return (
		<Card cardHoverEffect={false}>
			<div className={styles.headerBox}></div>
			<div className={styles.profile}>
				<ProfilePic />
			</div>
			<div className={styles.infoBox}>
				{user?.name === user?.email ? (
					<p>Email: {user?.email}</p>
				) : (
					<>
						<p>Name: {user?.name}</p>
						<p>Email: {user?.email}</p>
					</>
				)}
				<div className={styles.statusContainer}>
					<label>Status:</label>
					<input
						type="text"
						placeholder={status}
						ref={inputStatusRef}
						name="status"
					/>
					<p
						className={`${styles.editStatus} ${!profileView && styles.hidden}`}
						onClick={handleEditStatusClick}
						tabIndex={0}
						onKeyDown={handleEditStatusEnterKeyDown}
					>
						{editStatus ? editFinishedEmoji : editEmoji}
					</p>
				</div>
				<div className={`${styles.textBox} ${styles.shortBioBox}`}>
					<textarea placeholder={bio} ref={inputBioRef} name="bio" />
					<p
						className={`${styles.editBioAndFunFact} ${
							!profileView && styles.hidden
						}`}
						onClick={handleEditBioClick}
						tabIndex={0}
						onKeyDown={handleEditBioEnterKeyDown}
					>
						{editBio ? editFinishedEmoji : editEmoji}
					</p>
				</div>
				<div className={`${styles.textBox} ${styles.funFactBox}`}>
					<textarea
						placeholder={funfact}
						ref={inputFunFactRef}
						name="funFact"
					/>

					<p
						className={`${styles.editBioAndFunFact} ${
							!profileView && styles.hidden
						}`}
						onClick={handleEditFunFactClick}
						tabIndex={0}
						onKeyDown={handleEditFunFactEnterKeyDown}
					>
						{editFunFact ? editFinishedEmoji : editEmoji}
					</p>
				</div>
			</div>
		</Card>
	);
};

export default ProfileCard;
