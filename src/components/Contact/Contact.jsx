import { socialLinks } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Contact.css';

export default function Contact() {
  const ref = useScrollReveal();

  return (
    <section className="section section--dark contact" id="contact" aria-label="Contact" ref={ref}>
      <div className="container contact__inner">
        <span className="section-label reveal-item">Contact</span>

        <h2 className="contact__heading reveal-item">
          Let's build something<br />
          <em className="contact__heading-accent">meaningful together.</em>
        </h2>

        <p className="contact__text reveal-item">
          Have a project in mind, want to discuss an opportunity, or just want to connect?
          I'd love to hear from you.
        </p>

        <div className="contact__actions reveal-item">
          <a href={`mailto:${socialLinks.email}`} className="btn btn--accent contact__email-btn">
            {socialLinks.email} <span className="btn-arrow">→</span>
          </a>
        </div>

        <div className="contact__links reveal-item">
          <a href={socialLinks.linkedin} className="contact__link" target="_blank" rel="noopener noreferrer">
            LinkedIn ↗
          </a>
          <a href={socialLinks.github} className="contact__link" target="_blank" rel="noopener noreferrer">
            GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}
