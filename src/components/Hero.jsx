import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const snippet = [
  { k: "name", v: '"Mohamed Jafar S"' },
  { k: "role", v: '"Full Stack Developer"' },
  { k: "stack", v: '["React", "Node.js", "Python"]' },
  { k: "based_in", v: '"Trichy, Tamil Nadu"' },
  { k: "open_to_work", v: "true" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 px-5 sm:px-6 pt-28 pb-16 lg:pt-24 overflow-hidden">
      {/* soft glow accent */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center"
      >
        {/* Left: intro */}
        <div className="text-center lg:text-left">
          <p className="text-cyan-400 text-base sm:text-lg mb-3">
            Hello, I'm
          </p>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1]">
            Mohamed Jafar S
          </h1>

          <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl text-cyan-300 h-9 sm:h-10">
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

          <p className="mt-6 text-base sm:text-lg text-slate-400 leading-7 sm:leading-8 max-w-xl mx-auto lg:mx-0">
            I build fast, scalable web applications with React, Node.js,
            and Python — with three end-to-end projects spanning AR/e-learning,
            web platforms, and machine learning.
          </p>

          <div className="mt-9 flex flex-wrap justify-center lg:justify-start gap-4">
            <a
              href="#projects"
              className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-semibold text-white transition"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-cyan-400 hover:bg-cyan-500 hover:text-white px-6 py-3 rounded-xl font-semibold text-cyan-300 transition"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Right: code-card visual */}
        <div className="hidden sm:block">
          <div className="rounded-2xl bg-slate-900/70 border border-slate-800 shadow-2xl backdrop-blur-sm overflow-hidden max-w-md mx-auto lg:mx-0">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-slate-800">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
              <span className="ml-3 text-xs text-slate-500 font-mono">developer.json</span>
            </div>
            <div className="p-5 font-mono text-sm leading-7">
              <p className="text-slate-500">{"{"}</p>
              {snippet.map((line, i) => (
                <p key={line.k} className="pl-4">
                  <span className="text-cyan-300">{line.k}</span>
                  <span className="text-slate-500">: </span>
                  <span className="text-amber-200">{line.v}</span>
                  {i < snippet.length - 1 && (
                    <span className="text-slate-500">,</span>
                  )}
                </p>
              ))}
              <p className="text-slate-500">{"}"}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}