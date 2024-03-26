"use client";

import Image from "next/image";

export default function Home() {
    return (
        <>
            <section className="relative flex justify-center items-center h-screen overflow-clip">
                <video
                    className="inset-0 w-[80vw] object-cover rounded-3xl"
                    autoPlay
                    loop
                    muted
                    src="https://stream.mux.com/6fiGM5ChLz8T66ZZiuzk1KZuIKX8zJz00/medium.mp4"
                />
                <Image src={require("@/public/stageHome.png")}
                       alt={"aaa"}
                       className="absolute top-0 w-screen h-screen z-[-1]" />
            </section>
            <h1 className="text-4xl">Built Titling 400</h1>
            <div>
                Miaou
            </div>
        </>
    );
}
