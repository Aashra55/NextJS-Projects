'use client'
import { faPhone, faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect} from "react";
import {Spline_Sans_Mono} from "@next/font/google";
const sans = Spline_Sans_Mono({
  subsets:['latin'],
  weight:['400','300']
});

export default function Contact(){
    useEffect(()=>{
        const transition = document.querySelectorAll('.position');
        transition.forEach(e=>{
            e.classList.remove('translate-y-full','opacity-0');
            e.classList.add('translate-y-0','opacity-100')
        });
        const position = document.querySelectorAll('.initial-position');
        position.forEach(e=>{
            e.classList.remove('translate-x-full','opacity-0');
            e.classList.add('translate-x-0','opacity-100')
        })
    })
    return(
            <div className={`${sans.className} bg-[#000000] lg:h-[100vh] lg:p-[40px] p-[10px] pt-[40px] flex gap-[20px] lg:gap-[80px] justify-center items-center h-auto md:h-[140vh] lg:flex-row flex-col`}>
                <div className={`position transform transition-all duration-1000 translate-y-full opacity-0
                    bg-[#333333] lg:h-[100%] lg:w-[40%] flex-wrap  rounded-xl p-[10px] px-[20px] flex flex-col justify-top items-center gap-[20px]`}>
                    <h1 className={`text-left font-500 w-[100%] lg:text-[30px] text-[25px] text-yellow-300`}>Let&apos;s Work Together</h1>
                    <p className="text-[#999999] lg:text-[16px] text-[12px]">Lorem ipsum dolor, sit amet consectetur adipisicing fugit rem omnis ut porro odit.</p>
                    <form className="flex flex-col justify-center items-center w-[100%] gap-[15px]">
                        <div className="flex flex-row justify-around w-[100%] h-[40px] items-center gap-[15px]">
                            <input type="text" placeholder="First Name" className="w-[50%] h-[100%] bg-black text-[#777777] placeholder-[#777777] rounded-md p-[6px]
                             text-[14px] lg:text-[16px]"></input>
                            <input type="text" placeholder="Last Name" className="w-[50%] h-[100%] bg-black text-[#777777] placeholder-[#777777] rounded-md p-[6px]
                            text-[14px] lg:text-[16px]"></input>
                        </div>
                        <div className="flex flex-row justify-center w-[100%] h-[40px] items-center gap-[15px]">
                            <input type="email" placeholder="Email" className="w-[50%] h-[100%] bg-black text-[#777777] placeholder-[#777777] rounded-md p-[6px]
                            text-[14px] lg:text-[16px]"></input>
                            <input type="tel" placeholder="Phone" className="w-[50%] h-[100%] bg-black text-[#777777] placeholder-[#777777] rounded-md p-[6px]
                            text-[14px] lg:text-[16px]"></input>
                        </div>
                        <div className="w-[100%] h-[40px]">
                            <select name="services" className="w-[100%] h-[100%] bg-black text-[#777777] rounded-md text-[14px] lg:text-[16px]">
                                <option value="">Select a Service</option>
                                <option value="">Responsive Web Development</option>
                                <option value="">UI/UX Designing</option>
                                <option value="">SPA Development</option>
                                <option value="">Techincal Writing</option>
                            </select>
                        </div>
                        <div className="w-[100%] h-auto">
                            <textarea name="message" placeholder="Type your message here."
                             className="w-[100%] h-[180px] bg-black text-[#777777] placeholder-[#777777] rounded-md p-[6px]
                             text-[14px] lg:text-[16px]">
                            </textarea>
                        </div>
                        <div className="flex justify-left w-[100%] p-[6px] pt-0 pb-0">
                        <button className="text-yellow-300 transition-color duration-500 bg-black rounded-full h-[40px] w-[150px] hover:bg-yellow-300 hover:text-black">Send Message</button>
                        </div>
                    </form>
                </div>
                <div className=" h-[100%] lg:w-[35%] w-[80%] flex flex-row justify-left items-center gap-[20px] bg-black">
                    <div className="h-[50%] lg:w-[12%] md:w-[10%] w-[12%] flex flex-col items-around justif-evenly gap-[20px] lg:gap-[34px]">
                        <div className="transform transition-all translate-x-full opacity-0 duration-1000 initial-position
                        bg-[#777777] w-[100%] h-[35px] md:h-[50px] lg:h-[50px] flex items-center justify-center rounded-lg">
                            <FontAwesomeIcon icon={faPhone} className="text-yellow-300 text-white w-[80%] lg:h-[25px] h-[20px]"/></div>
                        <div className="transform transition-all translate-x-full opacity-0 duration-700 initial-position
                        bg-[#777777] w-[100%] h-[35px] md:h-[50px] lg:h-[50px] flex items-center justify-center rounded-lg">
                            <FontAwesomeIcon icon={faLocationDot} className="text-yellow-300 text-white w-[80%] lg:h-[25px] h-[20px]"/></div>
                        <div className="transform transition-all translate-x-full opacity-0 duration-400 initial-position
                        bg-[#777777] w-[100%] h-[35px] md:h-[50px] lg:h-[50px] flex items-center justify-center rounded-lg">
                            <FontAwesomeIcon icon={faEnvelope} className="text-yellow-300 text-white w-[80%] lg:h-[25px] h-[20px]"/></div>
                    </div>
                    <div className="h-[50%] lg:w-[50%] w-[80%] flex flex-col items-around justif-evenly gap-[20px] lg:gap-[34px]">
                        <div className="transform transition-all translate-x-full opacity-0 duration-1000 initial-position">
                            <p className="text-[#777777]">Phone</p>
                            <p className="text-[#ffffff]">(+48) 321 456 875</p>
                        </div>
                        <div className="transform transition-all translate-x-full opacity-0 duration-700 initial-position">
                            <p className="text-[#777777]">Email</p>
                            <p className="text-[#ffffff]">youremail@gmail.com</p>
                        </div>
                        <div className="transform transition-all translate-x-full opacity-0 duration-400 initial-position">
                            <p className="text-[#777777]">Address</p>
                            <p className="text-[#ffffff]">ABC Corner, XYZ Town 1234</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}
