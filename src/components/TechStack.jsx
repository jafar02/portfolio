const technologies = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Node.js",
  "Express.js",
  "Python",
  "MongoDB",
  "Git",
  "GitHub",
];

export default function TechStack() {
  return (
    <section id="tech" className="py-16 sm:py-20 px-5 sm:px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 text-center mb-12">
          Tech Stack
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-5 py-3 bg-slate-800 rounded-full text-cyan-300 border border-slate-700 hover:border-cyan-400 transition"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}