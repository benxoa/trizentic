"use client"
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "E-Commerce Platform",
    desc: "A scalable online store with seamless checkout and modern UI.",
    img: "/window.svg",
  },
  {
    title: "Brand Identity for Startup",
    desc: "Complete branding package for a tech startup, from logo to website.",
    img: "/globe.svg",
  },
  {
    title: "Mobile App for Delivery",
    desc: "A cross-platform app for food delivery with real-time tracking.",
    img: "/next.svg",
  },
  {
    title: "Portfolio Website",
    desc: "Personal portfolio for a creative professional, built for impact.",
    img: "/vercel.svg",
  },
  {
    title: "UI/UX Redesign",
    desc: "Revamped user experience for a SaaS dashboard, boosting engagement.",
    img: "/file.svg",
  },
];

const Work = () => (
  <section className="min-h-[70vh] flex flex-col items-center justify-center bg-background text-foreground px-4 py-16">
    <motion.h1
      className="text-4xl md:text-6xl font-funnel font-bold mb-6 text-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, type: "spring" }}
    >
      Our Work
    </motion.h1>
    <motion.p
      className="text-lg md:text-2xl font-mont text-center max-w-2xl mb-10"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.7, type: "spring" }}
    >
      Explore our portfolio and see how we help businesses grow.
    </motion.p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl">
      {projects.map((project, i) => (
        <motion.div
          key={project.title}
          className="bg-foreground/10 rounded-3xl p-6 shadow-lg flex flex-col items-center text-center border border-foreground/10 hover:scale-105 transition-transform"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 * i, duration: 0.6, type: "spring" }}
        >
          <Image src={project.img} alt={project.title} width={64} height={64} className="mb-4" />
          <h2 className="text-xl font-funnel font-bold mb-2">{project.title}</h2>
          <p className="text-base font-mont text-foreground/80">{project.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Work; 