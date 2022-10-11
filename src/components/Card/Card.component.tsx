import styles from "./Card.module.css";

type CardProps = {
  children: JSX.Element | JSX.Element[];
};

const Card = ({ children }: CardProps) => {
  return <div className={styles.card}>{children}</div>;
};

export default Card;
