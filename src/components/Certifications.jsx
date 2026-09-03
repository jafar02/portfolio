const certifications = [
  "Full Stack Web Development",
  "DevOps Workshop",
  "AR/VR Workshop",
  "Mobile App Development",
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 sm:py-20 px-5 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-10">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-slate-800 p-6 rounded-xl shadow-lg hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold">🏆 {cert}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}