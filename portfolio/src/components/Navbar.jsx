import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About Me", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
    {
      name: "Mahendra Kumar Sahu",
      href: "https://drive.google.com/file/d/1DDAc-ndVtSDq-t8TBzGxfCOxJsLqdLIr/view?usp=drive_link",
      external: true,
    },
  ];

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur z-50 shadow-sm">
      <nav className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="text-xl font-semibold">
          Mahendra Kumar Sahu
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex gap-6 items-center">
          {navItems.map((n) =>
            n.external ? (
              <a
                key={n.name}
                href={n.href}
                download
                className="py-1 px-3 rounded hover:bg-gray-100"
                target="_blank"
                rel="noreferrer"
              >
                {n.name}
              </a>
            ) : (
              <a
                key={n.name}
                href={n.href}
                className="py-1 px-3 rounded hover:bg-gray-100"
              >
                {n.name}
              </a>
            )
          )}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="menu"
        >
          {open ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <ul className="flex flex-col gap-2 p-4">
            {navItems.map((n) => (
              <a
                key={n.name}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-2"
              >
                {n.name}
              </a>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
