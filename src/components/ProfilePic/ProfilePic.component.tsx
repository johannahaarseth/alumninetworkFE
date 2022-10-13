import { useAuth0 } from "@auth0/auth0-react";
import styles from "./ProfilePic.module.css";
import Avatar from "@mui/material/Avatar";

const ProfilePic = () => {
  const { user } = useAuth0();
  return (
    <div className={styles.profilePic}>
      <Avatar
        src={user?.picture}
        alt={user?.name}
        sx={{
          height: "100%",
          width: "100%",
        }}
      />
    </div>
  );
};

export default ProfilePic;
