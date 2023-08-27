import styles from "./text.module.css";
import { TextProps } from "./text.props";
import cn from "classnames";
import { Span } from "..";

export const Text = ({
  children,
  className,
  ...props
}: TextProps): JSX.Element => {
  return (
    <div className={cn(styles.text, className)} {...props}>
      <Span>{children}</Span>
    </div>
  );
};
