import styles from "./card.module.css";
import { CardProps } from "./card.props";
import cn from "classnames";
import { Htag, Span } from "..";

export const Card = ({
	avatar,
	name,
	text,
	className,
	...props
}: CardProps): JSX.Element => {
	return (
		<div className={cn(styles.card, className)} {...props}>
			<Htag tag='h5'>{name}</Htag>
			<img src={'../../../media/' + avatar} className={styles.avatar} />
			<Span>{text}</Span>
		</div>
	);
};
