import styles from "./LoginCard.module.css";

type CardProps = {
  children: JSX.Element | JSX.Element[];
};

const LoginCard = ({ children }: CardProps) => {
  return <div className={styles.card}>{children}</div>;
};

export default LoginCard;
