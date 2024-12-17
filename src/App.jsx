
import './App.css'
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar'

import Footer from './components/Footer'
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
// import PortfolioPage from './pages/PortfolioPage';
import Portfolio from './pages/Portfolio';
import ContactForm from './pages/ContactForm';
import { useEffect } from 'react';
import backgroundAudio from './assets/audio/sayari dar ghdira_01.wav'

function App() {
  
  useEffect(() => {
    // Vérifier si l'audio a déjà été joué en localStorage
    const hasPlayedAudio = localStorage.getItem('hasPlayedAudio');

    if (!hasPlayedAudio) {
      const audio = new Audio(backgroundAudio);
      audio.play().catch((err) => console.error("Audio playback error:", err));
      
      // Marquer l'audio comme joué
      localStorage.setItem('hasPlayedAudio', 'true');
    }
  }, []);

  return (
    <>
    <Navbar />
    <Routes>
      {/* Route d'accueil */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<ContactForm />} />
    </Routes>
  
    <Footer />
  </>
  )
}

export default App
