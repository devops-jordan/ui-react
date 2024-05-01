"use client"
import Image from "next/image";
import ShowImage from "./_components/ShowImage";
import { useEffect, useRef, useState } from "react";
import useInterObserverHook from "@/hooks/useIntersectionObserver";

export default function Home() {
  const observerRef = useRef<HTMLDivElement>(null)
  const { componentVisibility } = useInterObserverHook(observerRef)

  return (
    <main className="bg-[#282c34]">
      <div className="h-screen flex justify-center items-center">
        Hola
      </div>
      <div>
        <ShowImage />
      </div>
      <div ref={observerRef} className={`h-screen transition-all duration-[1.5s] flex justify-center items-center  ${componentVisibility ? "translate-x-[0px]" : "translate-x-[-100%] "}`}>
        <p className="w-full text-center">Info</p>
      </div>
    </main>
  );
}
