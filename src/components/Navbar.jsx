import { useEffect, useState } from "react";
import {
  FaBars,
  FaTimes,
  FaRocket,
  FaUserAstronaut,
  FaBriefcase,
  FaProjectDiagram,
  FaServicestack,
  FaEnvelope,
  FaRobot,
} from "react-icons/fa";

const sections = [
  { id: "home", label: "Home", icon: <FaRocket /> },
  { id: "about", label: "About", icon: <FaUserAstronaut /> },
  { id: "work", label: "Work", icon: <FaBriefcase /> },
  { id: "projects", label: "Projects", icon: <FaProjectDiagram /> },
  { id: "services", label: "Services", icon: <FaServicestack /> },
  { id: "contact", label: "Contact", icon: <FaEnvelope /> },
  { id: "assistant", label: "Ask Me", icon: <FaRobot /> },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop - 150 <= scrollY) {
          setActive(sections[i].id);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur border-b border-cyan-500/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-cyan-400 text-2xl font-extrabold tracking-widest">
          Aum<span className="text-white">.dev</span>
        </h1>

        {/* Desktop + Tablet Menu */}
        <ul className="hidden sm:flex space-x-2 md:space-x-6 font-medium text-white text-sm">
          {sections.map(({ id, label, icon }) => (
            <li key={id}>
              <button
                onClick={() => handleNavClick(id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 
                  ${active === id
                    ? "bg-cyan-600/20 text-cyan-300 shadow-md"
                    : "hover:bg-cyan-600/10 hover:text-cyan-200"
                  }`}
              >
                {icon}
                {/* Show label only on medium+ screens */}
                <span className="hidden md:inline">{label}</span>
              </button>
            </li>
          ))}
        </ul>

        {/* Hamburger Menu Toggle */}
        <div className="sm:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-cyan-300 text-2xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="sm:hidden px-4 pb-4">
          <ul className="space-y-3 font-medium text-white">
            {sections.map(({ id, label, icon }) => (
              <li key={id}>
                <button
                  onClick={() => handleNavClick(id)}
                  className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300
                    ${active === id
                      ? "bg-cyan-600/20 text-cyan-300 shadow-md"
                      : "hover:bg-cyan-600/10 hover:text-cyan-200"
                    }`}
                >
                  {icon}
                  <span>{label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
