import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 px-6">
      <div className="max-w-4xl text-center">
        <p className="text-cyan-400 text-lg mb-4">
          👋 Hello, I'm
        </p>

        <h1 className="text-6xl md:text-7xl font-extrabold text-white">
          Mohamed <span className="text-cyan-400">Jafar</span>
        </h1>

        <h2 className="mt-5 text-2xl md:text-3xl text-slate-300 h-10">
          <Typewriter
            words={[
              "Full Stack Developer",
              "Python Developer",
              "React Developer",
              "Backend Enthusiast",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>

        <p className="mt-8 text-lg text-slate-400 leading-8 max-w-3xl mx-auto">
          I build fast, scalable, and responsive web applications using
          React, Node.js, Python, and MongoDB with a focus on clean code
          and great user experiences.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-semibold text-white transition"
          >
            🚀 View Projects
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-cyan-400 hover:bg-cyan-500 hover:text-white px-6 py-3 rounded-xl font-semibold text-cyan-300 transition"
          >
            📄 Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}