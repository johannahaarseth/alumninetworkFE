import styles from "./Button.module.css";

type ButtonProps = {
  children: JSX.Element | JSX.Element[];
};

const Button = ({ children }: ButtonProps) => {
  return <button className={styles.btn}>{children}</button>;
};

export default Button;
