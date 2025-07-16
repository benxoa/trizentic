"use client"
import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Branding",
    desc: "Build a unique and memorable brand identity that sets you apart.",
  },
  {
    title: "Website Development",
    desc: "Modern, responsive websites tailored to your business needs.",
  },
  {
    title: "Mobile App Development",
    desc: "Engage your audience with high-quality mobile applications.",
  },
  {
    title: "UI/UX Design",
    desc: "Intuitive and beautiful interfaces for delightful user experiences.",
  },
  {
    title: "Ongoing Support",
    desc: "Reliable support and maintenance to keep your business running smoothly.",
  },
];

const Features = () => (
  <section className="min-h-[70vh] flex flex-col items-center justify-center bg-background text-foreground px-4 py-16">
    <motion.h1
      className="text-4xl md:text-6xl font-funnel font-bold mb-6 text-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, type: "spring" }}
    >
      Features
    </motion.h1>
    <motion.p
      className="text-lg md:text-2xl font-mont text-center max-w-2xl mb-10"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.7, type: "spring" }}
    >
      Discover the powerful features that make Trizentic your best digital partner.
    </motion.p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl">
      {features.map((feature, i) => (
        <motion.div
          key={feature.title}
          className="bg-foreground/10 rounded-3xl p-8 shadow-lg flex flex-col items-center text-center border border-foreground/10 hover:scale-105 transition-transform"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 * i, duration: 0.6, type: "spring" }}
        >
          <h2 className="text-2xl font-funnel font-bold mb-2">{feature.title}</h2>
          <p className="text-base font-mont text-foreground/80">{feature.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Features; 