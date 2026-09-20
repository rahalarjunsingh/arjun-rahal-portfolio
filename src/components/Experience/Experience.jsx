import { experience } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Experience.css';

export default function Experience() {
  const ref = useScrollReveal();

  return (
    <section className="section" id="experience" aria-label="Experience" ref={ref}>
      <div className="container">
        <span className="section-label reveal-item">Experience</span>
        <h2 className="section-title reveal-item">
          Where I've <em className="serif-accent">worked</em>
        </h2>

        <div className="exp__timeline">
          {experience.map((company, ci) => (
            <div className="exp__company reveal-item" key={ci}>
              <div className="exp__company-header">
                <h3 className="exp__company-name">{company.company}</h3>
                {company.companyNote && (
                  <span className="exp__company-note">{company.companyNote}</span>
                )}
              </div>

              {company.roles.map((role, ri) => (
                <div className="exp__role" key={ri}>
                  <div className="exp__role-meta">
                    <div className="exp__role-line" aria-hidden="true">
                      <span className="exp__role-dot" />
                    </div>
                    <div className="exp__role-info">
                      <h4 className="exp__role-title">{role.title}</h4>
                      <div className="exp__role-details">
                        <span className="exp__role-dates">{role.dates}</span>
                        {role.location && <span className="exp__role-location">{role.location}</span>}
                      </div>
                    </div>
                  </div>

                  <ul className="exp__responsibilities">
                    {role.responsibilities.map((item, ii) => (
                      <li key={ii} className="exp__responsibility">{item}</li>
                    ))}
                  </ul>

                  <div className="exp__tech-tags">
                    {role.technologies.map((tech) => (
                      <span className="tag" key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
