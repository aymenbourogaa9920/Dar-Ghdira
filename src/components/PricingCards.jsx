import React from "react";
import { FaRegCalendarAlt, FaStar, FaPaintBrush } from "react-icons/fa";
import { useSpring, animated } from "@react-spring/web";

export default function PricingCards() {
  // Animation des cartes de tarification avec effet 3D
  const hoverAnimation = useSpring({
    transform: "scale(1.05)",
    boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.3)",
    borderRadius: "10px",
    config: { friction: 20, tension: 200 },
  });

  return (
    <section className="py-16 bg-beige text-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gold">
          Nos Forfaits Tarifs
        </h2>
        <p className="text-charcoal max-w-2xl mx-auto">
          Choisissez un forfait adapté à vos besoins et à votre événement.
        </p>
      </div>

      {/* Grille des cartes de tarification */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12 justify-items-center">
        {/* Carte 1 */}
        <animated.div
          style={hoverAnimation}
          className="bg-black bg-opacity-60 p-8 rounded-lg shadow-xl transform transition duration-300 hover:scale-105 relative flex flex-col justify-between"
        >
          <div className="flex justify-center mb-4">
            <FaRegCalendarAlt className="text-gold text-5xl" />
          </div>
          <h3 className="text-2xl font-semibold mb-2">Forfait Standard</h3>
          <p className="text-gray-300 mb-4 flex-grow">Organisation d'événements de taille modeste.</p>
          <div className="flex justify-center mb-4">
            <span className="text-4xl font-bold text-gold">$199</span>
            <span className="text-gray-300"> / événement</span>
          </div>
          <ul className="text-gray-300 mb-6">
            <li>Planification de base</li>
            <li>Support limité</li>
            <li>Réunion de consultation</li>
          </ul>
          <div className="flex justify-center mt-auto">
            <button className="w-full bg-gold text-black py-2 rounded-lg font-semibold hover:bg-opacity-80 transition duration-300">
              Choisir ce forfait
            </button>
          </div>
          <div className="absolute inset-0 border-4 border-gold rounded-lg pointer-events-none"></div>
        </animated.div>

        {/* Carte 2 */}
        <animated.div
          style={hoverAnimation}
          className="bg-black bg-opacity-60 p-8 rounded-lg shadow-xl transform transition duration-300 hover:scale-105 relative flex flex-col justify-between"
        >
          <div className="flex justify-center mb-4">
            <FaStar className="text-gold text-5xl" />
          </div>
          <h3 className="text-2xl font-semibold mb-2">Forfait Premium</h3>
          <p className="text-gray-300 mb-4 flex-grow">Pour des événements de plus grande envergure avec plus d'options.</p>
          <div className="flex justify-center mb-4">
            <span className="text-4xl font-bold text-gold">$499</span>
            <span className="text-gray-300"> / événement</span>
          </div>
          <ul className="text-gray-300 mb-6">
            <li>Planification complète</li>
            <li>Support prioritaire</li>
            <li>Consultation illimitée</li>
            <li>Décoration personnalisée</li>
          </ul>
          <div className="flex justify-center mt-auto">
            <button className="w-full bg-gold text-black py-2 rounded-lg font-semibold hover:bg-opacity-80 transition duration-300">
              Choisir ce forfait
            </button>
          </div>
          <div className="absolute inset-0 border-4 border-gold rounded-lg pointer-events-none"></div>
        </animated.div>

        {/* Carte 3 */}
        <animated.div
          style={hoverAnimation}
          className="bg-black bg-opacity-60 p-8 rounded-lg shadow-xl transform transition duration-300 hover:scale-105 relative flex flex-col justify-between"
        >
          <div className="flex justify-center mb-4">
            <FaPaintBrush className="text-gold text-5xl" />
          </div>
          <h3 className="text-2xl font-semibold mb-2">Forfait Luxe</h3>
          <p className="text-gray-300 mb-4 flex-grow">Le forfait haut de gamme pour des événements exceptionnels.</p>
          <div className="flex justify-center mb-4">
            <span className="text-4xl font-bold text-gold">$999</span>
            <span className="text-gray-300"> / événement</span>
          </div>
          <ul className="text-gray-300 mb-6">
            <li>Planification sur mesure</li>
            <li>Assistance 24/7</li>
            <li>Service de décoration haut de gamme</li>
            <li>Consultation avec des experts</li>
            <li>Événements exclusifs</li>
          </ul>
          <div className="flex justify-center mt-auto">
            <button className="w-full bg-gold text-black py-2 rounded-lg font-semibold hover:bg-opacity-80 transition duration-300">
              Choisir ce forfait
            </button>
          </div>
          <div className="absolute inset-0 border-4 border-gold rounded-lg pointer-events-none"></div>
        </animated.div>
      </div>
    </section>
  );
}
