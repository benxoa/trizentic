"use client"
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/features" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Socials", href: "/socials" },
  { name: "Contact", href: "/contact" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent mx-4 md:mx-16 mt-3 p-1 z-50 relative">
      <div className="flex justify-between items-center">
        <motion.h1
          className="text-foreground text-[7vw] md:text-[2.7vw] font-funnel cursor-pointer"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, type: "spring" }}
        >
          <Link href="/">Trizentic</Link>
        </motion.h1>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 text-foreground text-xl font-funnel">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.5, type: "spring" }}
            >
              <Link href={link.href}>{link.name}</Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile Nav Links */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden absolute left-0 right-0 top-16 bg-background shadow-lg rounded-b-2xl flex flex-col items-center py-6 gap-4 text-foreground text-lg font-funnel z-40"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.3, type: "spring" }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-2 hover:bg-foreground hover:text-background rounded-full transition-all"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
