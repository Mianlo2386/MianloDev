import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('blue');
  const [lang, setLang] = useState('es');

  return (
    <div className="app" data-theme={theme}>
      <Header 
        currentTheme={theme} 
        onThemeChange={setTheme}
        currentLang={lang}
        onLanguageChange={setLang}
      />
      <main>
        <Hero lang={lang} />
        <About lang={lang} />
        <Services lang={lang} />
        <Resume lang={lang} />
        <Skills lang={lang} />
        <Portfolio lang={lang} />
        <CTA lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}

export default App;