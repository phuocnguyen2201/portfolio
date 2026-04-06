import { Link, useLocation } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "../hooks/use-theme";
import { useState } from "react";

const Header = () => {
  const { isDark, toggle } = useTheme();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Skills Lab", path: "/skills" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b-[3px] border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-heading font-bold text-xl tracking-tight">
          <span className="text-primary">◆</span> Portfolio
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`brutal-btn text-xs border-[2px] px-4 py-2 ${
                location.pathname === item.path
                  ? "bg-primary text-primary-foreground"
                  : "bg-background text-foreground hover:bg-muted"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={toggle}
            className="brutal-btn border-[2px] px-3 py-2 bg-accent text-accent-foreground ml-2"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </nav>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggle}
            className="brutal-btn border-[2px] px-3 py-2 bg-accent text-accent-foreground"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="brutal-btn border-[2px] px-3 py-2 bg-background"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t-[3px] border-border bg-background px-6 py-4 flex flex-col gap-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={`brutal-btn text-xs border-[2px] px-4 py-2 text-center ${
                location.pathname === item.path
                  ? "bg-primary text-primary-foreground"
                  : "bg-background text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
