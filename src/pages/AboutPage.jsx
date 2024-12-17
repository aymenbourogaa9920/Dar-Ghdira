import React from "react";
import { FaUsers, FaBullhorn, FaCogs } from "react-icons/fa";
import { useSpring, animated } from "@react-spring/web";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AboutPage() {
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 300 });

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="bg-beige text-white">
      {/* Section d'introduction */}
      <section className="py-16 px-6 text-center">
        <animated.h1
          style={fadeIn}
          className="text-4xl md:text-5xl font-bold text-lightGold mb-4 mt-24"
        >
          À Propos de Nous
        </animated.h1>
        <animated.p
          style={fadeIn}
          className="text-lg text-charcoal max-w-2xl mx-auto mb-8"
        >
          Nous créons des expériences inoubliables en organisant des événements
          qui marquent. Découvrez qui nous sommes et ce qui nous rend uniques.
        </animated.p>
      </section>

      {/* Section Notre Mission */}
      <section className="py-16 bg-beige text-black">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-lightGold mb-12">
          Notre Mission
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12">
          <Card
            icon={<FaUsers className="text-gold text-6xl mb-4 mx-auto" />}
            title="Collaboration"
            text="Nous croyons en l'importance des partenariats solides pour créer des événements exceptionnels."
          />
          <Card
            icon={<FaBullhorn className="text-gold text-6xl mb-4 mx-auto" />}
            title="Innovation"
            text="Nous innovons constamment pour offrir des expériences uniques à chaque événement."
          />
          <Card
            icon={<FaCogs className="text-gold text-6xl mb-4 mx-auto" />}
            title="Excellence"
            text="Chaque événement est une opportunité pour nous de démontrer notre excellence."
          />
        </div>
      </section>

      {/* Section Notre Équipe */}
      <section className="py-16 bg-beige text-black">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-lightGold mb-12">
          Rencontrez notre Équipe
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12">
          <TeamCard
            name="Jean Dupont"
            role="Directeur Général"
            img="team-member-1.jpg"
          />
          <TeamCard
            name="Sophie Martin"
            role="Responsable Créativité"
            img="team-member-2.jpg"
          />
          <TeamCard
            name="Luc Bernard"
            role="Responsable Logistique"
            img="team-member-3.jpg"
          />
        </div>
      </section>

      {/* Section Partenaires */}
      <section className="py-16 bg-beige text-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gold mb-12">
          Nos Partenaires
        </h2>
        <Slider {...sliderSettings}>
          <PartnerCard img="partner-logo-1.png" name="Partenaire 1" />
          <PartnerCard img="partner-logo-2.png" name="Partenaire 2" />
          <PartnerCard img="partner-logo-3.png" name="Partenaire 3" />
        </Slider>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-charcoal text-center text-white">
        <p className="text-paleYellow">© 2024 Event Planner. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

const Card = ({ icon, title, text }) => (
  <div className="bg-black bg-opacity-70 p-8 rounded-lg shadow-xl text-center transform transition duration-300 hover:scale-105 hover:bg-lightGold">
    {icon}
    <h3 className="text-2xl font-semibold mb-2 text-white">{title}</h3>
    <p className="text-gray-300">{text}</p>
  </div>
);

const TeamCard = ({ img, name, role }) => (
  <div className="team-card bg-black bg-opacity-70 p-8 rounded-lg shadow-xl text-center transform transition duration-300 hover:scale-105 hover:bg-lightGold">
    <img
      className="w-32 h-32 rounded-full mb-4 mx-auto"
      src={img}
      alt={name}
    />
    <h3 className="text-2xl font-semibold mb-2 text-white">{name}</h3>
    <p className="text-gray-300">{role}</p>
  </div>
);

const PartnerCard = ({ img, name }) => (
  <div className="partner-card text-center bg-black bg-opacity-70 p-8 rounded-lg shadow-xl">
    <img className="w-32 h-32 mb-4 mx-auto" src={img} alt={name} />
    <h3 className="text-xl text-gold">{name}</h3>
  </div>
);

export default AboutPage;
