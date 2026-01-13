import Header from "@/components/sections/header";
import Projects from "@/components/sections/projects";
import Hero from "@/components/sections/hero";
import AboutSection from "@/components/sections/about/AboutSection";
import Footer from "@/components/sections/footer";

export default function Home() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-[#ededed] font-sans">

            <Header />
            <main className="flex flex-col w-full">
                <Hero />
                <AboutSection />
                <Projects />
            </main>
            <Footer />
        </div>
    );
}