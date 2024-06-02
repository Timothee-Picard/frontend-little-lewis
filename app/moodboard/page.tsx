"use client";

import {useState} from "react";
import Image from "next/image";
import {MouseEvent} from "react";

export default function MoodboardPage() {
    const [position, setPosition] = useState({ top: '50%', left: '50%' });
    const [dragging, setDragging] = useState(false);

    const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
    const [offset, setOffset] = useState({ x: 0, y: 0 });


    function handleMouseDown(e: MouseEvent) {
        setDragging(true);

        setStartPosition({ x: e.clientX, y: e.clientY });
        setOffset({
            x: parseFloat(position.left) / 100 * window.innerWidth,
            y: parseFloat(position.top) / 100 * window.innerHeight,
        });
    }

    function handleMouseUp() {
        setDragging(false);
    }

    function handleMouseMove(e: MouseEvent) {
        if (!dragging) return;

        const deltaX = e.clientX - startPosition.x;
        const deltaY = e.clientY - startPosition.y;

        let newLeft = (offset.x + deltaX) / window.innerWidth * 100;
        let newTop = (offset.y + deltaY) / window.innerHeight * 100;

        // Clamp values to stay within the specified range
        newLeft = Math.max(-50, Math.min(150, newLeft));
        newTop = Math.max(-50, Math.min(150, newTop));

        setPosition({
            left: `${newLeft}%`,
            top: `${newTop}%`,
        });
    }

    return (
        <div className="relative w-screen h-screen overflow-hidden"
             onMouseDown={handleMouseDown}
             onMouseUp={handleMouseUp}
             onMouseLeave={handleMouseUp}
             onMouseMove={handleMouseMove}>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 w-[300vw] -translate-y-1/2 h-[300vh] bg-cyan-900 text-white"
                 style={{
                        top: position.top,
                        left: position.left,
                        cursor: dragging ? 'grabbing' : 'grab',
                 }}>
                <Image src="https://picsum.photos/200/300" alt={""}
                       className="absolute left-2/8 top-2/8 -translate-x-1/2 -translate-y-1/2 select-none"
                       width={200} height={300} draggable={false} />
                <Image src="https://picsum.photos/200/300" alt={""}
                       className="absolute left-3/8 top-2/8 -translate-x-1/2 -translate-y-1/2 select-none"
                       width={200} height={300} draggable={false} />
                <Image src="https://picsum.photos/200/300" alt={""}
                       className="absolute left-4/8 top-2/8 -translate-x-1/2 -translate-y-1/2 select-none"
                       width={200} height={300} draggable={false} />
                <Image src="https://picsum.photos/200/300" alt={""}
                       className="absolute left-5/8 top-2/8 -translate-x-1/2 -translate-y-1/2 select-none"
                       width={200} height={300} draggable={false} />
                <Image src="https://picsum.photos/200/300" alt={""}
                          className="absolute left-6/8 top-2/8 -translate-x-1/2 -translate-y-1/2 select-none"
                          width={200} height={300} draggable={false} />
                <Image src="https://picsum.photos/200/300" alt={""}
                            className="absolute left-7/8 top-2/8 -translate-x-1/2 -translate-y-1/2 select-none"
                            width={200} height={300} draggable={false} />

                <Image src="https://picsum.photos/200/300" alt={""}
                          className="absolute left-2/8 top-3/8 -translate-x-1/2 -translate-y-1/2 select-none"
                          width={200} height={300} draggable={false} />
                <Image src="https://picsum.photos/200/300" alt={""}
                            className="absolute left-3/8 top-3/8 -translate-x-1/2 -translate-y-1/2 select-none"
                            width={200} height={300} draggable={false} />
                <Image src="https://picsum.photos/200/300" alt={""}
                            className="absolute left-4/8 top-3/8 -translate-x-1/2 -translate-y-1/2 select-none"
                            width={200} height={300} draggable={false} />
                <Image src="https://picsum.photos/200/300" alt={""}
                            className="absolute left-5/8 top-3/8 -translate-x-1/2 -translate-y-1/2 select-none"
                            width={200} height={300} draggable={false} />
                <Image src="https://picsum.photos/200/300" alt={""}
                            className="absolute left-6/8 top-3/8 -translate-x-1/2 -translate-y-1/2 select-none"
                            width={200} height={300} draggable={false} />
                <Image src="https://picsum.photos/200/300" alt={""}
                            className="absolute left-7/8 top-3/8 -translate-x-1/2 -translate-y-1/2 select-none"
                            width={200} height={300} draggable={false} />

                <Image src="https://picsum.photos/200/300" alt={""}
                            className="absolute left-2/8 top-4/8 -translate-x-1/2 -translate-y-1/2 select-none"
                            width={200} height={300} draggable={false} />
                <Image src="https://picsum.photos/200/300" alt={""}
                            className="absolute left-3/8 top-4/8 -translate-x-1/2 -translate-y-1/2 select-none"
                            width={200} height={300} draggable={false} />
                <Image src="https://picsum.photos/200/300" alt={""}
                            className="absolute left-4/8 top-4/8 -translate-x-1/2 -translate-y-1/2 select-none"
                            width={200} height={300} draggable={false} />
                <Image src="https://picsum.photos/200/300" alt={""}
                            className="absolute left-5/8 top-4/8 -translate-x-1/2 -translate-y-1/2 select-none"
                            width={200} height={300} draggable={false} />
                <Image src="https://picsum.photos/200/300" alt={""}
                            className="absolute left-6/8 top-4/8 -translate-x-1/2 -translate-y-1/2 select-none"
                            width={200} height={300} draggable={false} />
                <Image src="https://picsum.photos/200/300" alt={""}
                            className="absolute left-7/8 top-4/8 -translate-x-1/2 -translate-y-1/2 select-none"
                            width={200} height={300} draggable={false} />

                <Image src="https://picsum.photos/200/300" alt={""}
                            className="absolute left-2/8 top-5/8 -translate-x-1/2 -translate-y-1/2 select-none"
                            width={200} height={300} draggable={false} />
                <Image src="https://picsum.photos/200/300" alt={""}
                            className="absolute left-3/8 top-5/8 -translate-x-1/2 -translate-y-1/2 select-none"
                            width={200} height={300} draggable={false} />
                <Image src="https://picsum.photos/200/300" alt={""}
                       className="absolute left-4/8 top-5/8 -translate-x-1/2 -translate-y-1/2 select-none"
                       width={200} height={300} draggable={false} />
                <Image src="https://picsum.photos/200/300" alt={""}
                          className="absolute left-5/8 top-5/8 -translate-x-1/2 -translate-y-1/2 select-none"
                          width={200} height={300} draggable={false} />
                <Image src="https://picsum.photos/200/300" alt={""}
                            className="absolute left-6/8 top-5/8 -translate-x-1/2 -translate-y-1/2 select-none"
                            width={200} height={300} draggable={false} />
                <Image src="https://picsum.photos/200/300" alt={""}
                            className="absolute left-7/8 top-5/8 -translate-x-1/2 -translate-y-1/2 select-none"
                            width={200} height={300} draggable={false} />

                <Image src="https://picsum.photos/200/300" alt={""}
                            className="absolute left-2/8 top-6/8 -translate-x-1/2 -translate-y-1/2 select-none"
                            width={200} height={300} draggable={false} />
                <Image src="https://picsum.photos/200/300" alt={""}
                            className="absolute left-3/8 top-6/8 -translate-x-1/2 -translate-y-1/2 select-none"
                            width={200} height={300} draggable={false} />
                <Image src="https://picsum.photos/200/300" alt={""}
                            className="absolute left-4/8 top-6/8 -translate-x-1/2 -translate-y-1/2 select-none"
                            width={200} height={300} draggable={false} />
                <Image src="https://picsum.photos/200/300" alt={""}
                            className="absolute left-5/8 top-6/8 -translate-x-1/2 -translate-y-1/2 select-none"
                            width={200} height={300} draggable={false} />
                <Image src="https://picsum.photos/200/300" alt={""}
                            className="absolute left-6/8 top-6/8 -translate-x-1/2 -translate-y-1/2 select-none"
                            width={200} height={300} draggable={false} />
                <Image src="https://picsum.photos/200/300" alt={""}
                            className="absolute left-7/8 top-6/8 -translate-x-1/2 -translate-y-1/2 select-none"
                            width={200} height={300} draggable={false} />

                <Image src="https://picsum.photos/200/300" alt={""}
                            className="absolute left-2/8 top-7/8 -translate-x-1/2 -translate-y-1/2 select-none"
                            width={200} height={300} draggable={false} />
                <Image src="https://picsum.photos/200/300" alt={""}
                            className="absolute left-3/8 top-7/8 -translate-x-1/2 -translate-y-1/2 select-none"
                            width={200} height={300} draggable={false} />
                <Image src="https://picsum.photos/200/300" alt={""}
                            className="absolute left-4/8 top-7/8 -translate-x-1/2 -translate-y-1/2 select-none"
                            width={200} height={300} draggable={false} />
                <Image src="https://picsum.photos/200/300" alt={""}
                            className="absolute left-5/8 top-7/8 -translate-x-1/2 -translate-y-1/2 select-none"
                            width={200} height={300} draggable={false} />
                <Image src="https://picsum.photos/200/300" alt={""}
                            className="absolute left-6/8 top-7/8 -translate-x-1/2 -translate-y-1/2 select-none"
                            width={200} height={300} draggable={false} />
                <Image src="https://picsum.photos/200/300" alt={""}
                            className="absolute left-7/8 top-7/8 -translate-x-1/2 -translate-y-1/2 select-none"
                            width={200} height={300} draggable={false} />
            </div>
        </div>
    )
}
