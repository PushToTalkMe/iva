import styles from "./popup.module.css";
import { PopupProps } from "./popup.props";
import cn from "classnames";

export const Popup = ({
  children,
  className,
  ...props
}: PopupProps): JSX.Element => {
  return (
    <div className={cn(className, styles.popup)} {...props}>
      {children}
    </div>
  );
};
