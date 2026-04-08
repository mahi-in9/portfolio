import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        {/* HERO */}
        <section id="home" aria-labelledby="home-heading">
          <h1 id="home-heading">Mahendra | MERN Stack Developer</h1>
          <Home />
        </section>

        {/* ABOUT */}
        <section id="about" aria-labelledby="about-heading">
          <h2 id="about-heading">About Me</h2>
          <About />
        </section>

        {/* SERVICES */}
        <section id="services" aria-labelledby="services-heading">
          <h2 id="services-heading">Services</h2>
          <Services />
        </section>

        {/* PROJECTS */}
        <section id="projects" aria-labelledby="projects-heading">
          <h2 id="projects-heading">Projects</h2>
          <Projects />
        </section>

        {/* SKILLS */}
        <section id="skills" aria-labelledby="skills-heading">
          <h2 id="skills-heading">Skills</h2>
          <Skills />
        </section>

        {/* CONTACT */}
        <section id="contact" aria-labelledby="contact-heading">
          <h2 id="contact-heading">Contact</h2>
          <Contact />
        </section>
      </main>

      <footer>
        <p>© 2026 Mahendra</p>
      </footer>
    </>
  );
}

export default App;
