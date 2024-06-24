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
		const bannerContainer = bannerRef.current;
		const wrapper = wrapperRef.current;
		if (!bannerContainer || !wrapper) return;

		const convertEmToPixels = (element: Element, em: number) => {
			const fontSize = window.getComputedStyle(element).fontSize;
			return parseFloat(fontSize) * em;
		};

		const startOffset = convertEmToPixels(wrapper, 3); // Convert 1em to pixels

		// Calculate total width and add 1em in pixels
		const totalWidth = bannerContainer.clientWidth + startOffset;
		const duration = 40; // Adjust duration to control speed

		// Duplicate elements for seamless looping
		const clones = Array.from(bannerContainer.children) as HTMLSpanElement[];
		clones.forEach((clone) => {
			const newClone = clone.cloneNode(true) as HTMLSpanElement;
			bannerContainer.appendChild(newClone);
		});

		clones.forEach((clone) => {
			const newClone = clone.cloneNode(true) as HTMLSpanElement;
			bannerContainer.appendChild(newClone);
		});

		// Ensure the width of the wrapper can accommodate all clones
		wrapper.style.width = `${totalWidth * 4}px`;

		// Create GSAP animation
		gsap.to(wrapper, {
			x: `-=${totalWidth / 2}`,
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
			},
			startAt: {
				x: startOffset
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
