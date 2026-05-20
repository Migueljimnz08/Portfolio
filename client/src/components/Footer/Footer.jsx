import React from "react";

const SOCIAL_LINKS = [
  { label: 'GitHub', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Twitter', href: '#' },
  { label: 'Source', href: '#' },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_inner">
        <span className="footer_brand">My own Portfolio</span>

        <p className="footer_copy">
          © 2024 Built with precision by Miguel Ángel Jiménez Morante. Path: ~/home/root
        </p>

        <nav className="footer_links" aria-label="Social links">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="footer_link"
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
