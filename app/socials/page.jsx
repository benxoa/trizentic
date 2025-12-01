"use client"
import React from "react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaGithub,
  FaYoutube,
  FaTiktok,
  FaDribbble,
  FaBehance,
  FaWhatsapp,
} from "react-icons/fa";

const socials = [
  { name: "Instagram", href: "https://www.instagram.com/trizentic", icon: <FaInstagram size={32} className="mx-auto mb-2 text-foreground" /> },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/trizentic-agnecy-332b7a374/?originalSubdomain=pk", icon: <FaLinkedin size={32} className="mx-auto mb-2 text-foreground" /> },
  // { name: "X (Twitter)", href: "#", icon: <FaTwitter size={32} className="mx-auto mb-2 text-foreground" /> },
  { name: "Facebook", href: "https://www.facebook.com/trizentic", icon: <FaFacebook size={32} className="mx-auto mb-2 text-foreground" /> },
  // { name: "GitHub", href: "#", icon: <FaGithub size={32} className="mx-auto mb-2 text-foreground" /> },
//   { name: "YouTube", href: "#", icon: <FaYoutube size={32} className="mx-auto mb-2 text-foreground" /> }, 
  { name: "TikTok", href: "https://www.tiktok.com/@trizentick", icon: <FaTiktok size={32} className="mx-auto mb-2 text-foreground" /> },
//   { name: "Dribbble", href: "#", icon: <FaDribbble size={32} className="mx-auto mb-2 text-foreground" /> },
//   { name: "Behance", href: "#", icon: <FaBehance size={32} className="mx-auto mb-2 text-foreground" /> }, 
  { name: "WhatsApp", href: "https://wa.me/923062924342", icon: <FaWhatsapp size={32} className="mx-auto mb-2 text-foreground" /> },
];

const SocialsPage = () => (
  <section className="min-h-[70vh] flex flex-col items-center justify-center bg-background text-foreground px-4 py-16">
    <motion.h1
      className="text-4xl md:text-6xl font-funnel font-bold mb-6 text-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, type: "spring" }}
    >
      Socials
    </motion.h1>
    <motion.p
      className="text-lg md:text-2xl font-mont text-center max-w-2xl mb-10"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.7, type: "spring" }}
    >
      Find and follow us on your favorite platforms.
    </motion.p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl">
      {socials.map((item, i) => (
        <motion.a
          key={item.name}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-foreground/10 rounded-3xl p-8 shadow-lg flex flex-col items-center text-center border border-foreground/10 hover:scale-105 transition-transform"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 * i, duration: 0.6, type: "spring" }}
        >
          {item.icon}
          <h2 className="text-2xl font-funnel font-bold mb-2">{item.name}</h2>
          <p className="text-base font-mont text-foreground/80">Tap to visit</p>
        </motion.a>
      ))}
    </div>
  </section>
);

export default SocialsPage;


