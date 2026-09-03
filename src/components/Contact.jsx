import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:mohammedjafa2004@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 px-5 sm:px-6 bg-slate-900 text-white"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-cyan-400 mb-4">
          Contact Me
        </h2>

        <p className="text-center text-slate-400 mb-12">
          I'm open to internships, freelance projects, and full-time
          opportunities. Let's connect!
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-5">
            <a
              href="mailto:mohammedjafa2004@gmail.com"
              className="flex items-center gap-4 bg-slate-800 p-4 rounded-xl hover:bg-slate-700/70 transition"
            >
              <FaEnvelope className="text-cyan-400 text-xl shrink-0" />
              <span className="break-all">mohammedjafa2004@gmail.com</span>
            </a>

            <a
              href="tel:+919150353743"
              className="flex items-center gap-4 bg-slate-800 p-4 rounded-xl hover:bg-slate-700/70 transition"
            >
              <FaPhone className="text-cyan-400 text-xl shrink-0" />
              <span>+91 91503 53743</span>
            </a>

            <a
              href="https://github.com/jafar02"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 bg-slate-800 p-4 rounded-xl hover:bg-slate-700/70 transition"
            >
              <FaGithub className="text-cyan-400 text-xl shrink-0" />
              <span className="break-all">github.com/jafar02</span>
            </a>

            <a
              href="https://linkedin.com/in/Jafar.S"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 bg-slate-800 p-4 rounded-xl hover:bg-slate-700/70 transition"
            >
              <FaLinkedin className="text-cyan-400 text-xl shrink-0" />
              <span className="break-all">linkedin.com/in/Jafar.S</span>
            </a>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-slate-800 p-6 rounded-xl space-y-4">
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-slate-700 outline-none focus:ring-2 focus:ring-cyan-400"
            />

            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-slate-700 outline-none focus:ring-2 focus:ring-cyan-400"
            />

            <textarea
              rows="5"
              name="message"
              required
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-slate-700 outline-none focus:ring-2 focus:ring-cyan-400"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 py-3 rounded-lg font-semibold transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}