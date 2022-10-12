import Card from "../Card/Card.component";
import Button from "../Button/Button.component";
import styles from "./NavBarProfileOnClickCard.module.css";
import { Dispatch, SetStateAction } from "react";

type NavBarProfileOnClickCardProps = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const NavBarProfileOnClickCard = ({
  setIsOpen,
}: NavBarProfileOnClickCardProps) => {
  return (
    <>
      <div
        className={styles.invisibleBackdrop}
        onClick={() => setIsOpen(false)}
      />
      <div className={styles.position}>
        <Card cardHoverEffect={false}>
          <div className={styles.buttonContainer}>
            <Button>
              <p>Logout</p>
            </Button>
            <Button>
              <p>My profile</p>
            </Button>
          </div>
        </Card>
      </div>
    </>
  );
};

export default NavBarProfileOnClickCard;
