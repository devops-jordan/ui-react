import Image from "next/image";
import Container from "./_components/Container";
import Todos from "./_components/Todos";
import ModalCreateTask from "./_components/ModalCreateTask";

export default function Home() {
  return (
    <main className="bg-[#282c34] h-full text-white tracking-tighter text-[17px]">
      <Container height={95} width={95}>
        <h1 className="text-sky-400 font-bold">Prisma - Todos - Jordan</h1>
        <Todos />
      </Container>
    </main>
  );
}
