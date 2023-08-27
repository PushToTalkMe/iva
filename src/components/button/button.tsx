import styles from "./button.module.css";
import { ButtonProps } from "./button.props";
import cn from "classnames";

export const Button = ({
  children,
  className,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button className={cn(className, styles.button, styles.primary)} {...props}>
      <span>{children}</span>
    </button>
  );
};
