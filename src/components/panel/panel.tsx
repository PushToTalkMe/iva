import styles from "./panel.module.css";
import cn from "classnames";
import { PanelProps } from "./panel.props";
import { Button } from "..";
import { URL } from "../constants";

export const Panel = ({ className, ...props }: PanelProps): JSX.Element => {
  return (
    <div className={cn(styles.panel, className)} {...props}>
      <a href={URL.GITHUB}>
        <Button className={styles.ghost} onClick={() => {}}>
          Код проекта
        </Button>
      </a>
    </div>
  );
};
