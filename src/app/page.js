import Header from "@/components/sections/header";
import Projects from "@/components/sections/projects";

export default function Home() {
  return (
      <div className="min-h-screen bg-[#0a0a0a] text-[#ededed]">

        <main className="flex flex-col w-full">
          <div className="h-[20vh]"> <Header/> </div>

          <Projects />
        </main>
      </div>
  );
}