import React from 'react';
import { FaRegCalendarAlt, FaPalette, FaConciergeBell, FaCamera } from 'react-icons/fa';
import { useSpring, animated } from '@react-spring/web';

export default function EventFeatures() {
  // Animation pour chaque carte avec effet de "scaling", rotation 3D et inversion de couleurs
  const featureAnimation = useSpring({
    opacity: 1,
    transform: 'translateY(0px) rotateX(0deg) rotateY(0deg)',
    from: { opacity: 0, transform: 'translateY(100px) rotateX(45deg) rotateY(45deg)' },
    config: { friction: 50, tension: 250 },
  });

  return (
    <section className="py-16 bg-black text-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Nos Services d'Événementiel
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Découvrez nos services clés pour organiser des événements inoubliables. Chaque détail compte !
        </p>
      </div>

      {/* Grille des cartes de services */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-12 justify-items-center">
        {/* Carte 1: Planification d'événements */}
        <animated.div
          style={featureAnimation}
          className="bg-black bg-opacity-70 p-8 rounded-lg shadow-xl transform transition duration-300 hover:scale-105 relative hover:transform hover:rotate-x-12 hover:rotate-y-12 hover:shadow-2xl hover:bg-gold hover:text-black"
        >
          <div className="flex justify-center mb-4">
            <FaRegCalendarAlt className="text-gold text-5xl transition-transform duration-300 hover:scale-110 hover:text-black" />
          </div>
          <h3 className="text-2xl font-semibold mb-2 transition-colors duration-300 hover:text-black">Planification d'Événements</h3>
          <p className="text-gray-300 transition-colors duration-300 hover:text-black">
            Planification complète pour tous types d'événements : mariages, fêtes, conférences, et plus encore. 
            Nous nous occupons de tout !
          </p>
        </animated.div>

        {/* Carte 2: Décoration */}
        <animated.div
          style={featureAnimation}
          className="bg-black bg-opacity-70 p-8 rounded-lg shadow-xl transform transition duration-300 hover:scale-105 relative hover:transform hover:rotate-x-12 hover:rotate-y-12 hover:shadow-2xl hover:bg-gold hover:text-black"
        >
          <div className="flex justify-center mb-4">
            <FaPalette className="text-gold text-5xl transition-transform duration-300 hover:scale-110 hover:text-black" />
          </div>
          <h3 className="text-2xl font-semibold mb-2 transition-colors duration-300 hover:text-black">Décoration Personnalisée</h3>
          <p className="text-gray-300 transition-colors duration-300 hover:text-black">
            Décorations uniques adaptées à votre thème et à votre vision. Créez l'ambiance parfaite pour votre événement.
          </p>
        </animated.div>

        {/* Carte 3: Service de Traiteur */}
        <animated.div
          style={featureAnimation}
          className="bg-black bg-opacity-70 p-8 rounded-lg shadow-xl transform transition duration-300 hover:scale-105 relative hover:transform hover:rotate-x-12 hover:rotate-y-12 hover:shadow-2xl hover:bg-gold hover:text-black"
        >
          <div className="flex justify-center mb-4">
            <FaConciergeBell className="text-gold text-5xl transition-transform duration-300 hover:scale-110 hover:text-black" />
          </div>
          <h3 className="text-2xl font-semibold mb-2 transition-colors duration-300 hover:text-black">Service Traiteur</h3>
          <p className="text-gray-300 transition-colors duration-300 hover:text-black">
            Offrez à vos invités un repas délicieux avec notre service traiteur sur mesure, adapté à tous les goûts et régimes.
          </p>
        </animated.div>

        {/* Carte 4: Photographie et Vidéographie */}
        <animated.div
          style={featureAnimation}
          className="bg-black bg-opacity-70 p-8 rounded-lg shadow-xl transform transition duration-300 hover:scale-105 relative hover:transform hover:rotate-x-12 hover:rotate-y-12 hover:shadow-2xl hover:bg-gold hover:text-black"
        >
          <div className="flex justify-center mb-4">
            <FaCamera className="text-gold text-5xl transition-transform duration-300 hover:scale-110 hover:text-black" />
          </div>
          <h3 className="text-2xl font-semibold mb-2 transition-colors duration-300 hover:text-black">Photographie & Vidéographie</h3>
          <p className="text-gray-300 transition-colors duration-300 hover:text-black">
            Capturer chaque moment spécial grâce à nos services professionnels de photographie et vidéographie.
          </p>
        </animated.div>
      </div>
    </section>
  );
}
