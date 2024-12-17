
import './App.css'
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar'

import Footer from './components/Footer'
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
// import PortfolioPage from './pages/PortfolioPage';
import Portfolio from './pages/Portfolio';
import ContactForm from './pages/ContactForm';

function App() {
 

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
