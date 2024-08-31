"use client";

import {useEffect, useRef, useState} from "react";
import { MouseEvent } from "react";
import CustomTitle from "@/components/CustomTitle";
import Image from "next/image";
import {intervalsManager} from "next/dist/server/web/sandbox/resource-managers";

export default function MoodBoardPage() {
    const containerDrag = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ top: '50%', left: '50%' });
    const [dragging, setDragging] = useState(false);
    const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const [velocity, setVelocity] = useState({ x: 0, y: 0 });

    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    function handleMouseDown(e: MouseEvent) {
        if (intervalRef) clearInterval(intervalRef.current!);
        setVelocity({ x: 0, y: 0 });
        setDragging(true);
        setStartPosition({ x: e.clientX, y: e.clientY });
        setOffset({
            x: parseFloat(position.left) / 100 * window.innerWidth,
            y: parseFloat(position.top) / 100 * window.innerHeight,
        });
    }
    function handleMouseUp() {
        setDragging(false);
        setOffset({
            x: parseFloat(position.left) / 100 * window.innerWidth,
            y: parseFloat(position.top) / 100 * window.innerHeight,
        });

        if (intervalRef.current) {
            // console.log('Interval déjà en cours, on le nettoie avant d\'en créer un nouveau');
            clearInterval(intervalRef.current);
        }

        intervalRef.current = setInterval(() => {
            setVelocity(prevVelocity => {
                const newVelocity = {
                    x: prevVelocity.x * 0.95,
                    y: prevVelocity.y * 0.95,
                };

                // Arrêter l'intervalle si la vélocité est suffisamment faible
                if (Math.abs(newVelocity.x) < 0.5 && Math.abs(newVelocity.y) < 0.5) {
                    // console.log('clear interval');
                    clearInterval(intervalRef.current!);
                    intervalRef.current = null;
                }

                return newVelocity; // Retourne la nouvelle vélocité
            });
        }, 16); // 16 ms correspond à environ 60 fps
    }

    useEffect(() => {
        return () => {
            // Cleanup when component unmounts or on re-render
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (containerDrag.current === null) return;
        if (dragging) return;

        // Mettre à jour la position en fonction de la vélocité
        let newLeft = (offset.x - velocity.x) / window.innerWidth * 100;
        let newTop = (offset.y - velocity.y) / window.innerHeight * 100;

        const containerWidth = containerDrag.current.clientWidth;
        const containerHeight = containerDrag.current.clientHeight;

        const containerWidthPercent = containerWidth / window.innerWidth * 100;
        const containerHeightPercent = containerHeight / window.innerHeight * 100;

        newLeft = Math.max((-containerWidthPercent / 2) + 100, Math.min(containerWidthPercent / 2, newLeft));
        newTop = Math.max((-containerHeightPercent / 2) + 100, Math.min(containerHeightPercent / 2, newTop));

        // Vérification des rebonds sur les bords lors du drag
        if (newLeft === (-containerWidthPercent / 2) + 100 || newLeft === containerWidthPercent / 2) {
            // bounce x
            setVelocity(prevVelocity => ({
                x: -prevVelocity.x,
                y: prevVelocity.y,
            }));
        }

        if (newTop === (-containerHeightPercent / 2) + 100 || newTop === containerHeightPercent / 2) {
            // bounce y
            setVelocity(prevVelocity => ({
                x: prevVelocity.x,
                y: -prevVelocity.y,
            }));
        }

        setPosition({
            left: `${newLeft}%`,
            top: `${newTop}%`,
        });

        // Mettre à jour le offset pour la prochaine boucle
        setOffset({ x: newLeft / 100 * window.innerWidth, y: newTop / 100 * window.innerHeight });
    }, [velocity]);

    function handleMouseMove(e: MouseEvent) {
        if (!dragging) return;
        if(containerDrag.current === null) return;

        const factor = 3; // Augmentez ce facteur pour réduire la vitesse

        const deltaX = e.clientX - startPosition.x;
        const deltaY = e.clientY - startPosition.y;

        // Calculer la vélocité en fonction du déplacement
        setVelocity({ x: -deltaX / factor, y: -deltaY / factor });

        let newLeft = (offset.x + deltaX) / window.innerWidth * 100;
        let newTop = (offset.y + deltaY) / window.innerHeight * 100;

        const containerWidth = containerDrag.current.clientWidth;
        const containerHeight = containerDrag.current.clientHeight;

        const containerWidthPercent = containerWidth / window.innerWidth * 100;
        const containerHeightPercent = containerHeight / window.innerHeight * 100;

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
                <CustomTitle className="z-10 -mt-40 text-[10rem] -rotate-[4.093deg] w-fit absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 select-none">
                    Moodboard
                </CustomTitle>
                <Image className="rounded absolute top-[40%] left-[39.6%] -translate-y-1/2 -translate-x-1/2 select-none"
                       draggable="false"
                       src={"/moodboard/img.png"}
                       width={459.592} height={459.592}
                       alt="Moodboard" />
                <Image className="z-10 rounded absolute top-[43%] left-[33%] -translate-y-1/2 -translate-x-1/2 select-none"
                       draggable="false"
                       src={"/moodboard/img_1.png"}
                       width={301} height={219}
                       alt="Moodboard" />
                <Image className="z-10 rounded absolute top-[41%] left-[66%] -translate-y-1/2 -translate-x-1/2 select-none"
                       draggable="false"
                       src={"/moodboard/img_2.png"}
                       width={189} height={190}
                       alt="Moodboard" />
                <Image className="z-10 rounded absolute top-[15%] left-[54%] -translate-y-1/2 -translate-x-1/2 select-none"
                       draggable="false"
                       src={"/moodboard/img_3.png"}
                       width={532.156} height={605.172}
                       alt="Moodboard" />
                <Image className="rounded absolute top-[50%] left-[61%] -translate-y-1/2 -translate-x-1/2 select-none"
                       draggable="false"
                       src={"/moodboard/img_2.png"}
                       width={475.286} height={327.577}
                       alt="Moodboard" />
                <Image className="rounded absolute top-[59%] left-[66.2%] -translate-y-1/2 -translate-x-1/2 select-none"
                       draggable="false"
                       src={"/moodboard/img_5.png"}
                       width={503} height={505}
                       alt="Moodboard" />
                <Image className="rounded absolute top-[47.5%] left-[66.2%] -translate-y-1/2 -translate-x-1/2 select-none"
                       draggable="false"
                       src={"/moodboard/img_6.png"}
                       width={80.676} height={80.676}
                       alt="Moodboard" />
                <Image className="rounded absolute top-[57%] left-[32%] -translate-y-1/2 -translate-x-1/2 select-none"
                       draggable="false"
                       src={"/moodboard/img_7.png"}
                       width={244} height={245}
                       alt="Moodboard" />
                <Image className="rounded absolute top-[60.7%] left-[31.3%] -translate-y-1/2 -translate-x-1/2 select-none"
                       draggable="false"
                       src={"/moodboard/img_8.png"}
                       width={56.566} height={56.566}
                       alt="Moodboard" />
                <Image className="rounded absolute top-[66.8%] left-[37%] -translate-y-1/2 -translate-x-1/2 select-none"
                       draggable="false"
                       src={"/moodboard/img_9.png"}
                       width={278} height={281}
                       alt="Moodboard" />
                <Image className="rounded absolute top-[79%] left-[53%] -translate-y-1/2 -translate-x-1/2 select-none"
                       draggable="false"
                       src={"/moodboard/img_10.png"}
                       width={634} height={620}
                       alt="Moodboard" />
                <Image className="rounded absolute top-[79%] left-[67%] -translate-y-1/2 -translate-x-1/2 select-none"
                       draggable="false"
                       src={"/moodboard/img_11.png"}
                       width={267.33} height={193.451}
                       alt="Moodboard" />
                <Image className="z-10 rounded absolute top-[30%] left-[71%] -translate-y-1/2 -translate-x-1/2 select-none"
                       draggable="false"
                       src={"/moodboard/img_12.png"}
                       width={341.741} height={235.535}
                       alt="Moodboard" />
                <Image className="rounded absolute top-[32.3%] left-[76.4%] -translate-y-1/2 -translate-x-1/2 select-none"
                       draggable="false"
                       src={"/moodboard/img_13.png"}
                       width={413.407} height={413.407}
                       alt="Moodboard" />
                <Image className="rounded absolute top-[27%] left-[81%] -translate-y-1/2 -translate-x-1/2 select-none"
                       draggable="false"
                       src={"/moodboard/img_14.png"}
                       width={146} height={146}
                       alt="Moodboard" />
                <Image className="rounded absolute top-[43%] left-[94%] -translate-y-1/2 -translate-x-1/2 select-none"
                       draggable="false"
                       src={"/moodboard/img_15.png"}
                       width={503} height={669}
                       alt="Moodboard" />
                <Image className="rounded absolute top-[12%] left-[87%] -translate-y-1/2 -translate-x-1/2 select-none"
                       draggable="false"
                       src={"/moodboard/img_16.png"}
                       width={537.213} height={537.213}
                       alt="Moodboard" />
                <Image className="rounded absolute top-[13%] left-[71%] -translate-y-1/2 -translate-x-1/2 select-none"
                       draggable="false"
                       src={"/moodboard/img_17.png"}
                       width={202} height={228}
                       alt="Moodboard" />
                <Image className="rounded absolute top-[53%] left-[90%] -translate-y-1/2 -translate-x-1/2 select-none"
                       draggable="false"
                       src={"/moodboard/img_18.png"}
                       width={244} height={244}
                       alt="Moodboard" />
                <Image className="rounded absolute top-[49%] left-[78%] -translate-y-1/2 -translate-x-1/2 select-none"
                       draggable="false"
                       src={"/moodboard/img_19.png"}
                       width={208} height={233}
                       alt="Moodboard" />
                <Image className="rounded absolute top-[73%] left-[88%] -translate-y-1/2 -translate-x-1/2 select-none"
                       draggable="false"
                       src={"/moodboard/img_20.png"}
                       width={492} height={370}
                       alt="Moodboard" />
                <Image className="rounded absolute top-[67%] left-[97%] -translate-y-1/2 -translate-x-1/2 select-none"
                       draggable="false"
                       src={"/moodboard/img_21.png"}
                       width={133} height={133}
                       alt="Moodboard" />
                <Image className="rounded absolute top-[80%] left-[82.5%] -translate-y-1/2 -translate-x-1/2 select-none"
                       draggable="false"
                       src={"/moodboard/img_22.png"}
                       width={186} height={184}
                       alt="Moodboard" />
                <Image className="rounded absolute top-[83%] left-[31.5%] -translate-y-1/2 -translate-x-1/2 select-none"
                       draggable="false"
                       src={"/moodboard/img_23.png"}
                       width={181} height={181}
                       alt="Moodboard" />
                <Image className="z-10 rounded absolute top-[62%] left-[23%] -translate-y-1/2 -translate-x-1/2 select-none"
                       draggable="false"
                       src={"/moodboard/img_24.png"}
                       width={293} height={293}
                       alt="Moodboard" />
                <Image className="rounded absolute top-[72.5%] left-[16%] -translate-y-1/2 -translate-x-1/2 select-none"
                       draggable="false"
                       src={"/moodboard/img_25.png"}
                       width={540} height={540}
                       alt="Moodboard" />
                <Image className="rounded absolute top-[50%] left-[7%] -translate-y-1/2 -translate-x-1/2 select-none"
                       draggable="false"
                       src={"/moodboard/img_26.png"}
                       width={464.427} height={462.837}
                       alt="Moodboard" />
                <Image className="rounded absolute top-[42.3%] left-[4.3%] -translate-y-1/2 -translate-x-1/2 select-none"
                       draggable="false"
                       src={"/moodboard/img_27.png"}
                       width={233.907} height={151.233}
                       alt="Moodboard" />
                <Image className="rounded absolute top-[38%] left-[22%] -translate-y-1/2 -translate-x-1/2 select-none"
                       draggable="false"
                       src={"/moodboard/img_28.png"}
                       width={116.881} height={189.507}
                       alt="Moodboard" />
                <Image className="rounded absolute top-[10%] left-[37%] -translate-y-1/2 -translate-x-1/2 select-none"
                       draggable="false"
                       src={"/moodboard/img_29.png"}
                       width={339.989} height={447.612}
                       alt="Moodboard" />
                <Image className="rounded absolute top-[17%] left-[34%] -translate-y-1/2 -translate-x-1/2 select-none"
                       draggable="false"
                       src={"/moodboard/img_30.png"}
                       width={269.764} height={146.611}
                       alt="Moodboard" />
                <Image className="rounded absolute top-[23%] left-[14%] -translate-y-1/2 -translate-x-1/2 select-none"
                       draggable="false"
                       src={"/moodboard/img_31.png"}
                       width={503.932} height={377.156}
                       alt="Moodboard" />
                <Image className="rounded absolute top-[27.6%] left-[20%] -translate-y-1/2 -translate-x-1/2 select-none"
                       draggable="false"
                       src={"/moodboard/img_32.png"}
                       width={191} height={141}
                       alt="Moodboard" />
            </div>
        </div>
    );
}
