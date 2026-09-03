const stats = [
  { number: "3+", label: "Projects Completed" },
  { number: "3", label: "Internships" },
  { number: "4+", label: "Certifications" },
  { number: "2025", label: "B.Tech Graduate" },
];

export default function Stats() {
  return (
    <section className="py-14 sm:py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 px-5 sm:px-6">
        {stats.map((item) => (
          <div
            key={item.label}
            className="bg-slate-800 rounded-xl p-4 sm:p-6 text-center"
          >
            <h3 className="text-3xl sm:text-4xl font-bold text-cyan-400">
              {item.number}
            </h3>
            <p className="mt-2 text-slate-300">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}