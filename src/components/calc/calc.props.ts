import { HTMLAttributes, DetailedHTMLProps } from "react";

export interface CalcProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  active: boolean;
  setActive: (active: boolean) => void;
}
