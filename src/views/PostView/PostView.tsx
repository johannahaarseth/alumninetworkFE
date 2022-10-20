import { useState } from "react";
import CreateNewPost from "../../components/CreateNewPost/CreateNewPost.component";
import EventCard from "../../components/EventCard/EventCard.component";
import GroupCard from "../../components/GroupCard/GroupCard.component";
import NavBar from "../../components/NavBar/NavBar.component";
import TimelineComponent from "../../components/Timeline/Timeline.component";
import styles from "./PostView.module.css";
import Modal from "@mui/material/Modal";
import InviteModal from "../../components/InviteModalContent/InviteModal.component";
import ButtonCustom from "../../components/ButtonCustom/ButtonCustom";
import Card from "../../components/Card/Card.component";

const PostView = () => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<>
			<NavBar />

			<div className={styles.container}>
				<div className={styles.postView}>
					<div className={styles.emptyColumn}></div>
					<div className={styles.postColumn}>
						<CreateNewPost />
						<TimelineComponent
							posts={[]}
							count={0}
							handleGetNext={() => {}}
						/>
					</div>
					<div className={styles.infoColumn}>
						{window.location.pathname === "/event" ? (
							<EventCard />
						) : (
							<GroupCard />
						)}
						<div className={styles.btnContainer}>
							<ButtonCustom onClick={handleOpen} />
						</div>
					</div>
				</div>
			</div>
			{window.location.pathname !== "/topic" && open && (
				<Modal open={open} onClose={handleClose}>
					<div className={styles.centered}>
						<div className={styles.modal}>
							<Card cardHoverEffect={false}>
								<InviteModal setOpen={setOpen} />
							</Card>
						</div>
					</div>
				</Modal>
			)}
		</>
	);
};

export default PostView;
