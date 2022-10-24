import {
  ChangeEventHandler,
  MouseEventHandler,
  ReactEventHandler,
  SetStateAction,
} from "react";
import styles from "./RadioButton.module.css";

type RadioButtonProps = {
  valueProp: string;
  isChecked: boolean | undefined;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined | undefined;
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
