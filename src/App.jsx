import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Timeline from "./components/Timeline";
import Services from "./components/Services";
import Loader from "./components/Loader";
import TechStack from "./components/TechStack";
import Stats from "./components/Stats";
import BackToTop from "./components/BackToTop";
import HireMe from "./components/HireMe";

function App() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
    <Navbar />
    <Hero />
    <Stats />
    <About />
    <Skills />
    <Projects />
    <Services />
    <Timeline />
    <Experience />
    <Certifications />
    <HireMe />
    <Contact />
    <TechStack/>
    <Footer />
    <BackToTop />
    </div>
  );
}

export default App;