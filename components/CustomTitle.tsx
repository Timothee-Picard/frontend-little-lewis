import {HTMLProps, ReactNode} from "react";

type CustomButtonProps = {
	children: ReactNode,
	className?: HTMLProps<HTMLElement>["className"];
}
export default function CustomTitle(Props: CustomButtonProps) {
	const {children, className} = Props

	return (
		<h1 className={`relative uppercase font-secondary italic font-extrabold shadow-title text-stroke text-customPurple ${className}`}
			data-text={children}>
			{children}
		</h1>
)
}