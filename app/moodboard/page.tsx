"use client";

import {useRef, useState} from "react";
import { MouseEvent } from "react";

export default function MoodBoardPage() {
    const [position, setPosition] = useState({ top: '50%', left: '50%' });
    const [dragging, setDragging] = useState(false);
    const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const containerDrag = useRef<any>();

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

        const containerWidth = containerDrag.current.clientWidth; // Largeur du conteneur en pixels
        const containerHeight = containerDrag.current.clientHeight; // Hauteur du conteneur en pixels

        // Convertir la taille du conteneur en pourcentage de la taille de l'écran
        const containerWidthPercent = containerWidth / window.innerWidth * 100;
        const containerHeightPercent = containerHeight / window.innerHeight * 100;

        // Clamp values to stay within the specified range, taking into account the container size
        newLeft = Math.max((-containerWidthPercent / 2) + 100, Math.min(containerWidthPercent / 2, newLeft));
        newTop = Math.max((-containerHeightPercent / 2) + 100, Math.min(containerHeightPercent / 2, newTop));

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
            <div ref={containerDrag}
                 className="absolute left-1/2 top-1/2 -translate-x-1/2 w-[4802px] -translate-y-1/2 h-[3169px] bg-[#5497FF] text-white"
                 style={{
                     top: position.top,
                     left: position.left,
                     cursor: dragging ? 'grabbing' : 'grab',
                 }}>
                <h1 className={"-tracking-[17.5px] text-[15.625rem] font-bold shadow-title font-secondary italic text-customPurple text-center -mt-40 -rotate-[4.093deg] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 select-none"}>
                    Moodboard
                </h1>
            </div>
        </div>
    );
}
