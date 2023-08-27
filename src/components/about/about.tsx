import styles from "./about.module.css";
import { AboutProps } from "./about.props";
import cn from "classnames";
import { Htag, Carousel, Text } from "..";
import { TEXT } from "../constants";

export const About = ({ className, ...props }: AboutProps): JSX.Element => {
  return (
    <div className={cn(styles.about, className)} {...props}>
      <Htag tag="h1">О себе 📔</Htag>
      <div className={styles.box}>
        <Carousel />
        <Text>{TEXT.ABOUT}</Text>
      </div>
    </div>
  );
};
