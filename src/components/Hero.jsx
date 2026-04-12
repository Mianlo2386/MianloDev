import { useState, useEffect } from 'react';
import './Hero.css';
import fotoPerfil from '../assets/foto_perfil.jpg';

const Hero = ({ lang }) => {
  const [text, setText] = useState('');
  
  const content = {
    es: {
      subtitle: 'Hola, soy un desarrollador.',
      location: 'Viviendo en Buenos Aires - Argentina',
      ctaWorks: 'MIS TRABAJOS',
      ctaContact: 'Contactame',
    },
    en: {
      subtitle: "Hi, I'm a developer.",
      location: 'Based in Buenos Aires - Argentina',
      ctaWorks: 'MY WORK',
      ctaContact: 'Contact Me',
    }
  };

  const t = content[lang];

  useEffect(() => {
    setText('');
    let index = 0;
    const text = lang === 'es' ? 'Soy programador!' : "I'm a developer!";
    const timer = setInterval(() => {
      if (index <= text.length) {
        setText(text.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 150);
    return () => clearInterval(timer);
  }, [lang]);

  return (
    <section id="inicio" className="hero-section">
      <div className="hero-container">
        <div className="hero-left">
          <h2>{t.subtitle}</h2>
          <h1>
            {text}
            <span className="cursor"></span>
          </h1>
          <h3>{t.location}</h3>
          <div className="hero-buttons">
            <a href="#portfolio" className="btn-primary">{t.ctaWorks}</a>
            <a href="#contacto" className="btn-secondary">
              <strong>{t.ctaContact}</strong>
              <i className="bi bi-arrow-down-circle"></i>
            </a>
          </div>
          <div className="scroll-indicator">
            <i className="bi bi-chevron-down"></i>
          </div>
        </div>
        <div className="hero-right">
          <img src={fotoPerfil} alt="Miguel López" className="profile-img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;