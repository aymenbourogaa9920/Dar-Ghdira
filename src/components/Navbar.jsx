import { useState } from 'react'
import { useSpring, animated } from '@react-spring/web'
import { FaBars, FaTimes } from 'react-icons/fa' // Import des icônes burger et croix
import logo from '/logo.png' // Assure-toi que le chemin est correct

export default function Navbar () {
  // État pour ouvrir/fermer le menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Animation du logo
  const logoAnimation = useSpring({
    from: { opacity: 0, transform: 'scale(0.5)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { duration: 800 }
  })

  // Animation pour le menu mobile
  const menuAnimation = useSpring({
    transform: isMenuOpen ? 'translateX(0%)' : 'translateX(100%)',
    opacity: isMenuOpen ? 1 : 0
  })

  return (
    // className="navbar h-16 bg-white fixed top-0 left-0 w-full z-10 shadow-md"
    <nav className='fixed top-0 left-0 w-full bg-beige bg-opacity-90 z-50 shadow-md mb-50'>
      <div className='container mx-auto px-4 py-3 flex items-center justify-between'>
        {/* Logo animé */}
        <animated.div style={logoAnimation}>
          <a href='/'>
            <img
              src={logo}
              alt='Event Planner Logo'
              className='w-20 h-20 md:w-24 md:h-24 object-contain cursor-pointer'
            />
          </a>
        </animated.div>

        {/* Menu Desktop */}
        <ul className='hidden md:flex space-x-8 text-charcoal'>
          <li>
            <a href='/' className='hover:text-gold transition duration-300'>
              Accueil
            </a>
          </li>
          <li>
            <a
              href='#'
              className='hover:text-gold transition duration-300'
            >
              À propos
            </a>
          </li>
          <li>
            <a
              href='#'
              className='hover:text-gold transition duration-300'
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href='#'
              className='hover:text-gold transition duration-300'
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Bouton Menu Burger pour Mobile */}
        <div className='md:hidden z-50'>
          <button
            className='text-gold focus:outline-none'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <FaTimes className='w-8 h-8 text-gold' />
            ) : (
              <FaBars className='w-8 h-8 text-gold' />
            )}
          </button>
        </div>
      </div>

      {/* Menu Mobile Animé */}
      <animated.div
        style={menuAnimation}
        className='md:hidden fixed top-0 right-0 w-2/3 h-full bg-black bg-opacity-95 text-white flex flex-col items-center justify-center space-y-8 shadow-xl'
      >
        <a
          href='/'
          className='text-xl font-semibold text-light hover:text-gold transition duration-300'
          onClick={() => setIsMenuOpen(false)}
        >
          Accueil
        </a>
        <a
          href='#'
          className='text-xl font-semibold text-light hover:text-gold transition duration-300'
          onClick={() => setIsMenuOpen(false)}
        >
          À propos
        </a>
        <a
          href='#'
          className='text-xl font-semibold text-light hover:text-gold transition duration-300'
          onClick={() => setIsMenuOpen(false)}
        >
          Portfolio
        </a>
        <a
          href='#'
          className='text-xl font-semibold text-light hover:text-gold transition duration-300'
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </a>
      </animated.div>
    </nav>
  )
}
