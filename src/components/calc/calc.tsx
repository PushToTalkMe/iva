import styles from "./calc.module.css";
import { CalcProps } from "./calc.props";
import cn from "classnames";
import { Htag, Popup, Player } from "..";
import { URL } from "../constants";
import { stp } from "../../../helpers/helpers";

export const Calc = ({
  className,
  active,
  setActive,
  ...props
}: CalcProps): JSX.Element => {
  const { src } = stp(URL, "NSluVEdrLek");
  return (
    <Popup
      onClick={() => {
        setActive(!active);
      }}
    >
      <div
        className={cn(styles.calc, className)}
        {...props}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Htag tag="h1">Калькулятор</Htag>
        <Player src={src} />
      </div>
    </Popup>
  );
};
