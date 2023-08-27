import { HTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface TextProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}
