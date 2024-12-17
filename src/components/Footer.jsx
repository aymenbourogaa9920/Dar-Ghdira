import React from 'react';
import { FaFacebookF,  FaInstagram, FaTiktok } from 'react-icons/fa';
import { useSpring, animated } from '@react-spring/web';

const Footer = () => {
  // Animation du footer avec effet d'apparition et de mouvement
  const footerAnimation = useSpring({
    opacity: 1,
    transform: 'translateY(0px)', 
    from: { opacity: 0, transform: 'translateY(50px)' },
    config: { tension: 180, friction: 30 },
  });

  return (
    <animated.footer style={footerAnimation} className="bg-black text-white py-12 mt-16">
      <div className="container mx-auto text-center">
        {/* Message de Clôture */}
        <p className="text-xl md:text-2xl mb-6">Merci de visiter notre site !</p>

        {/* Liens vers les Réseaux Sociaux */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-yellow-500 transition duration-300"
          >
            <FaFacebookF />
          </a>
         
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-yellow-500 transition duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-yellow-500 transition duration-300"
          >
            <FaTiktok />
          </a>
        </div>

        {/* Liens supplémentaires */}
        <div className="space-y-2">
          <p className="text-sm md:text-base text-gray-400">© 2024 Votre Nom ou Entreprise. Tous droits réservés.</p>
          <p className="text-sm md:text-base text-gray-400">
            <a href="/privacy-policy" className="hover:text-yellow-500 transition duration-300">Politique de confidentialité</a> | 
            <a href="/terms-of-service" className="hover:text-yellow-500 transition duration-300"> Conditions d'utilisation</a>
          </p>
        </div>
      </div>
    </animated.footer>
  );
};

export default Footer;
