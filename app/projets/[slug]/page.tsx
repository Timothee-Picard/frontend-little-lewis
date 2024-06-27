"use client"
import ProjectPageDesktop from "@/components/projetPage/projetPageDesktop";
import {useEffect, useState} from "react";
import ProjectPageMobile from "@/components/projetPage/projetPageMobile";

export default function ProjectsPage() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkIfMobile = () => {
			if (window.innerWidth <= 768) {
				console.log('Vous êtes sur un appareil mobile.');
				setIsMobile(true);
			} else {
				console.log('Vous êtes sur un appareil non mobile.');
				setIsMobile(false);
			}
		};

		// Check on component mount
		checkIfMobile();

		// Add event listener to handle window resize
		window.addEventListener('resize', checkIfMobile);

		// Cleanup event listener on component unmount
		return () => {
			window.removeEventListener('resize', checkIfMobile);
		};
	}, []);
	return (
		<>
			{isMobile ? <ProjectPageMobile /> : <ProjectPageDesktop />}
		</>
	)
}