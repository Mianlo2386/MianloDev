import './Services.css';

const Services = ({ lang }) => {
  const content = {
    es: {
      title: 'Qué puedo hacer?',
      subtitle: 'Cómo puedo ayudarte en tu próximo proyecto',
      services: [
        { icon: 'bi-palette', title: 'Diseño gráfico', desc: 'Creo tus páginas con un diseño atractivo, pero a la vez sencillo para lograr la mejor primera impresión.' },
        { icon: 'bi-code-slash', title: 'Desarrollo web', desc: 'Desarrollando constantemente para satisfacer tus necesidades y las de tus clientes.' },
        { icon: 'bi-display', title: 'Diseño web', desc: 'Acompaño al diseño gráfico con las últimas funcionalidades para que tu página sea completa.' },
        { icon: 'bi-stars', title: 'IA como herramienta', desc: 'Utilizo herramientas de IA como Copilot y agentes para acelerar el desarrollo manteniendo calidad.' },
        { icon: 'bi-megaphone', title: 'Copywriting', desc: 'Construyo textos persuasivos para acciones de marketing y ventas que hacen crecer tu negocio.' },
        { icon: 'bi-graph-up', title: 'Inversiones', desc: 'Te ayudo a dar tus primeros pasos en el mundo de las inversiones financieras.' },
      ]
    },
    en: {
      title: 'What can I do?',
      subtitle: 'How I can help with your next project',
      services: [
        { icon: 'bi-palette', title: 'Graphic Design', desc: 'I create attractive yet simple webpages to make the best first impression on your customers.' },
        { icon: 'bi-code-slash', title: 'Web Development', desc: 'Constantly developing to satisfy your needs and your customers\' needs.' },
        { icon: 'bi-display', title: 'Web Design', desc: 'I complement graphic design with the latest features to make your page complete.' },
        { icon: 'bi-stars', title: 'AI as a tool', desc: 'I use AI tools like Copilot and agents to accelerate development while maintaining quality.' },
        { icon: 'bi-megaphone', title: 'Copywriting', desc: 'I build persuasive texts for marketing and sales actions that grow your business.' },
        { icon: 'bi-graph-up', title: 'Investments', desc: 'I help you take your first steps in the world of financial investments.' },
      ]
    }
  };

  const t = content[lang];

  return (
    <section id="servicios" className="services-section">
      <p className="section-label">{t.title}</p>
      <h2><strong>{t.subtitle}</strong></h2>

      <div className="services-grid">
        {t.services.map((service, index) => (
          <div key={index} className="service-card">
            <i className={`bi ${service.icon}`}></i>
            <h3><strong>{service.title}</strong></h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;