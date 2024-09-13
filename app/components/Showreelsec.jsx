"use client"

import { useEffect, useState, useRef, useCallback } from "react"

const Showreelsec = () => {
    const [rotate, setRotate] = useState(0)
    const containerRef = useRef(null)

    const handleMouseMove = useCallback((e) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const deltaX = e.clientX - centerX;
        const deltaY = e.clientY - centerY;

        const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
        setRotate(angle - 180);
    }, []);

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);

        const scroll = document.querySelector('[data-scroll-container]')?.__locomotiveScroll;
        if (scroll) {
            setTimeout(() => {
                scroll.update();
            }, 50);
        }

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        }
    }, [handleMouseMove]);

    const Eye = ({ className }) => (
        <div className={`w-[20vw] sm:w-[13vw] sm:h-[13vw] md:w-[14vw] md:h-[14vw] lg:w-[10vw] h-[20vw] lg:h-[10vw] bg-white rounded-full flex items-center justify-center ${className}`}>
            <div className="w-2/3 h-2/3 relative rounded-full bg-zinc-900">
                <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-5">
                    <div className="w-5 h-5 rounded-full bg-zinc-100"></div>
                </div>
            </div>
        </div>
    )

    return (
        <div ref={containerRef} className="w-full h-[90vh] md:h-screen bg-[#f1f1f1] flex items-center justify-center overflow-hidden">
            <div data-scroll data-scroll-section data-scroll-speed='-0.6' className="relative w-[100%] md:w-full h-[70%] md:h-full bg-[url('/showreel-img.svg')] bg-cover bg-center">
                <div className="absolute flex gap-5 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                    <Eye />
                    <Eye />
                </div>
            </div>
        </div>
    )
}

export default Showreelsec