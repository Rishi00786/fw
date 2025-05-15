"use client"
import React, { useEffect, useRef } from 'react'
import SVG_Path from './SVG'
import { gsap } from 'gsap';

const Hero = () => {
    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        if (svgRef.current) {
            const path = svgRef.current.querySelector('path');
            if (path) {
                const length = path.getTotalLength();
                gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
                gsap.to(path, {
                    strokeDashoffset: 0,
                    duration: 1,
                    ease: "power1.inOut",
                });
            }
        }
    }, [svgRef]);

    return (
        <div className='h-[73vh] min-h-[500px] mt-16 w-screen flex flex-col items-center justify-start gap-4 md:gap-10 px-4'>
            <div className='flex flex-col items-center justify-center gap-2 md:gap-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-16 md:mt-28'>
                <div className='flex flex-col md:flex-row gap-2 md:gap-4 items-center justify-center text-center'>
                    <div className='font-medium'>License selling</div>
                    <span className='relative inline-block'>
                        <SVG_Path ref={svgRef} className='absolute inset-0' />
                        <span className='relative inline-block text-blue-600 font-medium'>made easy</span>
                    </span>
                </div>
                <div className='font-medium text-center'>for smart software users</div>
            </div>
            <div className='text-sm sm:text-base md:text-lg text-center font-normal max-w-[90vw] md:w-[37rem]'>
                Easily sell your old or unused software licenses in minutes. Get a quick quote, fair value, and instant payout — no hassle, no delays.
            </div>
            <div className='w-32 h-10 md:w-44 md:h-12 bg-black text-white text-center rounded-full flex items-center justify-center cursor-pointer'>
                <a href="#steps" ><div className='text-sm md:text-base font-semibold'>Sell My Licenses</div></a>
            </div>
        </div>
    )
}

export default Hero