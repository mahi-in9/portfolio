import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const { darkMode } = useTheme();

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  // Scroll smoothly to the section
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  // Scroll Spy — detect visible section
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 150;
      let current = "home";

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = item.id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (id) => activeSection === id;

  return (
    <>
      {/* Main Navbar */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-6xl bg-white/90 dark:bg-gray-800/80 backdrop-blur-md rounded-full px-6 py-3 shadow-lg border border-gray-200/50 dark:border-gray-600/50 transition-all duration-300">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="text-2xl font-bold text-gray-800 dark:text-white font-[cursive] hover:scale-105 transition-transform"
          >
            <span className="text-purple-500">Mahendra Kumar Sahu</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex flex-1 items-center justify-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative text-sm font-medium transition-colors duration-300 ${
                  isActive(item.id)
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                {item.label}
                {/* Animated underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-blue-600 dark:bg-blue-400 rounded-full transition-all duration-300 ${
                    isActive(item.id)
                      ? "w-full opacity-100"
                      : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                  }`}
                ></span>
              </button>
            ))}
          </div>

          {/* Resume Button */}
          <div className="hidden sm:flex items-center">
            <a
              href="https://drive.google.com/file/d/1th8toYA2xhOVFLssHTc79yGLPzIr953Z/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center space-x-2 whitespace-nowrap"
            >
              <span>View Resume</span>
              <i className="ri-external-link-line text-sm"></i>
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="sm:hidden">
            <button
              onClick={() => setMenuOpen(true)}
              className="text-2xl text-gray-800 dark:text-gray-100"
            >
              <i className="ri-menu-line"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex justify-end">
          <div className="w-[70%] max-w-xs h-full bg-white dark:bg-gray-900 shadow-lg p-6 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-6">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-xl font-bold text-purple-500"
                >
                  Mahendra
                </button>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-2xl text-gray-700 dark:text-gray-100"
                >
                  <i className="ri-close-line"></i>
                </button>
              </div>

              <div className="space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left px-2 py-2 rounded transition ${
                      isActive(item.id)
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Divider + Resume Button */}
            <div className="pt-6 border-t border-gray-300 dark:border-gray-700">
              <a
                href="https://drive.google.com/uc?export=download&id=1th8toYA2xhOVFLssHTc79yGLPzIr953Z"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(
                    "https://drive.google.com/file/d/1th8toYA2xhOVFLssHTc79yGLPzIr953Z/view?usp=drive_link",
                    "_blank"
                  );
                  const link = document.createElement("a");
                  link.href =
                    "https://drive.google.com/uc?export=download&id=1th8toYA2xhOVFLssHTc79yGLPzIr953Z";
                  link.setAttribute(
                    "download",
                    "Mahendra_Kumar_Sahu_Resume.pdf"
                  );
                  document.body.appendChild(link);
                  link.click();
                  link.remove();
                }}
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center px-4 py-2 rounded-full text-sm font-medium transition-colors"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
