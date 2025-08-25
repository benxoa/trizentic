"use client"
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.7, type: "spring" },
  }),
};

const ctaVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { delay: 0.5, duration: 0.6, type: "spring" } },
  hover: { scale: 1.08, boxShadow: "0px 4px 24px rgba(0,0,0,0.12)" },
};

const taglineVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.7, type: "spring" } },
};

const Hero = () => {
  return (
    <section className="flex flex-col min-h-[80vh] p-6 md:px-16 md:py-10 bg-foreground justify-center items-center relative overflow-hidden">
      {/* Main Text */}
      <motion.div
        className="text-background font-funnel text-[10vw] sm:text-[7vw] md:text-[4.5vw] leading-none mt-4 mb-2 text-center"
        initial="hidden"
        animate="visible"
        variants={textVariants}
        custom={1}
      >
        <motion.h1 custom={1} variants={textVariants}>
          Make Your
        </motion.h1>
        <motion.h1 custom={2} variants={textVariants}>
          Business Online
        </motion.h1>
        <motion.h1 custom={3} variants={textVariants}>
          With Us.
        </motion.h1>
      </motion.div>
      {/* Tagline */}
      {/* <motion.p
        className="text-background font-mont text-lg sm:text-2xl md:text-3xl font-medium mb-8 text-center"
        initial="hidden"
        animate="visible"
        variants={taglineVariants}
      >
        Empowering your digital journey with creativity, innovation, and results.
      </motion.p> */}
      {/* Description + CTA */}
      <motion.div
        className="text-background font-funnel text-[5vw] sm:text-[3vw] md:text-[1.1vw] max-w-md flex flex-col gap-6 items-center text-center"
        initial="hidden"
        animate="visible"
        variants={textVariants}
        custom={4}
      >
        <motion.p
          className="mb-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7, type: "spring" }}
        >
          From Website Development <br />- To Branding <br />Anywhere Anytime.
        </motion.p>
        <motion.div
          variants={ctaVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <Link
            href="/work"
            className="bg-background text-foreground text-sm px-7 py-3 rounded-full font-funnel shadow-lg hover:bg-[#095832] transition-all"
          >
            Learn More →
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
