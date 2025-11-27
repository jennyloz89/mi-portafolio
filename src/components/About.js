import React from "react";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h1>
            Hola, soy <span className="highlight">Jennifer Lozano</span>
          </h1>
          <p className="subtitle">
            QA Automation Engineer | Especialista en Cypress, Selenium, Playwright y Pruebas E2E
          </p>
          <a href="#projects" className="btn-primary">
            Ver Proyectos
          </a>
        </div>
        <div className="about-image">
          {/* Puedes agregar tu foto aquí */}
        </div>
      </div>
    </section>
  );
}
