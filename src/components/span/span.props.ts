import { HTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface SpanProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  ghost?: true | false;
  children: ReactNode;
}
