import { HTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface HtagProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
	tag: "h1" | "h5";
	children: ReactNode;
}
