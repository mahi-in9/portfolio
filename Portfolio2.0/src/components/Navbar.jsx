import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      aria-label="Main navigation "
      className="flex flex-row  bg-[#1b2635] justify-between rounded-2xl border-2 "
    >
      <section className="name flex  items-center  ">
        <h2 className="text-2xl font-semibold">Mahendra Kumar Sahu</h2>
      </section>

      <ul className="flex flex-row">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <section className="resume flex items-center">
        <button>Resume</button>
      </section>
    </nav>
  );
}
