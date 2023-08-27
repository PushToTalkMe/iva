import { HTMLAttributes, DetailedHTMLProps } from "react";

export interface PlayerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  src: string;
}
