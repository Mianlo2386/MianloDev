import { useState } from 'react';
import './Header.css';

const Header = ({ onThemeChange, currentTheme, onLanguageChange, currentLang }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const themes = ['blue', 'green', 'yellow'];
  const languages = ['es', 'en'];

  const toggleTheme = () => {
    const currentIndex = themes.indexOf(currentTheme);
    const nextTheme = themes[(currentIndex + 1) % themes.length];
    onThemeChange(nextTheme);
  };

  const toggleLanguage = () => {
    const currentIndex = languages.indexOf(currentLang);
    const nextLang = languages[(currentIndex + 1) % languages.length];
    onLanguageChange(nextLang);
  };

  const navItems = [
    { key: 'inicio', label: currentLang === 'es' ? 'INICIO' : 'HOME', href: '#inicio' },
    { key: 'conoceme', label: currentLang === 'es' ? 'CONOCEME' : 'ABOUT', href: '#conoceme' },
    { key: 'servicios', label: currentLang === 'es' ? 'SERVICIOS' : 'SERVICES', href: '#servicios' },
    { key: 'resumen', label: currentLang === 'es' ? 'RESUMEN' : 'RESUME', href: '#resumen' },
    { key: 'portfolio', label: currentLang === 'es' ? 'PORTFOLIO' : 'PORTFOLIO', href: '#portfolio' },
    { key: 'contacto', label: currentLang === 'es' ? 'CONTACTO' : 'CONTACT', href: '#contacto' },
  ];

  return (
    <header className="header">
      <h3 className="logo">MIGUEL LOPEZ</h3>
      
      <div className="header-actions">
        <button className="icon-btn" onClick={toggleTheme} title="Cambiar tema">
          <i className="bi bi-palette"></i>
        </button>
        <button className="icon-btn" onClick={toggleLanguage} title="Cambiar idioma">
          <i className="bi bi-translate"></i>
        </button>
      </div>

      <nav className="desktop-nav">
        {navItems.map(item => (
          <a key={item.key} href={item.href}>{item.label}</a>
        ))}
      </nav>

      <button className="hamburguesa" onClick={() => setMenuOpen(!menuOpen)}>
        <i className="bi bi-list"></i>
      </button>

      {menuOpen && (
        <nav className="mobile-nav">
          <button className="close-btn" onClick={() => setMenuOpen(false)}>
            {currentLang === 'es' ? 'CERRAR' : 'CLOSE'} <i className="bi bi-x-lg"></i>
          </button>
          {navItems.map(item => (
            <a key={item.key} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <div className="mobile-actions">
            <button className="icon-btn" onClick={toggleTheme}><i className="bi bi-palette"></i></button>
            <button className="icon-btn" onClick={toggleLanguage}><i className="bi bi-translate"></i></button>
          </div>
          <div className="social-links">
            <a href="https://github.com/Mianlo2386" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/miguel-lopez-206740205/" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://twitter.com/Leugimzepol" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-twitter"></i>
            </a>
          </div>
        </nav>
      )}

      <div className="desktop-social">
        <a href="https://github.com/Mianlo2386" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/miguel-lopez-206740205/" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-linkedin"></i>
        </a>
        <a href="https://twitter.com/Leugimzepol" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-twitter"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;