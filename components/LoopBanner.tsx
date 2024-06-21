"use client"
import { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";

type LoopBannerProps = {
	children: ReactNode[]
}

export default function LoopBanner(Props: LoopBannerProps) {
	const { children } = Props;
	const bannerRef = useRef<HTMLDivElement>(null);
	const wrapperRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		console.log("useEffect")
		const bannerContainer = bannerRef.current;
		const wrapper = wrapperRef.current;
		if (!bannerContainer || !wrapper) return;

		const totalWidth = bannerContainer.clientWidth;
		const duration = 30; // Adjust duration to control speed

		// Duplicate elements for seamless looping
		const children = Array.from(bannerContainer.children) as HTMLSpanElement[];

		children.forEach((child, index) => {
			const clone = child.cloneNode(true) as HTMLSpanElement;
			bannerContainer.appendChild(clone);
		});

		gsap.to(wrapper, {
			x: `-=${totalWidth}`,
			ease: "none",
			duration: duration,
			repeat: -1,
			modifiers: {
				x: gsap.utils.unitize((x) => {
					const position = parseFloat(x);
					if (position <= -totalWidth) {
						return position + totalWidth;
					}
					return position;
				})
			}
		});
	}, [children]);

	return (
		<div className="overflow-hidden">
			<div
				ref={wrapperRef}
				className="relative flex w-fit"
			>
				<div
					ref={bannerRef}
					className="bannerContainer relative text-white font-secondary uppercase italic font-normal leading-normal text-[3em] flex gap-[1em] w-fit whitespace-nowrap">
					{
						children.map((element, index) => (
							<span key={index} className="bannerItem">
								{element}
							</span>
						))
					}
				</div>
			</div>
		</div>
	);
}
