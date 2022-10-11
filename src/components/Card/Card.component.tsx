import styles from "./Card.module.css";

type CardProps = {
  children: JSX.Element | JSX.Element[];
  cardHoverEffect: boolean;
};

const Card = ({ children, cardHoverEffect }: CardProps) => {
  return (
    <div
      className={
        cardHoverEffect ? `${styles.card} ${styles.cardHover}` : styles.card
      }
    >
      {children}
    </div>
  );
};

export default Card;
