"use client"
import React from "react";
import { motion } from "framer-motion";
import { FaUserTie, FaCode, FaBullhorn, FaCogs } from "react-icons/fa";

const team = [
  { name: "Huzaifa", role: "Founder & Full Stack Developer", icon: <FaUserTie size={32} className="mx-auto mb-2 text-foreground" /> },
  { name: "Abdullah", role: "Co Founder & Application Developer", icon: <FaCode size={32} className="mx-auto mb-2 text-foreground" /> },
  { name: "Ahmed", role: "Head of Operations", icon: <FaCogs size={32} className="mx-auto mb-2 text-foreground" /> },
  { name: "Hadiyan", role: "Head of Marketing", icon: <FaBullhorn size={32} className="mx-auto mb-2 text-foreground" /> },
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
      className="text-lg md:text-2xl font-mont text-center max-w-2xl mb-10"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.7, type: "spring" }}
    >
      Trizentic is your all-in-one digital solutions partner. We help businesses make their mark online through branding, website and app development, UI/UX design, and more. Our mission is to turn your ideas into impactful digital experiences.
    </motion.p>
    <motion.div
      className="mb-10"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.7, type: "spring" }}
    >
      <h2 className="text-2xl font-funnel font-bold mb-2 text-center">Our Values</h2>
      <ul className="font-mont text-lg text-center">
        <li>• Creativity & Innovation</li>
        <li>• Client-Centric Approach</li>
        <li>• Quality & Reliability</li>
        <li>• Passion for Technology</li>
      </ul>
    </motion.div>
    <motion.div
      className="w-full max-w-2xl"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.7, type: "spring" }}
    >
      <h2 className="text-2xl font-funnel font-bold mb-4 text-center">Meet the Team</h2>
      <div className="flex flex-col sm:flex-row justify-center gap-6">
        {team.map((member) => (
          <div key={member.name} className="bg-foreground/10 rounded-2xl p-6 flex-1 text-center">
            {member.icon}
            <div className="text-2xl font-funnel font-bold mb-2">{member.name}</div>
            <div className="text-base font-mont text-foreground/80">{member.role}</div>
          </div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default About; 