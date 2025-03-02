"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 w-[90%] h-16 rounded-full glasseffect flex items-center justify-between px-6 z-50 no-copy">
        {/* Logo */}
        <div className="text-white text-2xl font-extrabold first-font">
          Odyssey
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 text-white text-lg font-bold">
          <li>
            <Link href="#about" className="hover:text-gray-300 transition">
              About
            </Link>
          </li>
          <li>
            <Link href="#events" className="hover:text-gray-300 transition">
              Evenimente
            </Link>
          </li>
          <li>
            <Link href="#gallery" className="hover:text-gray-300 transition">
              Galerie
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-gray-300 transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden cursor-pointer z-30"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="white"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </div>

        {/* Mobile Menu */}
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 w-full h-screen bg-black/95 flex flex-col justify-center items-center gap-6 text-white text-lg font-bold md:hidden z-20"
          >
            <Link href="/About" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="/Events" onClick={() => setIsOpen(false)}>
              Evenimente
            </Link>
            <Link href="/Gallery" onClick={() => setIsOpen(false)}>
              Galerie
            </Link>
            <Link href="/Contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
