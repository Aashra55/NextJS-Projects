'use client';
import {useState } from "react";
export default function Home(){
  const [counter,setCounter] = useState(0);
  return(
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
        <div className="w-[40%] rounded-2xl h-[70%] bg-pink-100 flex flex-col
         gap-[10%] justify-center items-center p-[20px] gap-[5%]">
          <h1 className="text-[50px] h-[10%]">Counter</h1>
          <div className="flex flex-col w-[100%] justify-center items-center h-[80%] gap-[5%]">
          <p className="text-[100px]">{counter}</p>
          <div className="flex flex-row w-[50%] justify-around items-center">
          <button onClick={()=>setCounter(counter+1)} className="
          bg-pink-200 rounded-full p-10px w-[80px] h-[80px] text-[40px] text-center">+</button>
          <button onClick={()=>setCounter(counter-1)} className="
          bg-pink-200 rounded-full p-10px w-[80px] h-[80px] text-[40px] text-center">-</button>
          </div>
          <button onClick={()=>setCounter(counter-counter)} className="
          bg-pink-200 rounded-2xl p-10px w-[40%] h-[70px] text-[24px]">Reset</button>
          </div>
        </div>
    </div>
  )
}
