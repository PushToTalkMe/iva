import { HTMLAttributes, DetailedHTMLProps } from "react";

export interface CardProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	avatar: string;
	name: string;
	text: string;
}
