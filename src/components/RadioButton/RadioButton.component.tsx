import styles from "./RadioButton.module.css";

type RadioButtonProps = {
  valueProp: string;
};

const RadioButton = ({ valueProp }: RadioButtonProps) => {
  return (
    <>
      <label className={styles.formControl}>
        <input type="radio" name="radio" value={valueProp} />
        <p>{valueProp}</p>
      </label>
    </>
  );
};

export default RadioButton;
