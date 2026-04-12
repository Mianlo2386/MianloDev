import './Resume.css';

const Resume = ({ lang }) => {
  const content = {
    es: {
      title: 'Resumen',
      subtitle: 'Un resumen de mi currículum',
      education: 'Mi educación',
      experience: 'Mi experiencia',
      items: [
        { type: 'education', title: 'Programación Web en UTN', period: 'UTN Argentina / 2022 - 2023', desc: 'Diplomatura en HTML, CSS, React, JavaScript, Github, Bootstrap y programación orientada a objetos.' },
        { type: 'education', title: 'Inversor Profesional de Mercados', period: 'ICB Argentina / 2019 - 2020', desc: 'Estudios intensivos de operaciones en mercados tanto para inversores moderados o arriesgados.' },
        { type: 'education', title: 'Ingeniería en Informática', period: 'UNLAM / 2000 - 2003', desc: 'Conocimientos en C++ el lenguaje híbrido con orientación a objetos.' },
        { type: 'experience', title: 'Proyectos de Venta Personal', period: '2022 - Actualidad', desc: 'Atención de proyectos personales de venta de productos diversos con gestión de clientes y logística.' },
        { type: 'experience', title: 'Merchant para Unilever de A.S.A.', period: 'Unilever de A.S.A. / 1999 - 2020', desc: 'Más de 20 años de experiencia en cadenas de hipermercados, supermercados y sus diversos clusters.' },
        { type: 'experience', title: 'Administrativo Clusters para Unilever', period: 'Unilever de A.S.A. / 2002 - 2003', desc: 'Trabajo intensivo en diseño de frentes de góndolas para cualquier segmento.' },
      ]
    },
    en: {
      title: 'Resume',
      subtitle: 'A summary of my curriculum',
      education: 'My Education',
      experience: 'My Experience',
      items: [
        { type: 'education', title: 'Web Programming at UTN', period: 'UTN Argentina / 2022 - 2023', desc: 'Diploma in HTML, CSS, React, JavaScript, Github, Bootstrap and object-oriented programming.' },
        { type: 'education', title: 'Professional Market Investor', period: 'ICB Argentina / 2019 - 2020', desc: 'Intensive studies of market operations for both moderate or risky investors.' },
        { type: 'education', title: 'Computer Engineering', period: 'UNLAM / 2000 - 2003', desc: 'Knowledge in C++ the hybrid language with object orientation.' },
        { type: 'experience', title: 'Personal Sales Projects', period: '2022 - Present', desc: 'Management of personal product sales projects with client and logistics management.' },
        { type: 'experience', title: 'Merchant for Unilever A.S.A.', period: 'Unilever de A.S.A. / 1999 - 2020', desc: 'More than 20 years of experience in hypermarkets, supermarkets and their various clusters.' },
        { type: 'experience', title: 'Cluster Admin for Unilever', period: 'Unilever de A.S.A. / 2002 - 2003', desc: 'Intensive work in gondola front design for any segment.' },
      ]
    }
  };

  const t = content[lang];

  const educationItems = t.items.filter(item => item.type === 'education');
  const experienceItems = t.items.filter(item => item.type === 'experience');

  return (
    <section id="resumen" className="resume-section">
      <p className="section-label">{t.title}</p>
      <h2><strong>{t.subtitle}</strong></h2>

      <div className="resume-grid">
        <div className="resume-column">
          <h3>{t.education}</h3>
          {educationItems.map((item, index) => (
            <div key={index} className="resume-item">
              <h4>{item.title}</h4>
              <h5>{item.period}</h5>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="resume-column">
          <h3>{t.experience}</h3>
          {experienceItems.map((index, key) => (
            <div key={key} className="resume-item">
              <h4>{experienceItems[key].title}</h4>
              <h5>{experienceItems[key].period}</h5>
              <p>{experienceItems[key].desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;