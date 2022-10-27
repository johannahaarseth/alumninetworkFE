import { ChangeEventHandler } from "react";
import styles from "./TextArea.module.css";

type TextAreaProps = {
	placeholderText: string;
	onChange?: ChangeEventHandler<HTMLTextAreaElement>;
};
const TextArea = ({ placeholderText, onChange }: TextAreaProps) => {
	return (
		<textarea
			className={styles.textarea}
			placeholder={placeholderText}
			onChange={onChange}
		></textarea>
	);
};

export default TextArea;
