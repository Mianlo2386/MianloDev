import { useState } from 'react';
import './Portfolio.css';

const Portfolio = ({ lang }) => {
  const content = {
    es: {
      title: 'Portfolio',
      subtitle: 'Algunos de mis proyectos más recientes',
    },
    en: {
      title: 'Portfolio',
      subtitle: 'Some of my most recent projects',
    }
  };

  const t = content[lang];

  const projects = [
    { 
      img: 'https://i.imgur.com/d3nA2C4.png', 
      title: 'Ecommerce - IA', 
      tech: 'React/Node.js/AI',
      link: 'https://betostore.vercel.app/'
    },
    { 
      img: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600', 
      title: 'Buscador de Imágenes', 
      tech: 'React/Vite/API',
      link: 'https://mianlo2386.github.io/Buscador-de-Unsplash-con-Vite'
    },
    { 
      img: 'https://images.unsplash.com/photo-1517438476312-10d79c077509?w=600', 
      title: 'Deportivo', 
      tech: 'HTML/CSS/JS',
      link: 'https://temporizador-de-ejercicios.vercel.app'
    },
    { 
      img: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600', 
      title: 'Buscador de Películas', 
      tech: 'React/Vite/API',
      link: 'https://buscador-de-peliculas-amber.vercel.app'
    },
    { 
      img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600', 
      title: 'PONG Game', 
      tech: 'HTML/CSS/JS',
      link: 'https://juego-pong-con-chatgpt-x9sqryo00-mianlos-projects.vercel.app'
    },
    { 
      img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600', 
      title: 'Peluquería Canina', 
      tech: 'Java Swing',
      link: 'https://github.com/Mianlo2386/PeluqueriaCaninaTodoCode'
    },
  ];

  return (
    <section id="portfolio" className="portfolio-section">
      <p className="section-label">{t.title}</p>
      <h2><strong>{t.subtitle}</strong></h2>

      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <a 
            key={index} 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="portfolio-item"
          >
            <img src={project.img} alt={project.title} />
            <div className="portfolio-overlay">
              <i className="bi bi-link-45deg"></i>
              <h3>{project.title}</h3>
              <p>{project.tech}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;