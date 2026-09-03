import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Timeline from "./components/Timeline";
import Services from "./components/Services";
import TechStack from "./components/TechStack";
import Stats from "./components/Stats";
import BackToTop from "./components/BackToTop";
import HireMe from "./components/HireMe";

function App() {
  return (
    <div id="top" className="bg-slate-950 text-white min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Skills />
      <TechStack />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <Services />
      <Timeline />
      <HireMe />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;