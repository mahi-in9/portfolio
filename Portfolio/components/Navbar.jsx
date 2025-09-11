import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container flex items-center justify-between h-16">
        <a href="#home" className="text-lg font-bold">
          Mahendra Kumar
        </a>

        <nav className="hidden md:flex gap-6 items-center">
          <a href="#home" className="hover:text-blue-600">
            Home
          </a>
          <a href="#about" className="hover:text-blue-600">
            About
          </a>
          <a href="#skills" className="hover:text-blue-600">
            Skills
          </a>
          <a href="#projects" className="hover:text-blue-600">
            Projects
          </a>
          <a href="#contact" className="hover:text-blue-600">
            Contact
          </a>
          <a
            href="/Mahendra-Kumar-Resume.pdf"
            download
            className="px-3 py-1 bg-blue-600 text-white rounded"
          >
            Resume
          </a>
        </nav>

        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="menu"
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="md:hidden bg-white/95 border-t">
          <div className="flex flex-col p-4 gap-4">
            <a href="#home" onClick={() => setOpen(false)}>
              Home
            </a>
            <a href="#about" onClick={() => setOpen(false)}>
              About
            </a>
            <a href="#skills" onClick={() => setOpen(false)}>
              Skills
            </a>
            <a href="#projects" onClick={() => setOpen(false)}>
              Projects
            </a>
            <a href="#contact" onClick={() => setOpen(false)}>
              Contact
            </a>
            <a
              href="/Mahendra-Kumar-Resume.pdf"
              download
              className="mt-2 px-3 py-2 bg-blue-600 text-white rounded"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
