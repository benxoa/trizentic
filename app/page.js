"use client"
import Image from "next/image";
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import Attractor1 from "./components/Attractor1";
import About from "./components/About";
import Footer from "./components/Footers";
import ContactUs from "./components/ContactUs";
import { FaSearch, FaPencilRuler, FaCode, FaRocket, FaLifeRing } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="bg-background">
      {/* <NavBar /> */}
      <Hero />
      <Attractor1 />
      <About />
      <Roadmap />
      <ContactUs />
      <Footer />
    </section>
  );
}

function Roadmap() {
  const steps = [
    { icon: <FaSearch size={32} className="text-foreground mx-auto mb-2" />, title: "Discovery", desc: "We understand your goals and challenges." },
    { icon: <FaPencilRuler size={32} className="text-foreground mx-auto mb-2" />, title: "Design", desc: "Crafting beautiful, user-centric designs." },
    { icon: <FaCode size={32} className="text-foreground mx-auto mb-2" />, title: "Development", desc: "Building robust, scalable solutions." },
    { icon: <FaRocket size={32} className="text-foreground mx-auto mb-2" />, title: "Launch", desc: "Deploying your product to the world." },
    { icon: <FaLifeRing size={32} className="text-foreground mx-auto mb-2" />, title: "Support", desc: "Ongoing help and improvements." },
  ];
  return (
    <section className="py-16 bg-background text-foreground flex flex-col items-center">
      <motion.h2
        className="text-3xl md:text-5xl font-funnel font-bold mb-8 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, type: "spring" }}
      >
        Our Roadmap
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 w-full max-w-5xl">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            className="bg-foreground/10 rounded-3xl p-6 shadow-lg flex flex-col items-center text-center border border-foreground/10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * i, duration: 0.6, type: "spring" }}
          >
            {step.icon}
            <h3 className="text-xl font-funnel font-bold mb-2">{step.title}</h3>
            <p className="text-base font-mont text-foreground/80">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
