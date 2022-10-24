import styles from "./TextArea.module.css";
import { ChangeEventHandler } from "react";

type TextFieldProps = {
  placeholderText: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
};

const TextArea = ({ placeholderText, onChange }: TextFieldProps) => {
  return (
    <textarea
      className={styles.textarea}
      placeholder={placeholderText}
      onChange={onChange}
    ></textarea>
  );
};

export default TextArea;
