import React, { useState } from "react";
import styles from "./landing.module.css"; // Import du fichier CSS module
import { GiHamburgerMenu } from 'react-icons/gi'; // Import de l'icône Hamburger


const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="bg-charcoal-gradient min-h-screen text-white relative overflow-hidden">
      {/* Navbar */}
      <header className="flex justify-between items-center px-6 py-4 bg-black bg-opacity-90 fixed top-0 w-full z-50">
      <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F0E4B6] via-[#D5B983] via-[#B38A53] to-[#6C3D11]">
        Dar Ghdira
      </h1>
      <nav className="hidden md:flex space-x-4">
        <a href="#hero" className="text-gray-400 hover:text-[#D5B983]">Home</a>
        <a href="#features" className="text-gray-400 hover:text-[#D5B983]">Features</a>
        <a href="#contact" className="text-gray-400 hover:text-[#D5B983]">Contact</a>
      </nav>
      {/* Menu Hamburger Icon */}
      <div className="md:hidden flex items-center" onClick={toggleMenu}>
        <GiHamburgerMenu size={30} className="text-white" />
      </div>
      {/* Fullscreen Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-black bg-opacity-90 z-40 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}
      >
        <div className="flex justify-end p-6">
          <div className="text-white text-3xl cursor-pointer" onClick={toggleMenu}>
            &times;
          </div>
        </div>
        <nav className="flex flex-col items-center space-y-6">
          <a href="#hero" className="text-white text-2xl" onClick={toggleMenu}>Home</a>
          <a href="#features" className="text-white text-2xl" onClick={toggleMenu}>Features</a>
          <a href="#contact" className="text-white text-2xl" onClick={toggleMenu}>Contact</a>
        </nav>
      </div>
    </header>
  
      {/* Hero Section */}
      <section
        id="hero"
        className="flex flex-col justify-center items-center bg-[#000000c1] h-screen text-center px-4 pt-16"
      >
        {/* Slider */}
        <div className="relative w-full max-w-6xl h-64 md:h-96 overflow-hidden mb-6">
  {/* Slide 1 (Vidéo) */}
  <div className={`absolute inset-0 ${styles.slider}`}>
    <video
      src="/cover/logo.mp4" // Lien vers ta vidéo
      className="w-full h-full object-cover"
      autoPlay
      loop
      muted
    />
  </div>

  {/* Slide 2 (Image) */}
  <div className={`absolute inset-0 ${styles.slider} ${styles.sliderDelay500}`}>
    <img
      src="/images/photo-2.jpg"
      alt="Slide 2"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Slide 3 (Image) */}
  <div className={`absolute inset-0 ${styles.slider} ${styles.sliderDelay1000}`}>
    <img
      src="/images/photo-3.jpg"
      alt="Slide 3"
      className="w-full h-full object-cover"
    />
  </div>
</div>


        {/* Text */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FCD895] via-[#5F4421] via-[#54391C] to-[#8B6331] mb-4">
  Bienvenue chez Dar Ghdira
</h1>
<p className="text-gray-400 max-w-xl mx-auto mb-6">
  Créez le mariage de vos rêves avec notre expertise et notre passion. Nous vous accompagnons à chaque étape pour faire de votre grand jour un événement inoubliable.
</p>
<button className="px-8 py-3 bg-gradient-to-r from-[#FCD895] via-[#5F4421] via-[#54391C] to-[#8B6331] font-bold rounded-lg shadow-lg hover:scale-105 transition">
  Commencez l'aventure
</button>
      </section>

      {/* Gold Animation */}
      <div
        className="absolute bottom-0 right-0 opacity-60"
        style={{ width: "200px", height: "200px", backgroundImage: "url('/gold-animated.svg')" }}
      ></div>
    </div>
  

  );
};

export default LandingPage;
