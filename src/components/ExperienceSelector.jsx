import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { FaMagic, FaMusic, FaCamera, FaBullhorn } from 'react-icons/fa';

const experiences = [
  {
    title: 'Événements Magiques',
    description: 'Plongez dans un monde de magie et d\'illusion pour vos événements.',
    icon: <FaMagic size={50} className="text-white" />,
  },
  {
    title: 'Concerts en Direct',
    description: 'Vivez des concerts en live avec des artistes exceptionnels.',
    icon: <FaMusic size={50} className="text-white" />,
  },
  {
    title: 'Photographie Pro',
    description: 'Immortalisez vos moments spéciaux avec nos photographes experts.',
    icon: <FaCamera size={50} className="text-white" />,
  },
  {
    title: 'Conférences et Ateliers',
    description: 'Participez à des conférences inspirantes et des ateliers interactifs.',
    icon: <FaBullhorn size={50} className="text-white" />,
  },
];

const ExperienceCard = ({ experience }) => {
  // Animation 3D de la carte au survol
  const cardHover = useSpring({
    transform: 'perspective(1200px) translateZ(20px)', // Effet de translation pour un rendu en 3D
    boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.6)', // Ombre accentuée pour un effet de profondeur
    config: { tension: 200, friction: 30 },
  });

  return (
    <animated.div
      style={cardHover}
      className="relative bg-black text-white rounded-lg p-8 transform transition duration-300 hover:bg-gray-900 hover:scale-105 flex flex-col justify-between"
    >
      <div className="flex justify-center mb-4">
        {experience.icon}
      </div>
      <h3 className="text-2xl font-semibold mb-2">{experience.title}</h3>
      <p className="text-sm mb-4 flex-grow">{experience.description}</p>
      
      {/* Container pour le bouton centré et aligné */}
      <div className="flex justify-center mt-4">
        <button className="bg-yellow-500 text-black py-2 px-6 rounded-full hover:bg-yellow-600 transition-all duration-300 transform hover:scale-110">
          Découvrir
        </button>
      </div>
    </animated.div>
  );
};

export default function ExperienceSelector() {
  return (
    <section className="py-16 bg-black text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
        Choisissez votre expérience
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-12">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </div>
    </section>
  );
}
