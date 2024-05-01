"use client"
import Image from "next/image";
import ShowImage from "./_components/ShowImage";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const observerRef = useRef(null)
  const [componentVisibility, setComponentVisibility] = useState(false)

  console.log('is visibilty', componentVisibility)
  useEffect(() => {
    let observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      setComponentVisibility(entry.isIntersecting)
      console.log('entry', entry)
    }, {})
    observer.observe(observerRef.current)
  }, [])

  function verifyVisibility(e: any) {
    console.log(e)
  }
  return (
    <main className="bg-[#282c34]">
      <div className="h-screen flex justify-center items-center">
        Hola
      </div>
      <div>
        <ShowImage />
      </div>
      <div ref={observerRef} className="h-screen">
        Info
      </div>
    </main>
  );
}
