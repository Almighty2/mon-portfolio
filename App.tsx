import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Tech from './components/Tech';
import Projects from './components/Projects';
import Feedbacks from './components/Feedbacks';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      
      <About />
      <Experience />
      <Tech />
      <Projects />
      
      <div className="relative z-0">
        <Contact />
      </div>

      <Footer />
    </div>
  );
};

export default App;
