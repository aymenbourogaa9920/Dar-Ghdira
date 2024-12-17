// AboutPage.jsx

import React from 'react';
import { FaUsers, FaBullhorn, FaCogs } from 'react-icons/fa';
import { useSpring, animated } from '@react-spring/web';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function AboutPage() {
  // Animation d'apparition de texte
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 300 });

  // Configuration pour le slider des partenaires
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-black text-white">

      {/* Section d'introduction avec animation */}
      <section className="py-16 px-6 text-center">
        <animated.h1 style={fadeIn} className="text-4xl md:text-5xl font-bold text-gold mb-4 mt-24">
          À Propos de Nous
        </animated.h1>
        <animated.p style={fadeIn} className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
          Nous créons des expériences inoubliables en organisant des événements qui marquent. Découvrez qui nous sommes et ce qui nous rend uniques.
        </animated.p>
      </section>

      {/* Section "Notre Mission" */}
      <section className="py-16 bg-black text-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gold mb-12">Notre Mission</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12">

          {/* Card 1 - Collaboration */}
          <div className="bg-black bg-opacity-70 p-8 rounded-lg shadow-xl text-center transform transition duration-300 hover:scale-105">
            <FaUsers className="text-gold text-6xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-2 text-white">Collaboration</h3>
            <p className="text-gray-300">Nous croyons en l'importance des partenariats solides pour créer des événements exceptionnels.</p>
          </div>

          {/* Card 2 - Innovation */}
          <div className="bg-black bg-opacity-70 p-8 rounded-lg shadow-xl text-center transform transition duration-300 hover:scale-105">
            <FaBullhorn className="text-gold text-6xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-2 text-white">Innovation</h3>
            <p className="text-gray-300">Nous innovons constamment pour offrir des expériences uniques à chaque événement.</p>
          </div>

          {/* Card 3 - Excellence */}
          <div className="bg-black bg-opacity-70 p-8 rounded-lg shadow-xl text-center transform transition duration-300 hover:scale-105">
            <FaCogs className="text-gold text-6xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-2 text-white">Excellence</h3>
            <p className="text-gray-300">Chaque événement est une opportunité pour nous de démontrer notre excellence dans tous les aspects.</p>
          </div>

        </div>
      </section>

      {/* Section "Notre Équipe" */}
      <section className="py-16 bg-white text-black">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gold mb-12">Rencontrez notre Équipe</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12">

          {/* Card de membre d'équipe */}
          <div className="team-card bg-black bg-opacity-70 p-8 rounded-lg shadow-xl text-center transform transition duration-300 hover:scale-105">
            <img className="w-32 h-32 rounded-full mb-4 mx-auto" src="team-member-1.jpg" alt="Membre Équipe" />
            <h3 className="text-2xl font-semibold mb-2 text-white">Jean Dupont</h3>
            <p className="text-gray-300">Directeur Général - Expert en gestion d'événements.</p>
          </div>

          {/* Card de membre d'équipe */}
          <div className="team-card bg-black bg-opacity-70 p-8 rounded-lg shadow-xl text-center transform transition duration-300 hover:scale-105">
            <img className="w-32 h-32 rounded-full mb-4 mx-auto" src="team-member-2.jpg" alt="Membre Équipe" />
            <h3 className="text-2xl font-semibold mb-2 text-white">Sophie Martin</h3>
            <p className="text-gray-300">Responsable de la Créativité - Passionnée par les nouvelles tendances.</p>
          </div>

          {/* Card de membre d'équipe */}
          <div className="team-card bg-black bg-opacity-70 p-8 rounded-lg shadow-xl text-center transform transition duration-300 hover:scale-105">
            <img className="w-32 h-32 rounded-full mb-4 mx-auto" src="team-member-3.jpg" alt="Membre Équipe" />
            <h3 className="text-2xl font-semibold mb-2 text-white">Luc Bernard</h3>
            <p className="text-gray-300">Responsable Logistique - Maître dans l'organisation sans faille.</p>
          </div>

        </div>
      </section>

      {/* Section des partenaires */}
      <section className="py-16 bg-black text-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gold mb-12">Nos Partenaires</h2>
        <Slider {...sliderSettings}>
          <div className="partner-card text-center bg-black bg-opacity-70 p-8 rounded-lg shadow-xl">
            <img className="w-32 h-32 mb-4 mx-auto" src="partner-logo-1.png" alt="Partenaire 1" />
            <h3 className="text-xl text-gold">Partenaire 1</h3>
          </div>
          <div className="partner-card text-center bg-black bg-opacity-70 p-8 rounded-lg shadow-xl">
            <img className="w-32 h-32 mb-4 mx-auto" src="partner-logo-2.png" alt="Partenaire 2" />
            <h3 className="text-xl text-gold">Partenaire 2</h3>
          </div>
          <div className="partner-card text-center bg-black bg-opacity-70 p-8 rounded-lg shadow-xl">
            <img className="w-32 h-32 mb-4 mx-auto" src="partner-logo-3.png" alt="Partenaire 3" />
            <h3 className="text-xl text-gold">Partenaire 3</h3>
          </div>
        </Slider>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black text-white text-center">
        <p className="text-gray-300">© 2024 Event Planner. Tous droits réservés.</p>
      </footer>

    </div>
  );
}

export default AboutPage;
