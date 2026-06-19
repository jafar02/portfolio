import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-slate-900 text-white"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-4">
          Contact Me
        </h2>

        <p className="text-center text-slate-400 mb-12">
          I'm open to internships, freelance projects, and full-time
          opportunities. Let's connect!
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-5">
            <div className="flex items-center gap-4 bg-slate-800 p-4 rounded-xl">
              <FaEnvelope className="text-cyan-400 text-xl" />
              <span>mohammedjafa2004@gmail.com</span>
            </div>

            <div className="flex items-center gap-4 bg-slate-800 p-4 rounded-xl">
              <FaPhone className="text-cyan-400 text-xl" />
              <span>+91 9150353743</span>
            </div>

            <div className="flex items-center gap-4 bg-slate-800 p-4 rounded-xl">
              <FaGithub className="text-cyan-400 text-xl" />
              <span>github.com/jafar02</span>
            </div>

            <div className="flex items-center gap-4 bg-slate-800 p-4 rounded-xl">
              <FaLinkedin className="text-cyan-400 text-xl" />
              <span>linkedin.com/in/Jafar.S</span>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-slate-800 p-6 rounded-xl space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-slate-700 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-slate-700 outline-none"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-slate-700 outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 py-3 rounded-lg font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}