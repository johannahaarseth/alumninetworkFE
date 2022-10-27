import { ChangeEventHandler } from "react";
import styles from "./RadioButton.module.css";

type RadioButtonProps = {
	valueProp: string;
	isChecked?: boolean;
	onChange?: ChangeEventHandler<HTMLInputElement>;
};

const RadioButton = ({ valueProp, isChecked, onChange }: RadioButtonProps) => {
	return (
		<>
			<label className={styles.formControl}>
				<input
					type="radio"
					name="radio"
					value={valueProp}
					checked={isChecked}
					onChange={onChange}
				/>
				<p>{valueProp}</p>
			</label>
		</>
	);
};

export default RadioButton;
