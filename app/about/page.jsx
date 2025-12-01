"use client"
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaUserTie, FaCode, FaBullhorn, FaCogs } from "react-icons/fa";

const team = [
  { name: "Huzaifa", role: "Co Founder & Full Stack Developer", icon: <FaUserTie size={32} className="mx-auto mb-2 text-foreground" /> },
  { name: "Abdullah", role: "Co Founder & Application Developer", icon: <FaCode size={32} className="mx-auto mb-2 text-foreground" /> },
  { name: "Ahmed", role: "Co Founder & Head of Operations", icon: <FaCogs size={32} className="mx-auto mb-2 text-foreground" /> },
  { name: "Hadiyan", role: "Head of Marketing", icon: <FaBullhorn size={32} className="mx-auto mb-2 text-foreground" /> },
];

const values = [
  { title: "Creativity & Innovation", desc: "We craft original solutions that move the needle." },
  { title: "Client-Centric Approach", desc: "Your goals drive our strategy and execution." },
  { title: "Quality & Reliability", desc: "We ship dependable, scalable work—every time." },
  { title: "Passion for Technology", desc: "We love building with modern tools and best practices." },
];

const About = () => (
  <section className="min-h-[70vh] flex flex-col items-center justify-center bg-background text-foreground px-4 py-16">
    <motion.h1
      className="text-4xl md:text-6xl font-funnel font-bold mb-6 text-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, type: "spring" }}
    >
      About Us
    </motion.h1>
    <motion.p
      className="text-lg md:text-2xl font-mont text-center max-w-3xl mb-10"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.7, type: "spring" }}
    >
      Trizentic is your all-in-one digital partner for branding, design, and development. We help businesses make their mark online with thoughtful strategy, beautiful design, and robust engineering.
    </motion.p>

    <motion.div
      className="w-full max-w-5xl mb-10"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35, duration: 0.7, type: "spring" }}
    >
      <h2 className="text-2xl font-funnel font-bold mb-4 text-center">Our Values</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {values.map((value, i) => (
          <motion.div
            key={value.title}
            className="bg-foreground/10 rounded-3xl p-6 shadow-lg text-center border border-foreground/10 hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * i, duration: 0.6, type: "spring" }}
          >
            <h3 className="text-xl font-funnel font-bold mb-2">{value.title}</h3>
            <p className="text-base font-mont text-foreground/80">{value.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>

    <motion.div
      className="w-full max-w-5xl"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.55, duration: 0.7, type: "spring" }}
    >
      <h2 className="text-2xl font-funnel font-bold mb-4 text-center">Meet the Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {team.map((member, i) => (
          <motion.div
            key={member.name}
            className="bg-foreground/10 rounded-3xl p-6 shadow-lg flex flex-col items-center text-center border border-foreground/10 hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * i, duration: 0.6, type: "spring" }}
          >
            {member.icon}
            <div className="text-2xl font-funnel font-bold mb-2">{member.name}</div>
            <div className="text-base font-mont text-foreground/80">{member.role}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>

    <div className="mt-12 flex gap-4 items-center justify-center">
      <Link href="/socials" className="bg-foreground text-background text-sm px-7 py-3 rounded-full font-funnel shadow-lg hover:bg-[#095832] transition-all">See our Socials →</Link>
      <Link href="/contact" className="bg-background text-foreground border border-foreground/30 text-sm px-7 py-3 rounded-full font-funnel hover:bg-foreground/10 transition-all">Contact Us</Link>
    </div>
  </section>
);

export default About; 