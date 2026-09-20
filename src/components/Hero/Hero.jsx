import { useEffect, useRef } from 'react';
import { personal, socialLinks } from '../../data/portfolioData';
import portrait from '../../assets/arjun.png';
import './Hero.css';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      heroRef.current?.classList.add('hero--loaded');
      return;
    }
    const timer = setTimeout(() => {
      heroRef.current?.classList.add('hero--loaded');
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero" ref={heroRef} id="home" aria-label="Introduction">
      {/* Background gradient glow */}
      <div className="hero__glow" aria-hidden="true" />

      <div className="hero__container container">
        {/* Top row — label */}
        <div className="hero__label hero-anim hero-anim--1">
          <span className="hero__label-dot" aria-hidden="true" />
          {personal.subtitle}
        </div>

        {/* Main content grid */}
        <div className="hero__grid">
          {/* Left text column */}
          <div className="hero__text">
            <p className="hero__greeting hero-anim hero-anim--2">Hi, I'm Arjun</p>
            <h1 className="hero__title hero-anim hero-anim--3">
              <span className="hero__title-sans">{personal.title.split(' ').slice(0, 1).join(' ')}</span>
              <span className="hero__title-serif">
                <em>{personal.title.split(' ').slice(1).join(' ')}</em>
              </span>
            </h1>
            <p className="hero__intro hero-anim hero-anim--4">
              {personal.heroIntro}
            </p>
            <div className="hero__actions hero-anim hero-anim--5">
              <a href="#contact" className="btn btn--primary">
                Get in Touch <span className="btn-arrow">→</span>
              </a>
              <a href={socialLinks.linkedin} className="btn btn--outline" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Portrait */}
          <div className="hero__portrait-wrapper hero-anim hero-anim--3">
            <div className="hero__portrait-glow" aria-hidden="true" />
            <img
              src={portrait}
              alt="Arjun Singh Rahal — Senior .NET Developer, professional portrait"
              className="hero__portrait"
              width="480"
              height="580"
              loading="eager"
              fetchpriority="high"
            />
          </div>
        </div>

        {/* Bottom info strip */}
        <div className="hero__bottom hero-anim hero-anim--6">
          <div className="hero__stat">
            <span className="hero__stat-label">Location</span>
            <span className="hero__stat-value">{personal.location.split('/')[0].trim()}</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-label">Focus</span>
            <span className="hero__stat-value">.NET · Azure · Microservices</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-label">Email</span>
            <a href={`mailto:${socialLinks.email}`} className="hero__stat-value hero__stat-link">{socialLinks.email}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
