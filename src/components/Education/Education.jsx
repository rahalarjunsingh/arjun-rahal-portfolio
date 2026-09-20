import { education } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Education.css';

export default function Education() {
  const ref = useScrollReveal();

  return (
    <section className="section" id="education" aria-label="Education" ref={ref}>
      <div className="container">
        <span className="section-label reveal-item">Education</span>
        <h2 className="section-title reveal-item">
          Academic <em className="serif-accent">background</em>
        </h2>

        <div className="edu__card reveal-item">
          <div className="edu__icon" aria-hidden="true">🎓</div>
          <div className="edu__content">
            <h3 className="edu__degree">{education.degree}</h3>
            <p className="edu__university">{education.university}</p>
            <p className="edu__college">{education.college}</p>
            <div className="edu__meta">
              <span className="edu__date">{education.graduationDate}</span>
              <span className="edu__cgpa">CGPA: {education.cgpa}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
