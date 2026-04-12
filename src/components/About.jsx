import { useState, useEffect } from 'react';
import './About.css';

const About = ({ lang }) => {
  const [animate, setAnimate] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => setAnimate(false), 4500);
    return () => clearTimeout(timer);
  }, []);
  const content = {
    es: {
      title: 'Acerca de mi',
      subtitle: 'Conoceme más.',
      name: 'Hola, soy Miguel López',
      description: 'Soy un diseñador y desarrollador apasionado por el diseño web. Disfruto desarrollando sitios web simples, limpios y elegantes que proporcionan un valor real al usuario final. Mis clientes han obtenido resultados excepcionales trabajando conmigo.',
      iaText: 'Utilizo la IA como herramienta de desarrollo, no como sustituto, para acelerar workflows sin perder calidad.',
      years: '4',
      yearsLabel: 'Años de experiencia.',
      nameLabel: 'Nombre:',
      nameValue: 'Miguel López',
      emailLabel: 'Email:',
      emailValue: 'miguellopez32@gmail.com',
      birthLabel: 'Fecha de nacimiento:',
      birthValue: '28 de agosto de 1973',
      countryLabel: 'País:',
      countryValue: 'Argentina',
    },
    en: {
      title: 'About me',
      subtitle: 'Get to know me.',
      name: "Hi, I'm Miguel López",
      description: "I'm a passionate web designer and developer. I love creating simple, clean, and elegant websites that provide real value to end users. My clients have gotten exceptional results working with me.",
      iaText: 'I use AI as a development tool, not as a replacement, to accelerate workflows without losing quality.',
      years: '4',
      yearsLabel: 'Years of experience.',
      nameLabel: 'Name:',
      nameValue: 'Miguel López',
      emailLabel: 'Email:',
      emailValue: 'miguellopez32@gmail.com',
      birthLabel: 'Birth date:',
      birthValue: 'August 28, 1973',
      countryLabel: 'Country:',
      countryValue: 'Argentina',
    }
  };

  const t = content[lang];

  return (
    <section id="conoceme" className="about-section">
      <div className="about-header">
        <p className="section-label">{t.title}</p>
        <h2><strong>{t.subtitle}</strong></h2>
      </div>

      <div className="about-content">
        <div className="about-text">
          <h2>{t.name}</h2>
          <p className="description">{t.description}</p>
          <p className="ia-tag">
            <i className="bi bi-stars"></i> 
            <strong>{lang === 'es' ? 'IA como herramienta:' : 'AI as tool:'} </strong> 
            {t.iaText}
          </p>
        </div>

        <div className="about-experience">
          <div className={`experience-number ${animate ? '' : 'stopped'}`}>
            <span>{t.years}</span>
          </div>
          <h4>{t.yearsLabel}</h4>
        </div>
      </div>

      <div className="about-data">
        <div className="data-row">
          <div className="data-item">
            <span className="data-label">{t.nameLabel}</span>
            <span className="data-value">{t.nameValue}</span>
          </div>
          <div className="data-item">
            <span className="data-label">{t.emailLabel}</span>
            <span className="data-value">{t.emailValue}</span>
          </div>
        </div>
        <div className="data-row">
          <div className="data-item">
            <span className="data-label">{t.birthLabel}</span>
            <span className="data-value">{t.birthValue}</span>
          </div>
          <div className="data-item">
            <span className="data-label">{t.countryLabel}</span>
            <span className="data-value">{t.countryValue}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;