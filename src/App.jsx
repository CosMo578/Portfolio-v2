import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
// import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="selection:bg-primary selection:text-white bg-slate-800 text-white min-h-screen p-10 md:px-28 md:pt-24 md:pb-10">
      <Hero />
      <About />
      <Projects />
      {/* <Services /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
