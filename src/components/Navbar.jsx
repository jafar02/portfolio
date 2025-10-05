import { useState, useEffect } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "projects", "achievements", "certificates", "education", "experience", "contact"];
      const scrollPos = window.scrollY + 100; // Offset for navbar height

      for (let id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActive(id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <h1 className="logo">Jafar</h1>
      <div className="hamburger" onClick={() => setOpen(!open)}>☰</div>
      <ul className={`nav-links ${open ? "active" : ""}`}>
        {["about", "projects", "achievements", "certificates", "education", "experience", "contact"].map((section) => (
          <li key={section}>
            <a
              href={`#${section}`}
              className={active === section ? "active-link" : ""}
              onClick={() => setOpen(false)} // close mobile menu
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
