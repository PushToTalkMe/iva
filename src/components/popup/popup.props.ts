import { HTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface PopupProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}
