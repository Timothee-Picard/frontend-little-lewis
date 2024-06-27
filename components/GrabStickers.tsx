"use client";
import { useEffect } from "react";
import Image from "next/image";
import { ReactNode } from "react";
import gsap from "gsap";
import Draggable from "gsap/Draggable";

gsap.registerPlugin(Draggable);

type GrabStickersProps = {
	children: ReactNode;
};

export default function GrabStickers(Props: GrabStickersProps) {
	const { children } = Props;

	useEffect(() => {
		const images = document.querySelectorAll(".draggable-image");
		images.forEach((image) => {
			Draggable.create(image, {
				bounds: ".grab-stickers-container",
				onDragEnd: function () {
					if (!this.hitTest(".grab-stickers-container", "50%")) {
						gsap.to(this.target, { x: 0, y: 0, duration: 1 });
					}
				},
			});
		});
	}, []);

	return (
		<div className="w-full min-h-screen flex justify-center items-center relative grab-stickers-container">
			<Image
				src={"/about/img.png"}
				className="absolute w-40 draggable-image"
				style={{
					top: "calc(50% - 8em)",
					left: "calc(50% - 5em)",
					transform: "translate(-50%, -50%)",
				}}
				width={408}
				height={408}
				alt="Stickers"
			/>
			<Image
				src={"/about/img_1.png"}
				className="absolute w-32 draggable-image"
				style={{
					top: "calc(50% - 5em)",
					left: "calc(50% + 7em)",
					transform: "translate(-50%, -50%)",
				}}
				width={372}
				height={368}
				alt="Stickers"
			/>
			<Image
				src={"/about/img_2.png"}
				className="absolute w-40 draggable-image"
				style={{
					top: "calc(50% + 6em)",
					left: "calc(50% - 9em)",
					transform: "translate(-50%, -50%)",
				}}
				width={609}
				height={465}
				alt="Stickers"
			/>
			<Image
				src={"/about/img_3.png"}
				className="absolute w-40 draggable-image"
				style={{
					top: "calc(50% + 4.5em)",
					left: "calc(50% + 5.5em)",
					transform: "translate(-50%, -50%)",
				}}
				width={544}
				height={446}
				alt="Stickers"
			/>
			{children}
		</div>
	);
}
