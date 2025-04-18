import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {});
  return (
    <div className='selection:bg-primary selection:text-white bg-slate-800 text-white min-h-screen p-10 md:px-28 md:pt-24 md:pb-10 overflow-x-hidden max-w-[100vw]'>
      <Hero />
      <About />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
