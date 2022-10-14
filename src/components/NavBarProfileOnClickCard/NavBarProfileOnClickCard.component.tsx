import Card from "../Card/Card.component";
import Button from "../Button/Button.component";
import styles from "./NavBarProfileOnClickCard.module.css";
import { Dispatch, SetStateAction } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

type NavBarProfileOnClickCardProps = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const NavBarProfileOnClickCard = ({
  setIsOpen,
}: NavBarProfileOnClickCardProps) => {
  const { isAuthenticated, logout } = useAuth0();
  const navigate = useNavigate();

  return (
    <>
      <div
        className={styles.invisibleBackdrop}
        onClick={() => setIsOpen(false)}
      />
      <div className={styles.position}>
        <Card cardHoverEffect={false}>
          <div className={styles.buttonContainer}>
            {isAuthenticated && (
              <Button onClick={() => navigate("/profile")}>
                <p>My profile</p>
              </Button>
            )}
            {isAuthenticated && (
              <Button onClick={() => navigate("/dashboard")}>
                <p>Dashboard</p>
              </Button>
            )}
            {isAuthenticated && (
              <Button
                onClick={() =>
                  logout({ returnTo: window.location.origin + "/" })
                }
              >
                <p>Logout</p>
              </Button>
            )}
          </div>
        </Card>
      </div>
    </>
  );
};

export default NavBarProfileOnClickCard;
