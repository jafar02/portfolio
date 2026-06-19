const services = [
  {
    title: "🌐 Web Development",
    description: "Building responsive and modern websites using React and related technologies.",
  },
  {
    title: "⚙️ Backend Development",
    description: "Creating secure APIs and server-side applications using Node.js and Express.",
  },
  {
    title: "🐍 Python Development",
    description: "Developing automation tools and Python-based applications.",
  },
  {
    title: "📱 Mobile-Friendly UI",
    description: "Designing responsive interfaces that work well across devices.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-12">
          What I Do
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-cyan-400 transition"
            >
              <h3 className="text-2xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-slate-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}