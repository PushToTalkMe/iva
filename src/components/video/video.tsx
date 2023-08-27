import styles from "./video.module.css";
import { VideoProps } from "./video.props";
import cn from "classnames";
import { Player, Text, Htag } from "..";
import { TEXT, URL } from "../constants";
import { stp } from "../../../helpers/helpers";

export const Video = ({ className, ...props }: VideoProps): JSX.Element => {
  const { src } = stp(URL, "AmQcxny4Tz4");
  return (
    <div className={cn(styles.video, className)} {...props}>
      <Htag tag="h1">Фишка CSS 💡</Htag>
      <div className={styles.box}>
        <Text>{TEXT.VIDEO}</Text>
        <Player src={src} />
      </div>
    </div>
  );
};
