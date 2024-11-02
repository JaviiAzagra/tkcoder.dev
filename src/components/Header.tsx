"use client";
import { useState } from "react";
import Articlesicon from "@/icons/Articlesicon";
import Contatcicon from "@/icons/Contatcicon";
import Homeicon from "@/icons/Homeicon";
import Tutorialsicon from "@/icons/Tutorialsicon";
import Link from "next/link";
import Close from "@/icons/Close";
import Hamburguer from "@/icons/Hamburguer";

const links = [
  { href: "/", label: "Inicio", icon: <Homeicon /> },
  { href: "/tutorials", label: "Tutoriales", icon: <Tutorialsicon /> },
  { href: "/articles", label: "Artículos", icon: <Articlesicon /> },
  { href: "/contact", label: "Contacto", icon: <Contatcicon /> },
];

const goTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="flex flex-col justify-between fixed border-b border-[#bcbcbc] lg:border-none lg:top-0 lg:left-0 lg:h-screen lg:w-64 w-full bg-white text-black p-3 lg:p-6 lg:shadow-xl shadow-black/50 z-50">
      <div className="flex justify-between items-center lg:flex-col lg:items-start">
        <div onClick={goTop} className="cursor-pointer flex flex-col ">
          <h1 className="flex items-center text-3xl font-bold text-[#FB8B00]">
            <img
              className="rounded-none"
              width="40"
              height="auto"
              src="/assets/logoblack.png"
              alt="Logo TkCoder"
            />
            Coder.dev
          </h1>
          <p className="hidden lg:block text-sm text-gray-500">
            Tutoriales y artículos.
          </p>
        </div>

        <button
          className="lg:hidden text-3xl"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <Close /> : <Hamburguer />}
        </button>
      </div>

      <nav
        className={`${
          menuOpen ? "block" : "hidden"
        } lg:flex lg:flex-col font-semibold gap-y-8 mt-4 lg:mt-8`}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="px-2 mb-3 lg:mb-0 lg:px-0 flex items-center gap-x-2 hover:text-[#FB8B00]"
            onClick={() => setMenuOpen(false)}
          >
            {link.icon}
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="hidden lg:block mt-auto">
        <p className="font-medium text-sm">
          © 2024 · Creado con <span className="font-bold">Next.js </span>
          Desarrollado por{" "}
          <a
            className="font-bold hover:underline"
            href="https://javierazagra.com"
            target="_blank"
          >
            Javier Azagra.
          </a>
        </p>
      </div>
    </header>
  );
};

export default Header;
