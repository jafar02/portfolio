const timeline = [
  {
    year: "2019",
    title: "SSLC",
    description: "Completed 10th Standard with 93%.",
  },
  {
    year: "2021",
    title: "Higher Secondary",
    description: "Completed 12th Standard with 90%.",
  },
  {
    year: "2025",
    title: "B.Tech in Information Technology",
    description: "Graduated with a CGPA of 8.5.",
  },
  {
    year: "2025",
    title: "Internships",
    description: "Completed internships in Web Development, Mobile App Development, and Revenue Growth.",
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-16 sm:py-20 px-5 sm:px-6 bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 text-center mb-12">
          My Journey
        </h2>

        <div className="space-y-8">
          {timeline.map((item, index) => (
            <div
              key={index}
              className="border-l-4 border-cyan-400 pl-6 py-2"
            >
              <p className="text-cyan-300 font-semibold">{item.year}</p>
              <h3 className="text-2xl font-bold text-white">
                {item.title}
              </h3>
              <p className="text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}