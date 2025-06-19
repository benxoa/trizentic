import Image from "next/image";
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import Attractor1 from "./components/Attractor1";
import About from "./components/About";
import Footer from "./components/Footers";

export default function Home() {
  return (
    <section className="bg-background">
      <NavBar />
      <Hero />
      <Attractor1 />
      <About />
      <Footer />
    </section>
  );
}
