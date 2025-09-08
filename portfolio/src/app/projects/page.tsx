'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import projectOne from '../images/project-1.png';
import projectTwo from '../images/project-2.png';
import projectThree from '../images/project-3.png';
import projectFour from '../images/project-4.png';
import projectFive from '../images/project-5.png';
import projectSix from '../images/project-6.png';
import projectSeven from "../images/project-7.png";
import { Spline_Sans_Mono } from "@next/font/google";
import Link from 'next/link';
const text = Spline_Sans_Mono({
    subsets : ['latin'],
    weight : ['300','400']
});
export default function Project(){
    useEffect(()=>{
        const transition = document.querySelectorAll('.position');
        const text = document.querySelectorAll('.position-text');
        transition.forEach(e=>{
            e.classList.remove('translate-y-full','opacity-0');
            e.classList.add('translate-y-0','opacity-100')
        });
        text.forEach(e=>{ 
            e.classList.remove('translate-x-full','opacity-0');
            e.classList.add('translate-x-0','opacity-100')  
        })
    })
    return(
        <div className={`${text.className} flex flex-col h-auto justify-center items-center bg-black`}>
            <h1 className='bg-black text-yellow-300 lg:text-[46px] md:text-[30px] text-[20px] pt-[2%]
            transform transition-all opacity-0 translate-x-full duration-1000 position-text'>My Projects</h1>
            <div className={`transform transition-all opacity-0 translate-y-full duration-1000 position
            ${text.className} bg-black h-auto flex flex-wrap gap-[10%] justify-center pt-[5%]`}>
                <Link href={'https://static-resume-seven-rust.vercel.app/'} className='lg:w-[40%] w-[80%] mb-[5%]'><Image src={projectOne} alt='' className='w-[100%]  rounded-xl border-yellow-300 border-[4px] p-[2px]
                cursor:pointer shadow-lg hover:shadow-[0_0_10px_4px_rgba(252,211,77,0.7)] hover:scale-110 transition-transform duration-600'></Image></Link>
                <Link href={'https://portfolio-theta-nine-11.vercel.app/'} className='lg:w-[40%] w-[80%] mb-[5%]'><Image src={projectTwo} alt='' className='w-[100%]  rounded-xl border-yellow-300 border-[4px] p-[2px]
                cursor:pointer shadow-lg hover:shadow-[0_0_10px_4px_rgba(252,211,77,0.7)] hover:scale-110 transition-transform duration-600'></Image></Link>
                <Link href={'https://shareable-resume-builder-rust.vercel.app/'} className='lg:w-[40%] w-[80%] mb-[5%]'><Image src={projectThree} alt='' className='w-[100%]  rounded-xl border-yellow-300 border-[4px] p-[2px]
                cursor:pointer shadow-lg hover:shadow-[0_0_10px_4px_rgba(252,211,77,0.7)] hover:scale-110 transition-transform duration-600'></Image></Link>
                <Link href={'https://digit-counter-khaki.vercel.app/'} className='lg:w-[40%] w-[80%] mb-[5%]'><Image src={projectFour} alt='' className='w-[100%]  rounded-xl border-yellow-300 border-[4px] p-[2px]
                cursor:pointer shadow-lg hover:shadow-[0_0_10px_4px_rgba(252,211,77,0.7)] hover:scale-110 transition-transform duration-600'></Image></Link>
                <Link href={'https://netflix-clone-sigma-dun-40.vercel.app/'} className='lg:w-[40%] w-[80%] mb-[5%]'><Image src={projectFive} alt='' className='w-[100%]  rounded-xl border-yellow-300 border-[4px] p-[2px]
                cursor:pointer shadow-lg hover:shadow-[0_0_10px_4px_rgba(252,211,77,0.7)] hover:scale-110 transition-transform duration-600'></Image></Link>
                <Link href={'https://html-scientific-calculator.vercel.app/'} className='lg:w-[40%] w-[80%] mb-[5%]'><Image src={projectSix} alt='' className='w-[100%]  rounded-xl border-yellow-300 border-[4px] p-[2px]
                cursor:pointer shadow-lg hover:shadow-[0_0_10px_4px_rgba(252,211,77,0.7)] hover:scale-110 transition-transform duration-600'></Image></Link>
            </div>
            <Image src={projectSeven} alt='' className='transform transition-all opacity-0 translate-y-full duration-1000 position w-[80%] mb-[5%] rounded-xl border-yellow-300 border-[4px] p-[2px]
            cursor:pointer shadow-lg hover:shadow-[0_0_10px_4px_rgba(252,211,77,0.7)] hover:scale-110 transition-transform duration-600'></Image>
        </div>
    )
}
