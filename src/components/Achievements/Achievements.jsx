import { achievements } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Achievements.css';

export default function Achievements() {
  const ref = useScrollReveal();

  return (
    <section className="section" id="achievements" aria-label="Achievements" ref={ref}>
      <div className="container">
        <span className="section-label reveal-item">Highlights</span>
        <h2 className="section-title reveal-item">
          Notable <em className="serif-accent">achievements</em>
        </h2>

        <div className="achievements__list">
          {achievements.map((item, i) => (
            <div className="achievement reveal-item" key={i}>
              <div className="achievement__marker" aria-hidden="true">✦</div>
              <div className="achievement__content">
                <h3 className="achievement__title">{item.title}</h3>
                <p className="achievement__desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
