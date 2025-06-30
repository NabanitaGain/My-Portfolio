import React, { useState, useEffect } from "react";
import { Link } from "react-scroll"; // yarn add react-scroll
import {
  FaHome,
  FaCode,
  FaGraduationCap,
  FaUserAlt,
  FaEnvelope,
} from "react-icons/fa";

/**
 * Responsive, sticky portfolio navbar with light/dark toggle
 * Color palette (light → dark):
 * base  │ #FFFFFF │ #1A1A40
 * text  │ #1A1A40 │ #F7F7F7
 * link  │ #4B7BE5 │ #A3E4DB
 * hover │ #325AE7 │ #5AC8FA
 */

const links = [
  { to: "home", label: "Home", icon: <FaHome /> },
  { to: "projects", label: "Projects", icon: <FaCode /> },
  { to: "education", label: "Education", icon: <FaGraduationCap /> },
  { to: "about", label: "About", icon: <FaUserAlt /> },
  { to: "contact", label: "Contact Me", icon: <FaEnvelope /> },
];

export default function Navbar() {
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);

  /* --------------------------- theme persistence --------------------------- */
  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme");
    if (saved) setTheme(saved);
    else if (window.matchMedia("(prefers-color-scheme: dark)").matches)
      setTheme("dark");
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  /* ------------------------------- classes -------------------------------- */
  const navClasses =
    "sticky top-0 z-50 w-full transition-colors duration-300" +
    (theme === "dark"
      ? " bg-[#1A1A40] text-[#F7F7F7]"
      : " bg-[#FFFFFF] text-[#1A1A40] shadow-md");

  const linkBase =
    "flex items-center gap-1 cursor-pointer px-3 py-2 font-medium tracking-wide transition-colors duration-200";
  const linkColor =
    theme === "dark"
      ? " text-[#A3E4DB] hover:text-[#5AC8FA]"
      : " text-[#4B7BE5] hover:text-[#325AE7]";

  /* -------------------------------- render ------------------------------- */
  return (
    <header className={navClasses}>
      <div className="mx-auto max-w-7xl flex items-center justify-between p-4">
        {/* ---------- left: logo + name ---------- */}
        <div className="flex items-center gap-2 select-none">
          <div className="w-9 h-9 rounded-full border-2 border-[#4B7BE5] overflow-hidden flex items-center justify-center">
            <img
              src="https://i.ibb.co/tPB3z6cr/Chat-GPT-Image-Jun-30-2025-03-02-17-PM.png"
              alt="Logo"
              className="w-full h-full object-cover"
              draggable={false}
            />
          </div>
          <span className="text-lg font-bold">Nabanita Gain</span>
        </div>

        {/* ---------- centre: hamburger + theme (small screens) ---------- */}
        <div className="flex items-center lg:hidden">
          <button
            className="relative w-8 h-8 text-inherit"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`absolute top-2 left-1 w-6 h-0.5 bg-current transform transition ${
                menuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`absolute top-4 left-1 w-6 h-0.5 bg-current transition ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`absolute top-6 left-1 w-6 h-0.5 bg-current transform transition ${
                menuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>

          {/* always‑visible day/night button in mobile/tablet */}
          <button
            onClick={toggleTheme}
            className="ml-3 w-9 h-9 rounded-full flex items-center justify-center border border-current"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? "🌞" : "🌙"}
          </button>
        </div>

        {/* ---------- centre menu list ---------- */}
        <nav
          className={`${
            menuOpen ? "flex" : "hidden"
          } flex-col lg:flex lg:flex-row lg:items-center gap-4 lg:gap-6 
             absolute lg:static top-full left-0 w-full lg:w-auto 
             bg-inherit lg:bg-transparent p-4 lg:p-0
             divide-y divide-gray-300 lg:divide-y-0`}
        >
          {links.map(({ to, label, icon }) => (
            <Link
              key={to}
              to={to}
              smooth
              duration={400}
              spy
              offset={-80}
              activeClass="border-b-2 border-current"
              className={`${linkBase} ${linkColor}`}
              onClick={() => setMenuOpen(false)}
            >
              {icon} <span>{label}</span>
            </Link>
          ))}
        </nav>

        {/* ---------- right: résumé + theme (large) ---------- */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://drive.google.com/file/d/10x3E6sR3vHIaBhhWt3tIs8OAxn9oOgWu/view?usp=sharing" /* add your CV path */
            download
            className="px-4 py-2 rounded-full border-2 border-[#4B7BE5] bg-transparent hover:bg-[#4B7BE5] hover:text-white transition-colors duration-200 text-sm font-semibold"
          >
            Download Résumé
          </a>
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full flex items-center justify-center border border-current"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? "🌞" : "🌙"}
          </button>
        </div>
      </div>
    </header>
  );
}
