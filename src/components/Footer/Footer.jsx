import { useState, useEffect } from 'react';
import { personal, socialLinks } from '../../data/portfolioData';
import './Footer.css';

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__inner">
        <div className="footer__left">
          <span className="footer__name">{personal.name}</span>
          <span className="footer__role">{personal.title}</span>
        </div>

        <div className="footer__links">
          <a href={`mailto:${socialLinks.email}`} className="footer__link">Email</a>
          <a href={socialLinks.linkedin} className="footer__link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={socialLinks.github} className="footer__link" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>

        <div className="footer__right">
          <span className="footer__copyright">© {new Date().getFullYear()} {personal.name}</span>
        </div>
      </div>

      <button
        className={`back-to-top${showBackToTop ? ' back-to-top--visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        ↑
      </button>
    </footer>
  );
}
