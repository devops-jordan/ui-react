import Image from "next/image";
import SwichDarkLighMode from "./_components/change-darkmode";

export default function Home() {
  return (
    <main className="dark:bg-[#282c34] h-full dark:text-white flex items-center justify-center tracking-tighter text flex-col gap-2">
      <h1>Swich Theme using <span className="font-bold text-[20px]">Next-Themes</span></h1>
      <SwichDarkLighMode />
    </main>
  );
}
