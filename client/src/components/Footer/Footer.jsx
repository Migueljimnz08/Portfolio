import React from "react";

const SOCIAL_LINKS = [
  { label: 'GitHub',   href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Twitter',  href: '#' },
  { label: 'Source',   href: '#' },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="inner">
        <span className="brand">My own Portfolio</span>
 
        <p className="copy">
          © 2024 Built with precision by Miguel Ángel Jiménez Morante. Path: ~/home/root
        </p>
 
        <nav className="links" aria-label="Social links">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
