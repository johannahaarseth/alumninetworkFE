import styles from "./Input.module.css";
import { ChangeEventHandler } from "react";

type InputProps = {
	placeholderText: string;
	onChange?: ChangeEventHandler<HTMLInputElement>;
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
