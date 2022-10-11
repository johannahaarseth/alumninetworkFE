import styles from "./RadioButton.module.css";

type RadioButtonProps = {
  valueProp: string;
};

const RadioButton = ({ valueProp }: RadioButtonProps) => {
  return (
    <>
      <label className={styles.container}>
        <p>{valueProp}</p>
        <input type="checkbox" value={valueProp} />
        <span className={styles.checkmark}></span>
      </label>
    </>
  );
};

export default RadioButton;
