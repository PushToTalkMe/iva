import { SpanProps } from "./span.props";
import styles from "./span.module.css";
import cn from "classnames";

export const Span = ({
  ghost = false,
  children,
  className,
  ...props
}: SpanProps): JSX.Element => {
  return (
    <span
      className={cn(styles.span, className, {
        [styles.ghost]: ghost === true,
      })}
      {...props}
    >
      {children}
    </span>
  );
};
