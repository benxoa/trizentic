"use client"
import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "E-Commerce Platform",
    desc: "A scalable online store with seamless checkout and modern UI.",
    img: "/window.svg",
    category: "Web",
    href: "#",
  },
  {
    title: "Brand Identity for Startup",
    desc: "Complete branding package for a tech startup, from logo to website.",
    img: "/globe.svg",
    category: "Branding",
    href: "#",
  },
  {
    title: "Mobile App for Delivery",
    desc: "A cross-platform app for food delivery with real-time tracking.",
    img: "/next.svg",
    category: "Mobile",
    href: "#",
  },
  {
    title: "Portfolio Website",
    desc: "Personal portfolio for a creative professional, built for impact.",
    img: "/file.svg",
    category: "Web",
    href: "#",
  },
  {
    title: "UI/UX Redesign",
    desc: "Revamped user experience for a SaaS dashboard, boosting engagement.",
    img: "/file.svg",
    category: "UI/UX",
    href: "#",
  },
];

const categories = ["All", "Web", "Branding", "Mobile", "UI/UX"];

const Work = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
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
        className="text-lg md:text-2xl font-mont text-center max-w-3xl mb-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7, type: "spring" }}
      >
        Explore selected projects across branding, web, mobile, and product design.
      </motion.p>

      <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
        {categories.map((cat, i) => (
          <motion.button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`${activeCategory === cat ? "bg-foreground text-background" : "bg-background text-foreground border border-foreground/30"} px-5 py-2 rounded-full font-funnel text-sm hover:bg-foreground hover:text-background transition-all`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * i, duration: 0.4, type: "spring" }}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {filteredProjects.map((project, i) => {
          const Card = (
            <motion.div
              className="bg-foreground/10 rounded-3xl p-6 shadow-lg flex flex-col items-center text-center border border-foreground/10 hover:scale-105 transition-transform h-full"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 * i, duration: 0.6, type: "spring" }}
            >
              <Image src={project.img} alt={project.title} width={64} height={64} className="mb-4" />
              <h2 className="text-xl font-funnel font-bold mb-1">{project.title}</h2>
              <p className="text-base font-mont text-foreground/80 mb-4">{project.desc}</p>
              <div className="flex items-center gap-2">
                <span className="text-xs font-funnel bg-background text-foreground border border-foreground/20 rounded-full px-3 py-1">{project.category}</span>
              </div>
            </motion.div>
          );

          return project.href ? (
            <a key={project.title} href={project.href} target="_blank" rel="noopener noreferrer" className="h-full">
              {Card}
            </a>
          ) : (
            <div key={project.title} className="h-full">{Card}</div>
          );
        })}
      </div>

      <div className="mt-12 flex gap-4 items-center justify-center">
        <Link href="/contact" className="bg-foreground text-background text-sm px-7 py-3 rounded-full font-funnel shadow-lg hover:bg-[#095832] transition-all">Start a Project →</Link>
        <Link href="/socials" className="bg-background text-foreground border border-foreground/30 text-sm px-7 py-3 rounded-full font-funnel hover:bg-foreground/10 transition-all">See our Socials</Link>
      </div>
    </section>
  );
};

export default Work; 