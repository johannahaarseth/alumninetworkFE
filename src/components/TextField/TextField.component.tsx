import styles from "./TextField.module.css";

type TextFieldProps = {
  placeholderText: string;
};

const TextField = ({ placeholderText }: TextFieldProps) => {
  return (
    <textarea
      className={styles.textarea}
      placeholder={placeholderText}
    ></textarea>
  );
};

export default TextField;
