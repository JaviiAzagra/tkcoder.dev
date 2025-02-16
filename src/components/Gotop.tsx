"use client";
import React, { useState, useEffect } from "react";

const goTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Gotop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        // Mostrar botón después de 200px de desplazamiento
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Limpieza del event listener cuando el componente se desmonte
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    isVisible && ( // Renderizar el botón solo si `isVisible` es true
      <div
        onClick={goTop}
        className="hidden lg:flex fixed bottom-4 right-4 p-2 border rounded-lg bg-white shadow-sm shadow-black/50 hover:scale-125 transition-all"
      >
        <svg
          className="hover:rotate-45 transition-all"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M7 7l10 10" />
          <path d="M16 7l-9 0l0 9" />
        </svg>
      </div>
    )
  );
};

export default Gotop;
