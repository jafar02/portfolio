import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Education from "./components/Education";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";

import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <main>
        <section id="hero" data-aos="fade-down">
          <Hero />
        </section>

        <section id="about" data-aos="fade-up">
          <About />
        </section>

        <section id="projects" data-aos="fade-up">
          <Projects />
        </section>

        <section id="certificates" data-aos="fade-up">
          <Certificates />
        </section>

        <section id="contact" data-aos="fade-up">
          <Contact />
        </section>

         <section id="Education" data-aos="fade-up">
          <Education />
          </section>
      </main>

      <footer className="footer" data-aos="fade-up">
        <p>© {new Date().getFullYear()} Jafar. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
