import { HTMLAttributes, DetailedHTMLProps } from "react";

export interface QuestProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  active: boolean;
  setActive: (active: boolean) => void;
}
