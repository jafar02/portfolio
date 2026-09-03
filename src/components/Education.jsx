export default function Education() {
  return (
    <section id="education" className="py-16 sm:py-20 px-5 sm:px-6 bg-slate-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-10 text-center">
          Education
        </h2>

        <div className="space-y-6">
          {/* B.Tech */}
          <div className="bg-slate-800 rounded-xl p-6 shadow-lg border-l-4 border-cyan-400">
            <h3 className="text-2xl font-semibold text-white">
              B.Tech - Information Technology
            </h3>
            <p className="text-cyan-300">
              M.A.M College of Engineering and Technology
            </p>
            <p className="text-slate-400">2021 - 2025</p>
            <p className="text-slate-300 mt-2">
              CGPA: <strong>8.5 / 10</strong>
            </p>
          </div>

          {/* Higher Secondary */}
          <div className="bg-slate-800 rounded-xl p-6 shadow-lg border-l-4 border-cyan-400">
            <h3 className="text-2xl font-semibold text-white">
              Higher Secondary (12th)
            </h3>
            <p className="text-slate-400">2021</p>
            <p className="text-slate-300 mt-2">
              Percentage: <strong>90%</strong>
            </p>
          </div>

          {/* SSLC */}
          <div className="bg-slate-800 rounded-xl p-6 shadow-lg border-l-4 border-cyan-400">
            <h3 className="text-2xl font-semibold text-white">
              SSLC (10th)
            </h3>
            <p className="text-slate-400">2019</p>
            <p className="text-slate-300 mt-2">
              Percentage: <strong>93%</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}