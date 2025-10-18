"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", link: "#home" },
    { label: "About", link: "#about" },
    { label: "Work", link: "#work" },
    { label: "Reviews", link: "#reviews" },
    { label: "Contact", link: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo con animación */}
          <Link 
            href="/" 
            className="relative group"
          >
            <div className="relative transform transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/rocs.png"
                alt="Logo"
                width={100}
                height={100}
                priority
                className="drop-shadow-md"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map(({ label, link }) => (
              <Link
                key={label}
                href={link}
                className="relative px-4 py-2 font-medium text-zinc-100 hover:text-[#2196F3] transition-colors duration-300 group"
              >
                <span className="relative z-10">{label}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#2196F3]/10 to-[#64B5F6]/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-[#2196F3] to-[#64B5F6] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button con animación mejorada */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative p-3 rounded-xl text-zinc-100 hover:bg-zinc-100 active:scale-95 transition-all duration-200"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <CiMenuBurger
                className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                  isOpen ? "opacity-0 rotate-180 scale-0" : "opacity-100 rotate-0 scale-100"
                }`}
              />
              <IoClose
                className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                  isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-180 scale-0"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation con glassmorphism */}
      <div
        className={`md:hidden transition-all duration-500 ease-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <nav className="bg-white/95 backdrop-blur-xl border-t border-zinc-200/50 shadow-2xl">
          <ul className="flex flex-col px-6 py-6 space-y-2">
            {navItems.map(({ label, link }, index) => (
              <li
                key={label}
                className="transform transition-all duration-300"
                style={{
                  transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
                  transform: isOpen ? "translateY(0)" : "translateY(-10px)",
                }}
              >
                <Link
                  href={link}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-lg font-medium text-zinc-700 hover:text-[#2196F3] rounded-xl hover:bg-gradient-to-r hover:from-[#2196F3]/10 hover:to-[#64B5F6]/10 transition-all duration-300 group"
                >
                  <span className="relative">
                    {label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#2196F3] to-[#64B5F6] rounded-full group-hover:w-full transition-all duration-300" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Overlay para cerrar el menú móvil */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm -z-10 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
}