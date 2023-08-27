import styles from "./carousel.module.css";
import { CarouselProps } from "./carousel.props";
import cn from "classnames";
import { Card } from "..";
import { CARDS } from "../constants";

export const Carousel = ({
  className,
  ...props
}: CarouselProps): JSX.Element => {
  return (
    <div className={cn(styles.carousel, className)} {...props}>
      {CARDS.map((card, index) => {
        return (
          <Card
            key={index}
            name={card.NAME}
            avatar={card.AVATAR}
            className={styles.main}
            text={card.TEXT}
          />
        );
      })}
    </div>
  );
};
