import { Moon, Sun, Menu, X, Download } from "lucide-react";
import { NAV } from "../data/nav";
import { useEffect, useState } from "react";

const Navbar = ({ theme, toggle }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV.map(n => n.toLowerCase());
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };
  
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-1000 transition-all duration-300 px-[5%] ${
          scrolled ? "bg-(--bg2) backdrop-blur-lg border-b border-(--border)" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between h-16 max-w-[1400px] mx-auto">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <span 
              onClick={() => scroll("about")}
              className="font-[Syne] font-extrabold text-[20px] grad cursor-pointer"
            >
              Farhad.Nuri
            </span>
          </div>

          {/* Center: Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 absolute left-1/2 transform -translate-x-1/2">
            {NAV.map((n) => {
              const isActive = activeSection === n.toLowerCase();
              return (
                <button
                  key={n}
                  onClick={() => scroll(n.toLowerCase())}
                  className={`bg-none border-none cursor-pointer px-4 py-2 rounded-lg font-[DM Sans] text-[14px] font-medium transition-all duration-300 ${
                    isActive 
                      ? "text-(--accent) bg-(--bg3)" 
                      : "text-(--text2) hover:text-(--accent) hover:bg-(--bg3)"
                  }`}
                >
                  {n}
                </button>
              );
            })}
          </div>

          {/* Right: Theme Toggle + Resume Button */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle - Desktop */}
            <button
              onClick={toggle}
              className="hidden lg:flex bg-(--bg3) border border-(--border) rounded-lg w-9 h-9 items-center justify-center cursor-pointer hover:border-(--accent) transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Resume Button - Desktop */}
            <a
              href="https://drive.google.com/file/d/1Qrn0tksmr7TSJHJwmq4aFD1jLNYTB6yk/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="hidden lg:flex bg-[linear-gradient(135deg,var(--accent),var(--accent2))] rounded-lg px-4 h-9 items-center justify-center gap-2 no-underline text-[13px] font-semibold text-white hover:shadow-[0_4px_16px_var(--glow)] transition-all duration-300"
              aria-label="Download resume"
            >
              <Download size={16} />
              Resume
            </a>

            {/* Mobile: Theme Toggle */}
            <button
              onClick={toggle}
              className="lg:hidden bg-(--bg3) border border-(--border) rounded-lg w-9 h-9 flex items-center justify-center cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Mobile: Menu Toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden bg-(--bg3) border border-(--border) rounded-lg w-9 h-9 flex items-center justify-center cursor-pointer"
              aria-label="Toggle menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full bg-(--bg2) border-t border-(--border) transition-all duration-300 overflow-hidden ${
            open ? "max-h-[500px] py-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col items-center gap-2">
            {NAV.map((n) => (
              <button
                key={n}
                onClick={() => scroll(n.toLowerCase())}
                className="text-(--text2) px-4 py-2 rounded-md text-sm hover:text-(--accent) hover:bg-(--bg3) transition-all duration-300 w-[90%]"
              >
                {n}
              </button>
            ))}
            
            {/* Mobile Resume Button */}
            <a
              href="https://drive.google.com/file/d/1vhJFzQKPRNcd2VxjsYNvH1ccCHW-UOWu/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="bg-[linear-gradient(135deg,var(--accent),var(--accent2))] rounded-lg px-4 py-2 flex items-center justify-center gap-2 no-underline text-sm font-semibold text-white w-[90%] mt-2"
            >
              <Download size={16} />
              Resume
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
