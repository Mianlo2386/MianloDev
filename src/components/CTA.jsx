import './CTA.css';

const CTA = ({ lang }) => {
  const t = {
    es: { title: '¿Interesado en trabajar conmigo?', button: 'Contratame!' },
    en: { title: 'Interested in working with me?', button: 'Hire Me!' }
  };

  return (
    <section className="cta-section">
      <h1>{t[lang].title}</h1>
      <a href="#contacto" className="cta-button">{t[lang].button}</a>
    </section>
  );
};

export default CTA;