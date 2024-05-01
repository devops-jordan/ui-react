"use client"
import Image from "next/image";
import ShowImage from "./_components/ShowImage";
import { useEffect, useRef, useState } from "react";
import useInterObserverHook from "@/hooks/useIntersectionObserver";

export default function Home() {
  const observerRef = useRef<HTMLDivElement>(null)
  const observerRef2 = useRef<HTMLDivElement>(null)
  const observerRef3 = useRef<HTMLDivElement>(null)

  const { status: div1 } = useInterObserverHook(observerRef2)
  const { status: div2 } = useInterObserverHook(observerRef3)
  const { status: info } = useInterObserverHook(observerRef)

  return (
    <main className="bg-[#282c34]">
      <div ref={observerRef3} className={`h-screen transition-all duration-[1.5s] flex justify-center items-center  ${div2 ? "translate-x-[0px]" : "translate-x-[-100%] "}`}>
        Hola
      </div>
      <div ref={observerRef2} className={`h-screen transition-all duration-[1.5s] flex justify-center items-center  ${div1 ? "translate-x-[0px]" : "translate-x-[-100%] "}`} >
        <ShowImage />
      </div>
      <div ref={observerRef} className={`h-screen transition-all duration-[1.5s] flex justify-center items-center  ${info ? "translate-x-[0px]" : "translate-x-[-100%] "}`}>
        <p className="w-full text-center">Info</p>
      </div>
    </main>
  );
}
