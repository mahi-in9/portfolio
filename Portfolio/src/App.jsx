import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import GithubStats from "../components/GithubStats";
import TechStack from "../components/TechStack";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <main className="pt-16">
        {" "}
        {/* offset for fixed navbar */}
        <Hero />
        <About />
        <Skills />
        <TechStack />
        <Projects />
        <GithubStats />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
