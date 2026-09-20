import { useState, useEffect } from 'react';
import { personal, navLinks } from '../../data/portfolioData';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} role="banner">
      <nav className="navbar__inner container" aria-label="Primary navigation">
        <a href="#" className="navbar__wordmark" aria-label="Arjun Singh Rahal — Home">
          {personal.name.split(' ')[0]}
          <span className="navbar__wordmark-dot">.</span>
        </a>

        <ul className="navbar__links" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="navbar__link">{link.label}</a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="btn btn--primary navbar__cta">
          Get in Touch <span className="btn-arrow">→</span>
        </a>

        <button
          className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`navbar__overlay${menuOpen ? ' navbar__overlay--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <ul className="navbar__overlay-links" role="list">
          {navLinks.map((link, i) => (
            <li key={link.href} style={{ transitionDelay: `${0.05 * i}s` }}>
              <a href={link.href} className="navbar__overlay-link" onClick={handleLinkClick}>
                {link.label}
              </a>
            </li>
          ))}
          <li style={{ transitionDelay: `${0.05 * navLinks.length}s` }}>
            <a href="#contact" className="btn btn--accent navbar__overlay-cta" onClick={handleLinkClick}>
              Get in Touch <span className="btn-arrow">→</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
