export default function HireMe() {
  return (
    <section className="py-16 sm:py-20 px-5 sm:px-6">
      <div className="max-w-5xl mx-auto bg-cyan-500 rounded-3xl p-8 sm:p-10 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-950 mb-4">
          Let's build something amazing together
        </h2>

        <p className="text-slate-900 text-base sm:text-lg mb-6">
          I'm actively looking for Full Stack Developer opportunities,
          freelance projects, and internships.
        </p>

        <a
          href="#contact"
          className="bg-slate-950 text-white px-8 py-3 rounded-xl hover:bg-slate-800 transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}