import styles from "./Card.module.css";

type CardProps = {
  children: JSX.Element | JSX.Element[];
  isSticky: boolean;
};

const Card = ({ children, isSticky }: CardProps) => {
  return (
    <div
      className={isSticky ? `${styles.card} ${styles.stickyCard}` : styles.card}
    >
      {children}
    </div>
  );
};

export default Card;
