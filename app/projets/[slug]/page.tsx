"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";
import {useLayoutEffect, useRef} from "react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function ProjetPage() {
	const container = useRef<HTMLDivElement | null>(null);

	useGSAP(() => {
		const {current} = container;
		if (!current) return;
		gsap.to(current, {
			scrollTrigger: {
				start: "top top",
				end: "bottom bottom",
				scrub: true,
			},
			x: -current.clientWidth + innerWidth,
		});
	}, [{scope: container}])

	useLayoutEffect(() => {
		const {current} = container;
		if (!current) return;
		const parent = current.parentElement as HTMLElement;
		parent.style.height = current.children.length * 100 + "vw";
	}, []);

	return (
		<div>
			<div ref={container} className="fixed flex">
				<div className="h-screen flex">
					<svg className=" h-screen" viewBox="0 0 375 1440" fill="none"
						 xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" clipRule="evenodd"
							  d="M716.451 1682.72C716.451 1628.35 704.343 1576.82 682.676 1530.67C679.262 1523.4 681.058 1514.7 687.074 1509.38C761.258 1443.75 808.029 1347.83 808.029 1240.99C808.029 1184.98 795.175 1131.97 772.255 1084.76C769.044 1078.14 770.169 1070.21 775.095 1064.76C832.395 1001.25 867.279 917.129 867.279 824.86C867.279 714.397 817.282 615.612 738.682 549.9C731.223 543.664 729.953 532.553 735.813 524.795C781.145 464.789 808.029 390.067 808.029 309.067C808.029 200.359 759.608 102.96 683.156 37.2636C676.855 31.8488 675.035 22.7907 678.754 15.3615C702.876 -32.8287 716.451 -87.2165 716.451 -144.775C716.451 -342.618 556.068 -503.001 358.226 -503.001C160.383 -503.001 -0.000104189 -342.618 -9.55407e-05 -144.775C-9.07889e-05 -36.067 48.4218 61.3313 124.873 127.028C131.175 132.443 132.995 141.501 129.276 148.93C105.153 197.121 91.5781 251.508 91.5781 309.067C91.5781 419.53 141.576 518.314 220.176 584.026C227.635 590.262 228.905 601.374 223.044 609.131C177.712 669.138 150.828 743.859 150.828 824.86C150.828 880.87 163.683 933.878 186.602 981.095C189.813 987.709 188.689 995.638 183.763 1001.1C126.463 1064.6 91.5781 1148.72 91.5781 1240.99C91.5781 1295.35 103.687 1346.89 125.354 1393.04C128.767 1400.31 126.972 1409.01 120.956 1414.33C46.7713 1479.96 -2.03286e-05 1575.88 -1.56585e-05 1682.72C-7.01057e-06 1880.56 160.383 2040.94 358.226 2040.94C556.068 2040.94 716.451 1880.56 716.451 1682.72Z"
							  fill="#328FC2"/>
					</svg>
					<div className="h-screen px-[200px] bg-[#328FC2] flex justify-center items-center">
						<div className="max-w-[350px] flex flex-col gap-[100px]">
							<h2 className="text-4xl normal-case">Lorem ipsum dolor sit amet raeddg</h2>
							<p className="text-xl normal-case">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare risus in accumsan
								sollicitudin. Suspendisse gravida, metus quis tincidunt molestie, turpis urna blandit
								purus, at aliquam libero libero at libero.
							</p>
						</div>
					</div>
				</div>
				<div className="w-screen h-screen bg-[#84E3DF] flex justify-center items-center">
					<Image src={"/img.png"}
						   className={"h-[600px] w-auto"}
						   width={2377}
						   height={1219}
						   alt={"aaa"}/>
				</div>
			</div>
		</div>
	);
}
