import {HTMLProps, ReactNode} from "react";

type CustomButtonProps = {
	children: ReactNode,
	className?: HTMLProps<HTMLElement>["className"],
	secondary?: boolean
}
export default function CustomTitle(Props: CustomButtonProps) {
	const {children, className, secondary} = Props

	return (
		<h1 className={`relative uppercase font-secondary italic font-extrabold ${secondary? "shadow-title-secondary text-stroke-secondary text-[#84E3DF]" : "shadow-title text-stroke text-customPurple" } ${className}`}
			data-text={children}>
			{children}
		</h1>
)
}