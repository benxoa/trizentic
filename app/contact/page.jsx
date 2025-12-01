"use client"
import React from "react";
import { motion } from "framer-motion";
import ContactUs from "../components/ContactUs";

const Contact = () => (
  <section className="min-h-[70vh] flex flex-col items-center justify-center bg-background text-foreground px-4 py-16">
    <motion.h1
      className="text-4xl md:text-6xl font-funnel font-bold mb-2 text-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, type: "spring" }}
    >
      Contact Us
    </motion.h1>
    <motion.p
      className="text-lg md:text-2xl font-mont text-center max-w-2xl mb-8"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.7, type: "spring" }}
    >
      Have a question or want to work with us? Fill out the form below and we'll get back to you soon.
    </motion.p>
    <ContactUs />
  </section>
);

export default Contact; 