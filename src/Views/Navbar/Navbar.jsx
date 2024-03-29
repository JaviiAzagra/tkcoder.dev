import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isBackgroundBlocked, setIsBackgroundBlocked] = useState(false);

  useEffect(() => {
    if (isBackgroundBlocked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isBackgroundBlocked]);

  const pageUp = () => {
    window.scrollTo(0, 0);
  };

  const toggleMenuMobile = () => {
    setIsPopupOpen(!isPopupOpen);
    setIsBackgroundBlocked(!isBackgroundBlocked);
  };

  const LinksNavbar = [
    { id: 1, name: "Inicio", path: "/" },
    { id: 2, name: "Tutoriales", path: "/tutorials" },
    { id: 3, name: "Artículos", path: "/articles" },
    { id: 4, name: "Contacto", path: "/contact" },
  ];
  return (
    <div className="navbar">
      <div className="navbar--logo">
        <Link to="/">
          <img src="/assets/logowhite.png" alt="LogoTkCoder" />
          <h1>TkCoder</h1>
        </Link>
      </div>
      <div className="navbar--links">
        {LinksNavbar.map((link) => (
          <NavLink
            activeClassName="active"
            onClick={pageUp}
            to={link.path}
            key={link.id}
          >
            {link.name}
          </NavLink>
        ))}
      </div>
      <div onClick={toggleMenuMobile} className="navbar--menu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-menu-deep"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 6h16" />
          <path d="M7 12h13" />
          <path d="M10 18h10" />
        </svg>
      </div>
      {isPopupOpen && (
        <div className="mobilemenu">
          <div className="mobilemenu--content">
            <button onClick={toggleMenuMobile} className="close-buttonmobile">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-x"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M18 6l-12 12" />
                <path d="M6 6l12 12" />
              </svg>
            </button>
            <div className="mobilemenu--content__links">
              <div className="mobilemenu--content__links--link">
                {LinksNavbar.map((link) => (
                  <NavLink
                    onClick={toggleMenuMobile}
                    to={link.path}
                    key={link.id}
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
              <div className="mobilemenu--content__links--social">
                <a
                  href="https://github.com/JaviiAzagra"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-brand-github"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/javier-azagra-garc%C3%ADa/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-brand-linkedin"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                    <path d="M8 11l0 5" />
                    <path d="M8 8l0 .01" />
                    <path d="M12 16l0 -5" />
                    <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com/12jav1_"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-brand-twitter"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
