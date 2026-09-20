import { projects } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Projects.css';

export default function Projects() {
  const ref = useScrollReveal();

  return (
    <section className="section section--alt" id="projects" aria-label="Projects" ref={ref}>
      <div className="container">
        <span className="section-label reveal-item">Projects</span>
        <h2 className="section-title reveal-item">
          Selected <em className="serif-accent">work</em>
        </h2>
        <p className="section-subtitle reveal-item">
          Technical projects spanning e-commerce platforms, payment systems, and AI-powered applications.
        </p>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <article className="project-card reveal-item" key={i}>
              <div className="project-card__header">
                <div className="project-card__number">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="project-card__links">
                  {project.github && (
                    <a
                      href={project.github}
                      className="project-card__link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      GitHub ↗
                    </a>
                  )}
                  {project.status && (
                    <span className="project-card__status">{project.status}</span>
                  )}
                </div>
              </div>

              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__tagline">{project.tagline}</p>
              <p className="project-card__description">{project.description}</p>

              <ul className="project-card__highlights">
                {project.highlights.map((h, hi) => (
                  <li key={hi}>{h}</li>
                ))}
              </ul>

              <div className="project-card__tech">
                {project.technologies.map((tech) => (
                  <span className="tag" key={tech}>{tech}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
