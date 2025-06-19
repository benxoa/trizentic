"use client"
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Optional: Icon library like Lucide

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: "Pricing", href: "/" },
    { name: "Features", href: "/features" },
    { name: "Work", href: "/about" },
  ];

  return (
    <nav className="bg-transparent mx-4 md:mx-16 mt-3 p-1">
      <div className="flex justify-between items-center">
        <h1 className="text-foreground text-[7vw] md:text-[2.7vw] font-funnel">
          Trizentic
        </h1>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 text-foreground text-xl font-funnel">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex font-funnel text-black justify-center items-center space-x-7">
          <button className="bg-foreground text-white rounded-full w-24 h-10">
            Contact
          </button>
        </div>
      </div>

      {/* Mobile Nav Links */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4 text-foreground text-lg font-funnel">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)}>
              {link.name}
            </Link>
          ))}
          <button className="bg-foreground text-white rounded-full w-24 h-10">
            Contact
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
