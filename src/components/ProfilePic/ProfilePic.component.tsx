import { useAuth0 } from "@auth0/auth0-react";
import styles from "./ProfilePic.module.css";

const ProfilePic = () => {
	const { user } = useAuth0();

	return (
		<div className={styles.profilePic}>
			<img src={user?.picture} alt={user?.name} />
		</div>
	);
};

export default ProfilePic;
