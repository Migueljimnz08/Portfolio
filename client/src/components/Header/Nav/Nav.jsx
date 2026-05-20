import { useState } from "react";

const navLinks = [
  { label: 'hero', href: '#hero' },
  { label: 'stack', href: '#stack' },
  { label: 'projects', href: '#projects' },
  { label: 'experience', href: '#experience' },
  { label: 'contact', href: '#contact' },
];

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
     <nav className="nav" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="navLink" 
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Hamburger — mobile */}
        <button
          className={`hamburger ${menuOpen ? "hamburger_open" : ''}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
 
      {/* Mobile drawer */}
      <nav
        className={`mobileMenu ${menuOpen ? "mobile_open" : ''}`}
        aria-label="Mobile navigation"
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="mobileNavLink"
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a
          href="/resume.pdf"
          className="nav_resumeBtn"
          style={{ alignSelf: 'flex-start' }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </nav>
    </>
  );
};

export default Nav;
