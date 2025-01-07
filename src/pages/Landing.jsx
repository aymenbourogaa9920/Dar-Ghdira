
import React, { useState } from 'react'
import styles from './Landing.module.css' // Import du fichier CSS module
import { GiHamburgerMenu } from 'react-icons/gi' // Import de l'icône Hamburger
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';


const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className='bg-charcoal-gradient min-h-screen text-white relative overflow-hidden'>
      {/* Navbar */}
      <header className='flex justify-between items-center px-6 py-4 bg-black bg-opacity-90 fixed top-0 w-full z-50'>
        <h1 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold-medium to-gold-deep'>
          Dar Ghdira
        </h1>
        <nav className='hidden md:flex space-x-4'>
          <a href='#hero' className='text-text-gray hover:text-text-highlight'>
            Home
          </a>
          <a
            href='#features'
            className='text-text-gray hover:text-text-highlight'
          >
            Features
          </a>
          <a
            href='#contact'
            className='text-text-gray hover:text-text-highlight'
          >
            Contact
          </a>
        </nav>
        {/* Menu Hamburger Icon */}
        <div className='md:hidden flex items-center' onClick={toggleMenu}>
          <GiHamburgerMenu size={30} className='text-gold-light' />
        </div>
        {/* Fullscreen Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 bg-black bg-opacity-90 z-40 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            } transition-transform duration-300`}
        >
          <div className='flex justify-end p-6'>
            <div
              className='text-gold-light text-3xl cursor-pointer'
              onClick={toggleMenu}
            >
              &times;
            </div>
          </div>
          <nav className='flex flex-col items-center space-y-6'>
            <a
              href='#hero'
              className='text-white text-2xl'
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href='#features'
              className='text-white text-2xl'
              onClick={toggleMenu}
            >
              Features
            </a>
            <a
              href='#contact'
              className='text-white text-2xl'
              onClick={toggleMenu}
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="flex flex-col justify-center items-center bg-charcoal-gradient h-screen text-center px-4 pt-16 relative"
      >
        {/* Slider */}
        <div className="relative w-full max-w-full h-80 md:h-96 overflow-hidden mb-4 rounded-b-[200px]">
          {/* Slide 1 (Vidéo) */}
          <div className={`absolute inset-0 ${styles.slider}`}>
            <video
              src="/cover/logo.mp4"
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
        <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold-medium to-gold-deep mb-4">
          Bienvenue chez Dar Ghdira
        </h1>
        <p className="text-text-gray max-w-xl mx-auto mb-6">
          Créez le mariage de vos rêves avec notre expertise et notre passion.
          Nous vous accompagnons à chaque étape pour faire de votre grand jour
          un événement inoubliable.
        </p>

        {/* Button and Social Icons */}
        <div className="flex items-center justify-center space-x-10">
          {/* Left Social Icons */}
          <div className="flex space-x-6 text-white">
            <a
              href="https://www.facebook.com/DarGhdira"
              className="text-2xl hover:text-gold-light transition-all transform hover:scale-110"
            >
              <FaFacebookF />
            </a>

          </div>

          {/* Button */}
          <button
            className={`${styles.button}`}
            onClick={() => window.location.href = "https://wa.me/22914212?text=Bonjour,%20je%20suis%20intéressé%20par%20votre%20service%20et%20j'aimerais%20en%20savoir%20plus."}
          >
            Commencez l'aventure
          </button>

          {/* Right Social Icons */}
          <div className="flex space-x-6 text-white">
            <a
              href="https://www.instagram.com/dar_ghdira_event?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              className="text-2xl hover:text-gold-light transition-all transform hover:scale-110"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </section>

      {/* Gold Animation */}
      <div
        className='absolute bottom-0 right-0 opacity-60'
        style={{
          width: '200px',
          height: '200px',
          backgroundImage: "url('/gold-animated.svg')"
        }}
      ></div>
    </div>
  )
}

export default LandingPage
