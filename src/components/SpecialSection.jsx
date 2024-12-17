import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { FaRegCalendarAlt, FaPaintBrush, FaHandshake } from "react-icons/fa";

export default function SpecialSection() {
  // Animation pour chaque carte
  const fadeInAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 800 },
  });

  return (
    <section className="py-16 bg-black text-white">
      {/* Titre de la section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 animate-fadeIn">
          Nos <span className="text-gold">Services</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Découvrez nos services spécialisés pour vous offrir une expérience
          événementielle inoubliable.
        </p>
      </div>

      {/* Contenu des services */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12">
        {/* Carte 1 */}
        <animated.div
          style={fadeInAnimation}
          className="bg-black bg-opacity-50 p-6 rounded-lg text-center shadow-lg hover:scale-110 transform hover:rotate-3d hover:shadow-2xl transition duration-500"
        >
          <FaRegCalendarAlt className="text-gold text-5xl mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Organisation d'Événements</h3>
          <p className="text-gray-300">
            Planification complète pour tous vos événements : mariages, fêtes,
            conférences, etc.
          </p>
        </animated.div>

        {/* Carte 2 */}
        <animated.div
          style={fadeInAnimation}
          className="bg-black bg-opacity-50 p-6 rounded-lg text-center shadow-lg hover:scale-110 transform hover:rotate-3d hover:shadow-2xl transition duration-500"
        >
          <FaPaintBrush className="text-gold text-5xl mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Décoration</h3>
          <p className="text-gray-300">
            Création de décors uniques pour sublimer vos événements et leur donner un charme exceptionnel.
          </p>
        </animated.div>

        {/* Carte 3 */}
        <animated.div
          style={fadeInAnimation}
          className="bg-black bg-opacity-50 p-6 rounded-lg text-center shadow-lg hover:scale-110 transform hover:rotate-3d hover:shadow-2xl transition duration-500"
        >
          <FaHandshake className="text-gold text-5xl mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Services Personnalisés</h3>
          <p className="text-gray-300">
            Des solutions adaptées à vos besoins, conçues spécialement pour vous satisfaire.
          </p>
        </animated.div>
      </div>
    </section>
  );
}
