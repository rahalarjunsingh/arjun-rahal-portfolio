import { skills } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Skills.css';

export default function Skills() {
  const ref = useScrollReveal();
  const categories = Object.entries(skills);

  return (
    <section className="section section--dark" id="skills" aria-label="Skills" ref={ref}>
      <div className="container">
        <span className="section-label reveal-item">Skills</span>
        <h2 className="section-title reveal-item">
          Technologies & <em className="serif-accent">expertise</em>
        </h2>

        <div className="skills__grid">
          {categories.map(([category, items], ci) => (
            <div className="skills__category reveal-item" key={ci}>
              <h3 className="skills__category-name">{category}</h3>
              <div className="skills__items">
                {items.map((item) => (
                  <span className="tag" key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
