import Image from "next/image";
import "./cv.css";

export default function Home() {
  return (
    <div className="cv-container">
      <header className="cv-header">
        <div className="header-content">
          <h1 className="cv-name">Nathan Pierreuse</h1>
          <p className="cv-title">Étudiant en BUT Informatique</p>
          <div className="contact-info">
            <span>nathan.pierreuse@gmail.com</span>
            <span>06 17 10 31 83</span>
            <span>Sin-le-Noble, Nord France</span>
          </div>
        </div>
        <div className="profile-image-wrapper">
          <Image
            src="./nathan_photo.jpg"
            alt="Nathan Pierreuse"
            width={200}
            height={200}
            className="profile-image"
            priority
          />
        </div>
      </header>

      <section className="cv-section">
        <h2 className="section-title">Profil</h2>
        <div className="section-content profile-text">
          <p>
            Étudiant passionné par l'informatique et les nouvelles technologies, je suis actuellement 
            en BUT 3 Informatique à l'IUT de Lens. Mon parcours m'a permis d'obtenir 
            des compétences en développement logiciel, bases de données et technologies web. 
            Je recherche des opportunités pour mettre en pratique mes connaissances et continuer à 
            apprendre dans un environnement professionnel et bienveillant.
          </p>
        </div>
      </section>

      <section className="cv-section">
        <h2 className="section-title">Formation</h2>
        <div className="section-content">
          <div className="education-item">
            <div className="item-header">
              <h3 className="item-title">BUT Informatique</h3>
              <span className="item-date">2023 - 2026</span>
            </div>
            <p className="item-subtitle">IUT de Lens</p>
          </div>

          <div className="education-item">
            <div className="item-header">
              <h3 className="item-title">Baccalauréat</h3>
              <span className="item-date">2022</span>
            </div>
            <p className="item-subtitle">Spécialités : Mathématiques, NSI, Physique-Chimie</p>
            <p className="item-subtitle">Option : Mathématiques expertes</p>
            <p className="item-subtitle">Lycée Arthur Rimbaud • Sin-le-Noble</p>
          </div>
        </div>
      </section>

      <section className="cv-section">
        <h2 className="section-title">Expériences Professionnelles</h2>
        <div className="section-content">
          <div className="experience-item">
            <div className="item-header">
              <h3 className="item-title">Stage</h3>
              <span className="item-date">Avril 2025 - Juin 2025</span>
            </div>
            <p className="item-subtitle">Service informatique municipal • Sin-le-Noble</p>
            <div className="item-description">
              <ul className="item-list">
                <li>CVThèque avec IA intégré</li>
                <li>Application HACCP pour le service cantine</li>
                <li>Travail en équipe dans divers intervention et projets</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      <section className="cv-section">
        <h2 className="section-title">Compétences</h2>
        <div className="section-content">
          <div className="skills-grid">
            <div className="skill-category">
              <h3 className="skill-category-title">Langages</h3>
              <p className="skill-tags">
                Java • Python • JavaScript • TypeScript • SQL • HTML/CSS
              </p>
            </div>

            <div className="skill-category">
              <h3 className="skill-category-title">Technologies</h3>
              <p className="skill-tags">
                React • Node.js • Spring Boot • PostgreSQL • MySQL
              </p>
            </div>

            <div className="skill-category">
              <h3 className="skill-category-title">Outils</h3>
              <p className="skill-tags">
                VS Code • JetBrains • Linux • Windows • Git • UML
              </p>
            </div>

            <div className="skill-category">
              <h3 className="skill-category-title">Langues</h3>
              <p className="skill-tags">
                Français (natif) • Anglais (B2+)
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cv-section">
        <h2 className="section-title">Centres d'intérêt</h2>
        <p className="section-content">
          Jeux vidéo • Nouvelles technologies • Cinéma • Musique
        </p>
      </section>

      <footer className="cv-footer">
        <h2 className="footer-title">Me contacter</h2>
        <div className="social-links">
          <a 
            href="https://github.com/legobestof" 
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/nathan-pierreuse-498493338/" 
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            LinkedIn
          </a>
          <a 
            href="mailto:nathan.pierreuse@gmail.com" 
            className="social-link"
          >
            Email
          </a>
        </div>
      </footer>
    </div>
  );
}
