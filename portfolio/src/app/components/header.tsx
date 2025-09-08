import Link from "next/link";
import {Spline_Sans_Mono} from "@next/font/google";
const Spline = Spline_Sans_Mono({
  subsets:['latin'],
  weight:['400']
});


export default function Header(){
    return(
        <div className={Spline.className}>
        <div className="flex justify-around bg-black text-white lg:h-[60px] h-[40px] items-center w-[100vw] lg:w-[98.9vw]">
            <h1 className="text-yellow-300 lg:text-[28px] text-[18px]"><Link href={'/'}>Aashra.</Link></h1>
            <ul className="flex justify-around inherit w-[60%] lg:text-[18px] text-[11px] md:text-[14px] lg:w-[25%] md:w-[40%]">
                <Link href={'/'}><li className="hover:text-yellow-300 transition-color duration-500">Home</li></Link>
                <Link href={'/about'}><li className="hover:text-yellow-300 transition-color duration-500">About</li></Link>
                <Link href={'/projects'}><li className="hover:text-yellow-300 transition-color duration-500">Projects</li></Link>
                <Link href={'/contact'}><li className="hover:text-yellow-300 transition-color duration-500">Contact</li></Link>
            </ul>
        </div>
        </div>
    )
}
