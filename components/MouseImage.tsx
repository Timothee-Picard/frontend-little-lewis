"use client";
import Image from "next/image";
import {useEffect, useRef, useState} from "react";

type MouseImageProps = {
	show: boolean;
	setShow: (show: boolean) => void;
	url: string | undefined;
}

export default function MouseImage({ show, setShow, url }: MouseImageProps) {
	const imageRef = useRef<HTMLImageElement | null>(null);
	const [mousePosition, setMousePosition] = useState<{ x: number, y: number }>({ x: 0, y: 0 });

	const handleMouseMove = (event: MouseEvent) => {
		const { clientX, clientY } = event;
		setMousePosition({ x: clientX + 20, y: clientY + 20 });
		if (imageRef.current) {
			imageRef.current.style.left = `${clientX + 20}px`;
			imageRef.current.style.top = `${clientY + 20}px`;
		}
	};

	useEffect(() => {
		document.addEventListener('mousemove', handleMouseMove);
		return () => {
			document.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	useEffect(() => {
		if (imageRef.current) {
			imageRef.current.style.left = `${mousePosition.x}px`;
			imageRef.current.style.top = `${mousePosition.y}px`;
		}
	}, [mousePosition, show]);

	return (
		<>
			{show && url && (
				<Image
					src={url}
					ref={imageRef}
					width={500}
					height={300}
					className="fixed top-0 left-0 z-50"
					alt={"aa"}
				/>
			)}
		</>
	);
}
