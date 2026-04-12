import './Contact.css';

const Contact = ({ lang }) => {
  const content = {
    es: {
      title: 'Mantengámonos en contacto.',
      desc: 'Disfruto discutir nuevos proyectos y desafíos de diseño. Comparta conmigo tanta información como sea posible para que podamos aprovechar al máximo nuestra primera puesta al día.',
      locationLabel: 'Viviendo en:',
      locationValue: 'Vicente López, Buenos Aires',
      whatsappLabel: 'Contáctame:',
      formTitle: '¿Interesado en tu proyecto?',
      nameLabel: '¿Cuál es tu nombre?',
      emailLabel: 'Dirección de email:',
      messageLabel: '¿En qué puedo ayudarte?',
      send: 'Enviar'
    },
    en: {
      title: "Let's stay in touch.",
      desc: "I enjoy discussing new projects and design challenges. Share as much information as possible so we can make the most of our first catch-up.",
      locationLabel: 'Based in:',
      locationValue: 'Vicente López, Buenos Aires',
      whatsappLabel: 'Contact:',
      formTitle: 'Interested in your project?',
      nameLabel: "What's your name?",
      emailLabel: 'Email address:',
      messageLabel: 'How can I help you?',
      send: 'Send'
    }
  };

  const t = content[lang];

  return (
    <section id="contacto" className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h1>{t.title}</h1>
          <p className="contact-desc">{t.desc}</p>
          
          <div className="contact-detail">
            <strong>{t.locationLabel}</strong>
            <p>{t.locationValue}</p>
          </div>
          
          <div className="contact-detail">
            <strong>{t.whatsappLabel}</strong>
            <a href="https://wa.me/541166073505" target="_blank" rel="noopener noreferrer" className="whatsapp-link">
              <i className="bi bi-whatsapp"></i>
            </a>
          </div>

          <div className="social-links">
            <a href="https://linkedin.com/in/miguel-lopez-206740205" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://twitter.com/Leugimzepol" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="https://github.com/Mianlo2386" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github"></i>
            </a>
          </div>
        </div>

        <div className="contact-form">
          <h1>{t.formTitle}</h1>
          <form action="https://formspree.io/f/mbjepzer" method="POST">
            <label>{t.nameLabel}</label>
            <input type="text" name="nombre" required />
            
            <label>{t.emailLabel}</label>
            <input type="email" name="email" required />
            
            <label>{t.messageLabel}</label>
            <textarea name="mensaje" required></textarea>
            
            <button type="submit">{t.send} <i className="bi bi-arrow-right"></i></button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;