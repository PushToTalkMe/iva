import styles from "./player.module.css";
import { PlayerProps } from "./player.props";
import Youtube from "react-youtube";
import cn from "classnames";

export const Player = ({
  className,
  src,
  ...props
}: PlayerProps): JSX.Element => {
  return (
    <div className={cn(styles.player, className)} {...props}>
      <Youtube videoId={src} />
    </div>
  );
};
