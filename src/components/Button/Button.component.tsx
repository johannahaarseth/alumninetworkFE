import styles from "./Button.module.css";
import {
  AriaAttributes,
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FC,
} from "react";

export interface ButtonProps
  extends DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    AriaAttributes {}

const Button: FC<ButtonProps> = (props) => {
  const { children, ...rest } = props;

  return (
    <button className={styles.btn} {...rest}>
      {children}
    </button>
  );
};

export default Button;
