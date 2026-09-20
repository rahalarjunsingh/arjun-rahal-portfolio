import { personal, education } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './About.css';

export default function About() {
  const ref = useScrollReveal();

  return (
    <section className="section section--alt" id="about" aria-label="About" ref={ref}>
      <div className="container">
        <div className="about__header">
          <span className="section-label reveal-item">About</span>
          <h2 className="section-title about__title reveal-item">
            Building scalable systems<br />
            <em className="about__title-accent">that power real business.</em>
          </h2>
        </div>

        <div className="about__grid">
          <div className="about__body reveal-item">
            <p className="about__text">{personal.summary}</p>
          </div>

          <div className="about__facts reveal-item">
            <div className="about__fact">
              <span className="about__fact-label">Location</span>
              <span className="about__fact-value">{personal.location}</span>
            </div>
            <div className="about__fact">
              <span className="about__fact-label">Education</span>
              <span className="about__fact-value">{education.degree}</span>
            </div>
            <div className="about__fact">
              <span className="about__fact-label">University</span>
              <span className="about__fact-value">{education.university}</span>
            </div>
            <div className="about__fact">
              <span className="about__fact-label">CGPA</span>
              <span className="about__fact-value">{education.cgpa}</span>
            </div>
            <div className="about__fact">
              <span className="about__fact-label">Languages</span>
              <span className="about__fact-value">{personal.languages.join(', ')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
