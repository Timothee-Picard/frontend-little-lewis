"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollingText() {
	const paragraphsRef = useRef<(HTMLParagraphElement | null)[]>([]);

	useEffect(() => {
		paragraphsRef.current.forEach((paragraph) => {
			if (!paragraph) return;

			ScrollTrigger.create({
				trigger: paragraph,
				start: "center center+=100",
				end: "bottom center-=50",
				onEnter: () => gsap.to(paragraph, { color: "#000000", duration: 0.5 }),
				onLeave: () => gsap.to(paragraph, { color: "#d1d5db", duration: 0.5 }),
				onEnterBack: () => gsap.to(paragraph, { color: "#000000", duration: 0.5 }),
				onLeaveBack: () => gsap.to(paragraph, { color: "#d1d5db", duration: 0.5 }),
			});
		});
	}, []);

	return (
		<div className="flex flex-col gap-20 mb-96 mx-10">
			<p
				ref={(el) => (paragraphsRef.current[2] = el)}
				className="whitespace-pre-line max-w-[600px] mx-auto text-gray-300"
			>
				<b className="font-bold">Né à Paris</b>
				{` d’un père napolitain et d’une mère danoise, Gennaro a grandi auprès d’un demi-frère dano-afro américain et d’une demi-soeur italo-algériennes. Un `}
				<b className="font-bold">contexte pluriculturel</b>
				{` qui l’a façonné, et que l’on retrouve dans `}
				<b className={"font-bold"}>ses influences</b>
				{` (le design scandinave, le hip hop, l’art brut, sans oublier la pizza, étant fils de piazzaiolo).`}
			</p>
			<p
				ref={(el) => (paragraphsRef.current[3] = el)}
				className="whitespace-pre-line max-w-[600px] mx-auto text-gray-300"
			>
				{`Après des études en communication digitale, il devient directeur artistique et alterne entre freelance et poste en agence de pub. En 2016, il se met à peindre, un hobby qui devient une passion et qui va prendre une place importante grâce aux commandes de particuliers et de marques.`}
			</p>
			<p
				ref={(el) => (paragraphsRef.current[4] = el)}
				className="whitespace-pre-line max-w-[600px] mx-auto text-gray-300"
			>
				{`Son style, qui s’inscrit dans le courant de la figuration libre, est spontané et accessible. Il donne naissance à Pablo, le pigeon que l’on voit dans ses peintures, qui exprime les contradictions de la société moderne d’une manière simple.`}
			</p>
		</div>
	);
}
