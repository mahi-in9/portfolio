import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import GitHubStats from "./components/GithubStats";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      {/* ====== NAVBAR ====== */}
      <Navbar />

      {/* ====== ABOUT / HERO SECTION ====== */}
      <section id="home" className="pt-24">
        <About />
      </section>

      {/* ====== TECH STACK ====== */}
      <section id="skills" className="py-16 bg-white">
        <TechStack />
      </section>

      {/* ====== PROJECTS ====== */}
      <section id="projects" className="py-16 bg-gray-50">
        <Projects />
      </section>

      {/* ====== GITHUB STATS ====== */}
      <section id="github" className="py-16 bg-white">
        <GitHubStats />
      </section>

      {/* ====== CONTACT ====== */}
      <section id="contact" className="py-16 bg-gray-50">
        <Contact />
      </section>

      {/* ====== FOOTER ====== */}
      <footer className="text-center py-6 border-t mt-8 text-sm text-gray-500">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </div>
  );
}
