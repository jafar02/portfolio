const projects = [
  {
    title: "Assessment Driven AR Learning System",
    description:
      "An interactive AR-based learning platform designed to improve student engagement and assessment.",
    tech: ["Python", "JavaScript", "Blender"],
    github: "#",
    demo: "#",
  },
  {
    title: "Internship Registration Portal",
    description:
      "A responsive web application for managing internship registrations with a modern user interface.",
    tech: ["React", "Node.js", "HTML", "CSS"],
    github: "#",
    demo: "#",
  },
  {
    title: "Sign Language Detection",
    description:
      "A machine learning application that recognizes sign language gestures using computer vision.",
    tech: ["Python", "Machine Learning"],
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-12">
          Featured Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-white mb-3">
                {project.title}
              </h3>

              <p className="text-slate-300 mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center bg-cyan-500 text-white py-2 rounded-lg hover:bg-cyan-600 transition"
                >
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center border border-cyan-500 text-cyan-300 py-2 rounded-lg hover:bg-cyan-500 hover:text-white transition"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}