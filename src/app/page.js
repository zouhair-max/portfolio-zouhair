import Image from "next/image";
import Navbar from "./components/Navbar";
import Homepage from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";


export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A100D]">
      <Navbar />
      <main>
        <Homepage />
        <About />
        <Portfolio />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
