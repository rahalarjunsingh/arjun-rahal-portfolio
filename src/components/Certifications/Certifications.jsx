import { certifications } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Certifications.css';

export default function Certifications() {
  const ref = useScrollReveal();

  return (
    <section className="section section--alt" id="certifications" aria-label="Certifications" ref={ref}>
      <div className="container">
        <span className="section-label reveal-item">Certifications</span>
        <h2 className="section-title reveal-item">
          Professional <em className="serif-accent">credentials</em>
        </h2>

        <div className="certs__grid">
          {certifications.map((cert, i) => (
            <div className="cert-card reveal-item" key={i}>
              <div className="cert-card__number">{String(i + 1).padStart(2, '0')}</div>
              <h3 className="cert-card__name">{cert.name}</h3>
              <p className="cert-card__issuer">{cert.issuer}</p>
              {cert.date && <span className="cert-card__date">{cert.date}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
