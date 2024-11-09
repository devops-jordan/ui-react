import Main from "./_components/Main";
import MainAsync from "./_components/MainAsync";

export default function Home() {
  return (
    <main className="h-screen  bg-[#282c34] flex flex-col justify-center items-center">
      <p> Hello World  - <span className="text-sky-700 tracking-tighter font-bold">Context-Api</span></p>
      {/* <MainAsync/>
      // <Main/> */}
      <MainAsync/>
      <Main/>
    </main>
  );
}
