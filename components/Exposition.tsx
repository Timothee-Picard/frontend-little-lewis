"use client"
import MouseImage from "@/components/MouseImage";
import {useState} from "react";

export default function Exposition() {
	const [show, setShow] = useState(false);
	const [url, setUrl] = useState<string>();
	
	function showImage(newUrl: string) {
		setShow(true);
		setUrl(newUrl)
	}
	
	function hideImage() {
		setShow(false);
		setUrl(undefined);
	}

	return (
		<>
			<MouseImage show={show} setShow={setShow} url={url} />
			<table className="w-7/8 mx-auto">
				<tbody>
				<tr className="group border-b-2 border-[#5497FF] hover:bg-[#C9E1FF30]"
					onMouseEnter={() => showImage("https://picsum.photos/500/300")} onMouseLeave={hideImage}>
					<td className="py-14 text-black text-center text-lg font-medium leading-[1.75rem]">2023</td>
					<td className="my-14 mx-5 inline-flex transform group-hover:rotate-0 transition-all -rotate-[-1.11deg] p-4 items-start gap-4 rounded-lg bg-[#C9E1FF]">
						<div className="text-[#5497FF] text-xl font-normal leading-[1.75rem]">On the Scene / Spray Gallery / Londres</div>
					</td>
					<td className="py-14 text-black text-center text-lg font-medium leading-[1.75rem]">Exposition</td>
				</tr>
				<tr className="group border-b-2 border-[#5497FF] hover:bg-[#C9E1FF30]"
					onMouseEnter={() => showImage("https://picsum.photos/400/300")} onMouseLeave={hideImage}>
					<td className="py-14 text-black text-center text-lg font-medium leading-[1.75rem]">2023</td>
					<td className="my-14 mx-5 inline-flex transform group-hover:rotate-0 transition-all rotate-[-0.89deg] p-4 items-start gap-4 rounded-lg bg-[#C9E1FF]">
						<div className="text-[#5497FF] text-xl font-normal leading-[1.75rem]">The Garage Gallery / Hypernovart / Montpellier</div>
					</td>
					<td className="py-14 text-black text-center text-lg font-medium leading-[1.75rem]">Exposition</td>
				</tr>
				<tr className="group border-b-2 border-[#5497FF] hover:bg-[#C9E1FF30]"
					onMouseEnter={() => showImage("https://picsum.photos/500/200")} onMouseLeave={hideImage}>
					<td className="py-14 text-black text-center text-lg font-medium leading-[1.75rem]">2022</td>
					<td className="my-14 mx-5 inline-flex transform group-hover:rotate-0 transition-all -rotate-[-1.11deg] p-4 items-start gap-4 rounded-lg bg-[#C9E1FF]">
						<div className="text-[#5497FF] text-xl font-normal leading-[1.75rem]">Inauguration des bureaux Teaser / Montpellier</div>
					</td>
					<td className="py-14 text-black text-center text-lg font-medium leading-[1.75rem]">Exposition</td>
				</tr>
				<tr className="group border-b-2 border-[#5497FF] hover:bg-[#C9E1FF30]"
					onMouseEnter={() => showImage("https://picsum.photos/300/700")} onMouseLeave={hideImage}>
					<td className="py-14 text-black text-center text-lg font-medium leading-[1.75rem]">2022</td>
					<td className="my-14 mx-5 inline-flex transform group-hover:rotate-0 transition-all rotate-[-0.89deg] p-4 items-start gap-4 rounded-lg bg-[#C9E1FF]">
						<div className="text-[#5497FF] text-xl font-normal leading-[1.75rem]">100 oeuvres exposées à ciel ouvert / Art Station / Montpellier</div>
					</td>
					<td className="py-14 text-black text-center text-lg font-medium leading-[1.75rem]">Exposition</td>
				</tr>
				<tr className="group border-b-2 border-[#5497FF] hover:bg-[#C9E1FF30]"
					onMouseEnter={() => showImage("https://picsum.photos/700/300")} onMouseLeave={hideImage}>
					<td className="py-14 text-black text-center text-lg font-medium leading-[1.75rem]">2021</td>
					<td className="my-14 mx-5 inline-flex transform group-hover:rotate-0 transition-all rotate-[-0.89deg] p-4 items-start gap-4 rounded-lg bg-[#C9E1FF]">
						<div className="text-[#5497FF] text-xl font-normal leading-[1.75rem]">Wild Summer / Montpellier</div>
					</td>
					<td className="py-14 text-black text-center text-lg font-medium leading-[1.75rem]">Exposition</td>
				</tr>
				<tr className="group border-b-2 border-[#5497FF] hover:bg-[#C9E1FF30]"
					onMouseEnter={() => showImage("https://picsum.photos/700/200")} onMouseLeave={hideImage}>
					<td className="py-14 text-black text-center text-lg font-medium leading-[1.75rem]">2020</td>
					<td className="my-14 mx-5 inline-flex transform group-hover:rotate-0 transition-all -rotate-[-1.11deg] p-4 items-start gap-4 rounded-lg bg-[#C9E1FF]">
						<div className="text-[#5497FF] text-xl font-normal leading-[1.75rem]">Biotope / Art Salé / Montpellier</div>
					</td>
					<td className="py-14 text-black text-center text-lg font-medium leading-[1.75rem]">Exposition</td>
				</tr>
				<tr className="group hover:bg-[#C9E1FF30]"
					onMouseEnter={() => showImage("https://picsum.photos/200/100")} onMouseLeave={hideImage}>
					<td className="py-14 text-black text-center text-lg font-medium leading-[1.75rem]">2019</td>
					<td className="my-14 mx-5 inline-flex transform group-hover:rotate-0 transition-all rotate-[-0.89deg] p-4 items-start gap-4 rounded-lg bg-[#C9E1FF]">
						<div className="text-[#5497FF] text-xl font-normal leading-[1.75rem]">The Garage Gallery / Hypernovart / Montpellier</div>
					</td>
					<td className="py-14 text-black text-center text-lg font-medium leading-[1.75rem]">Exposition</td>
				</tr>
				</tbody>
			</table>
		</>
	);
}
