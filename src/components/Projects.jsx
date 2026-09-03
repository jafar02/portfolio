const projects = [
  {
    title: "Assessment-Driven AR Learning System",
    description:
      "An interactive AR-based e-learning platform using custom 3D models built in Blender to help students visualize complex concepts, backed by Python scripts for content delivery.",
    tech: ["Python", "JavaScript", "Blender"],
    github: "https://github.com/jafar02",
  },
  {
    title: "Internship Registration Portal",
    description:
      "A responsive web platform for students to register and submit internship applications end-to-end, with a React front end and Node.js APIs for form handling and validation.",
    tech: ["React", "Node.js", "HTML", "CSS"],
    github: "https://github.com/jafar02",
  },
  {
    title: "Sign Language Detection System",
    description:
      "A real-time system that detects and classifies hand-sign gestures from webcam video using OpenCV and MediaPipe, with a trained classifier mapping gestures to letters/words.",
    tech: ["Python", "OpenCV", "MediaPipe", "Machine Learning"],
    github: "https://github.com/jafar02",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20 px-5 sm:px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 text-center mb-12">
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

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="block text-center bg-cyan-500 text-white py-2 rounded-lg hover:bg-cyan-600 transition"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}