import React from "react";

const Footer = () => {
  return (
    <div className="text-black p-3 bg-white lg:hidden mt-auto">
      <p className="font-medium text-sm">
        © 2024 · Creado con <span className="font-bold">Next.js</span> ·
        Desarrollado por{" "}
        <a
          className="font-bold hover:underline"
          href="https://javiazagra.com"
          target="_blank"
        >
          Javier Azagra.
        </a>
      </p>
    </div>
  );
};

export default Footer;
