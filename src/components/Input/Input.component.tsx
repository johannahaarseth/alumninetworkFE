import styles from "./Input.module.css";

type InputProps = {
  placeholderText: string;
};

const Input = ({ placeholderText }: InputProps) => {
  return (
    <input className={styles.input} type="text" placeholder={placeholderText} />
  );
};

export default Input;
