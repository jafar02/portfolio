const experiences = [
      {
    role: "Web Developer Intern",
    company: "Twin Health India",
    duration: "3 Months",
    description:
      "Contributed to dashboard creation and chatbot development and automate user interactions at Twin Health.",
  },

  {
    role: "Revenue Growth Specialist Intern",
    company: "LearnTechZo Wide Pvt. Ltd.",
    duration: "3 Months",
    description:
      "Worked on business growth strategies, client engagement, and operational support in a professional environment.",
  },
  {
    role: "Web Development Intern",
    company: "Exposys Datalabs",
    duration: "1 Month",
    description:
      "Developed responsive web pages and gained practical experience in frontend and backend technologies.",
  },
  {
    role: "Mobile App Development Intern",
    company: "Exposys Datalabs",
    duration: "1 Month",
    description:
      "Built and tested mobile application features while learning modern development practices.",
  },

];

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20 px-5 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-10">
          Experience
        </h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-xl p-6 shadow-lg hover:scale-[1.02] transition"
            >
              <h3 className="text-2xl font-semibold">{exp.role}</h3>
              <p className="text-cyan-300">
                {exp.company} • {exp.duration}
              </p>
              <p className="mt-3 text-slate-300">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}