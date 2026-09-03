import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#certifications", label: "Certifications" },
  { href: "#timeline", label: "Journey" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/85 backdrop-blur-md z-50 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-5 sm:px-6 py-3.5">
        <a
          href="#top"
          className="font-display text-lg sm:text-xl font-semibold tracking-tight text-white"
        >
          Mohamed<span className="text-cyan-400"> Jafar</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-7 text-sm text-slate-300">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-cyan-400 transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="lg:hidden text-white text-2xl p-1.5 -mr-1.5"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          open ? "max-h-[26rem]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-5 pb-5 pt-1 gap-1 bg-slate-950/95 border-b border-slate-800/80">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2.5 text-slate-200 hover:text-cyan-400 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}