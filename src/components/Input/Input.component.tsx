import { ChangeEventHandler } from "react";
import styles from "./Input.module.css";

type InputProps = {
  placeholderText: string;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
};

const Input = ({ placeholderText, onChange }: InputProps) => {
  return (
    <input
      className={styles.input}
      type="text"
      placeholder={placeholderText}
      onChange={onChange}
    />
  );
};

export default Input;
