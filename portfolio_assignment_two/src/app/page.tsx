'use client';
import Image from "next/image";
import Link from "next/link";
import myimage from "./images/Capture.jpeg";
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faGift} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import {Spline_Sans_Mono} from "@next/font/google";
const myFont = Spline_Sans_Mono({
  subsets:['latin'],
  weight:['400','300']
});

export default function Home() {
  useEffect(()=>{
    const transition = document.querySelectorAll('.initial-position');
    const image = document.querySelectorAll('.initial-position-image');
    transition.forEach(e=>{
      e.classList.remove('translate-y-full','opacity-0');
      e.classList.add('translate-y-0','opacity-100')
    });
    image.forEach(e=>{
      e.classList.remove('translate-x-full','opacity-0');
      e.classList.add('translate-x-0','opacity-100')
    })
  })
  return (
    <div className={myFont.className}>
      <div className="flex bg-[#000000] text-[#ffffff] h-[92vh] lg:h-[92vh] justify-center items-center lg:p-[40px] flex-col-reverse lg:flex-row md:pl-[4px] md:pr-[4px] md:justify-around md:flex-row">
      <div className="flex flex-col justify-center items-center gap-[7px]">
        <h1 className=" transform transition-all translate-y-full opacity-0 duration-1000 initial-position
        lg:w-[70%] w-[95%] md:w-[94%] text-left lg:text-[25px] text-[14px] md:text-[18px] mt-[20px]">Next.JS Developer</h1>
        <h1 className="transform transition-all translate-y-full opacity-0 duration-1000 initial-position
        lg:w-[70%] w-[95%] md:w-[94%] text-left lg:text-[50px] text-[28px] md:text-[36px] leading-none">Hello I&apos;m</h1>
        <h1 className="transform transition-all translate-y-full opacity-0 duration-1000 initial-position
        lg:w-[70%] w-[95%] md:w-[94%] text-left text-yellow-300 lg:text-[50px] md:text-[36px] text-[28px] sm:leading-snug leading-none overflow-hidden whitespace-nowrap">Aashra Saleem</h1>
        <p className="transform transition-all translate-y-full opacity-0 duration-1000 initial-position
        lg:w-[70%] w-[95%] md:w-[94%] leading-relaxed font-light lg:text-[14px] text-[11px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate quisquam temporibus ducimus sunt non consequuntur, molestiae fugit rem omnis ut porro odit.</p>
        <ul className="transform transition-all translate-y-full opacity-0 duration-1000 initial-position
        flex justify-left gap-[10px] items-center mt-[12px] lg:w-[55%] w-[95%] md:w-[100%]">
          <Link href={'./mycv.pdf'} download={'mycv'}><li className="lg:p-[10px] p-[8px] lg:pr-[20px] lg:pl-[20px] border-yellow-300 border-2 rounded-2xl lg:mr-[14px] lg:w-[180px] w-[140px] text-[14px] lg:text-[17px]  md:pl-[10px] md:pr-[10px] md:w-[160px] md:ml-[10px] text-center
          hover:bg-yellow-300 hover:text-black transition-color duration-300 cursor-pointer">Download CV <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon></li></Link>
          <Link href={'https://github.com/account'}><li className="lg:text-xl text-sm w-[26px] border-yellow-300 border-2 rounded-full text-yellow-300 bg-black shadow-lg hover:shadow-[0_0_10px_4px_rgba(252,211,77,0.7)] transition-color duration-300
           lg:w-[34px] lg:mr-[8px] text-center p-[2px] hover:text-black hover:bg-yellow-300">
          <FontAwesomeIcon icon={faGithub} /></li></Link>
          <Link href={'https://www.linkedin.com/in/ashra-saleem-7047a0315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'}><li className="lg:text-xl text-sm w-[26px] border-yellow-300 border-2 rounded-full text-yellow-300 bg-black shadow-lg hover:shadow-[0_0_10px_4px_rgba(252,211,77,0.7)] transition-color duration-300
           lg:w-[34px] lg:mr-[8px] text-center p-[2px] hover:text-black hover:bg-yellow-300">
          <FontAwesomeIcon icon={faLinkedinIn} /></li></Link>
          <Link href={''}><li className="lg:text-xl text-sm w-[26px] border-yellow-300 border-2 rounded-full text-yellow-300 bg-black shadow-lg hover:shadow-[0_0_10px_4px_rgba(252,211,77,0.7)] transition-color duration-300
           lg:w-[34px] lg:mr-[8px] text-center p-[2px] hover:text-black hover:bg-yellow-300">
          <FontAwesomeIcon icon={faInstagram} /></li></Link>
          <Link href={''}><li className="lg:text-xl text-sm w-[26px] border-yellow-300 border-2 rounded-full text-yellow-300 bg-black shadow-lg hover:shadow-[0_0_10px_4px_rgba(252,211,77,0.7)] transition-color duration-300
           lg:w-[34px] lg:mr-[8px] text-center p-[2px] hover:text-black hover:bg-yellow-300">
          <FontAwesomeIcon icon={faTwitter} /></li></Link>
        </ul>
      </div>
      <Image src={myimage} alt="" className="transform transition-all duration-1000 translate-x-full opacity-0 initial-position-image
      shadow-lg hover:shadow-[0_0_10px_4px_rgba(252,211,77,0.7)] transition-shadow duration-300
      rounded-full w-[200px] md:w-[300px] lg:w-[400px] lg:mr-[65px] p-[2px] border-solid border-yellow-300 border-2 md:mr-[40px]"></Image>
      </div>
    </div>
  );
}
