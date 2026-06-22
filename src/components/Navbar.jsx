import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Blur Layer */}
      <div className="absolute inset-0 backdrop-blur-xl bg-slate-950/60 border-b border-white/5" />

      <nav aria-label="Main navigation" className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3" aria-label="Aaqib Javaid - Home">
            <div className="relative">
              <div className="absolute inset-0 bg-purple-500 blur-xl opacity-50" aria-hidden="true" />
              <img
                src="/favicon.png"
                alt=""
                aria-hidden="true"
                className="w-10 h-10 rounded-xl relative z-10"
              />
            </div>

            <div>
              <p className="font-bold text-lg">Aaqib Javaid</p>
              <p className="text-xs text-slate-400">React Developer</p>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-300 hover:text-white transition-all duration-300 relative group"
              >
                {item.name}
                <span aria-hidden="true" className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Hire Me Button */}
          <a
            href="#contact"
            className="hidden md:flex items-center justify-center px-6 py-3 rounded-xl font-medium bg-gradient-to-r from-purple-600 to-blue-600 hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/20"
          >
            Hire Me
          </a>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="md:hidden text-white text-3xl"
          >
            {menuOpen ? <HiX aria-hidden="true" /> : <HiMenuAlt3 aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-[500px] pb-6" : "max-h-0"
          }`}
        >
          <div className="bg-slate-900/90 backdrop-blur-xl rounded-2xl p-6 border border-white/5">
            <div className="flex flex-col gap-5">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-slate-300 hover:text-white"
                >
                  {item.name}
                </a>
              ))}

              <a
                href="#contact"
                className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl py-3 text-center font-medium"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
