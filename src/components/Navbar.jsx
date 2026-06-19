export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-md z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-cyan-400">
          Mohamed Jafar
        </h1>

        <ul className="flex gap-6 text-sm md:text-base">
          <li>
            <a href="#about" className="hover:text-cyan-400">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-cyan-400">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-cyan-400">
              Projects
            </a>
          </li>
          <li>
  <a href="#experience" className="hover:text-cyan-400">
    Experience
  </a>
</li>

<li>
  <a href="#certifications" className="hover:text-cyan-400">
    Certifications
  </a>
</li>
<li>
  <a href="#education" className="hover:text-cyan-400">
    Education
  </a>
</li>
<li>
  <a href="#timeline" className="hover:text-cyan-400">
    Journey
  </a>
</li>

<li>
  <a href="#services" className="hover:text-cyan-400">
    Services
  </a>
</li>
          <li>
            <a href="#contact" className="hover:text-cyan-400">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}