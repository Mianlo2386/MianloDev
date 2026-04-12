import './Footer.css';

const Footer = ({ lang }) => {
  const t = {
    es: { copyright: 'Copyright © 2023', name: 'Mianlo', rights: '. Todos los derechos reservados.', designed: 'Diseñado por Mianlo2386.' },
    en: { copyright: 'Copyright © 2023', name: 'Mianlo', rights: '. All rights reserved.', designed: 'Designed by Mianlo2386.' }
  };

  return (
    <footer className="footer">
      <h3><strong>{t[lang].copyright} <a href="#inicio">{t[lang].name}</a>{t[lang].rights}</strong></h3>
      <h3><strong>{t[lang].designed}</strong></h3>
    </footer>
  );
};

export default Footer;