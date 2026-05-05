import './Skills.css';

const Skills = ({ lang }) => {
  const content = {
    es: {
      title: 'Mis habilidades',
      skills: [
        { name: 'HTML/CSS', percent: 90 },
        { name: 'JavaScript', percent: 85 },
        { name: 'React', percent: 70 },
        { name: 'Node JS', percent: 75 },
        { name: 'Java', percent: 95 },
        { name: 'Android Studio/APK', percent: 80 },
        { name: 'GitHub Copilot', percent: 90 },
        { name: 'MongoDB/SQL', percent: 86 },
      ]
    },
    en: {
      title: 'My Skills',
      skills: [
        { name: 'HTML/CSS', percent: 90 },
        { name: 'JavaScript', percent: 85 },
        { name: 'React', percent: 70 },
        { name: 'Node JS', percent: 75 },
        { name: 'Java', percent: 95 },
        { name: 'Android Studio/APK', percent: 80 },
        { name: 'GitHub Copilot', percent: 90 },
        { name: 'MongoDB/SQL', percent: 86 },
      ]
    }
  };

  const t = content[lang];
  const mid = Math.ceil(t.skills.length / 2);
  const leftSkills = t.skills.slice(0, mid);
  const rightSkills = t.skills.slice(mid);

  return (
    <section className="skills-section">
      <h2>{t.title}</h2>
      
      <div className="skills-grid">
        <div className="skills-column">
          {leftSkills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percent">{skill.percent}%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: `${skill.percent}%` }}></div>
              </div>
            </div>
          ))}
        </div>

        <div className="skills-column">
          {rightSkills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percent">{skill.percent}%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: `${skill.percent}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="cv-button">
        <a href="/CV-new.pdf" download>{lang === 'es' ? 'DESCARGAR CV' : 'DOWNLOAD CV'}</a>
      </button>
    </section>
  );
};

export default Skills;
