import { useAuth0 } from "@auth0/auth0-react";
import { UseUser } from "../../context/useUser";
import styles from "./ProfilePic.module.css";

const ProfilePic = () => {
	const { picture } = UseUser();

	return (
		<div className={styles.profilePic}>
			<img src={picture} alt={picture} />
		</div>
	);
};

export default ProfilePic;
