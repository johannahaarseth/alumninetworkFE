import { ChangeEventHandler } from "react";
import styles from "./TextField.module.css";

type TextFieldProps = {
  placeholderText: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement> | undefined;
};

const TextField = ({ placeholderText, onChange }: TextFieldProps) => {
  return (
    <textarea
      className={styles.textarea}
      placeholder={placeholderText}
      onChange={onChange}
    ></textarea>
  );
};

export default TextField;
