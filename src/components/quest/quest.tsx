import styles from "./quest.module.css";
import { QuestProps } from "./quest.props";
import cn from "classnames";
import { Text, Htag, Button } from "..";
import { TEXT } from "../constants";

export const Quest = ({
  className,
  active,
  setActive,
  ...props
}: QuestProps): JSX.Element => {
  return (
    <div className={cn(styles.quest, className)} {...props}>
      <Htag tag="h1">JavaScript 🧐</Htag>
      <div className={styles.box}>
        <Text>{TEXT.QUEST}</Text>
        <Button className={styles.button} onClick={() => setActive(!active)}>
          Перейти к заданию
        </Button>
      </div>
    </div>
  );
};
