import React from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useSpring, animated } from "@react-spring/web";

export default function Testimonials() {
  // Simuler des témoignages clients
  const testimonials = [
    {
      name: "Sophie Dupont",
      testimonial:
        "L'événement a été parfaitement organisé. Chaque détail a été pensé avec soin. Je recommande vivement Event Planner pour toute occasion spéciale !",
      rating: 5,
    },
    {
      name: "Lucas Martin",
      testimonial:
        "Une expérience mémorable ! L'équipe a su créer une atmosphère incroyable et tout a été parfaitement coordonné. Bravo !",
      rating: 4,
    },
    {
      name: "Elise Lefevre",
      testimonial:
        "Un service de qualité, très professionnel. L'organisation a été fluide et le résultat au-delà de mes attentes. Merci beaucoup !",
      rating: 5,
    },
  ];

  const [index, setIndex] = useState(0);

  // Animation pour le composant de témoignage
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 800 },
  });

  // Fonction pour naviguer entre les témoignages
  const nextTestimonial = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 bg-black text-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Témoignages de nos clients
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Découvrez ce que nos clients pensent de nos services.
        </p>
      </div>

      {/* Carrousel des témoignages */}
      <div className="relative">
        {/* Témoignage actuel */}
        <animated.div style={fadeIn} className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg transform hover:scale-105 hover:rotate-3d transition duration-500 mx-auto max-w-xl">
          <div className="mb-4">
            <h3 className="text-2xl font-semibold mb-2">{testimonials[index].name}</h3>
            <div className="flex justify-center mb-2">
              {[...Array(testimonials[index].rating)].map((_, i) => (
                <FaStar key={i} className="text-gold" />
              ))}
            </div>
            <p className="text-gray-300">{testimonials[index].testimonial}</p>
          </div>
        </animated.div>

        {/* Navigation */}
        <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center transform -translate-y-1/2">
          <button
            className="bg-gold text-black p-2 rounded-full shadow-lg hover:bg-opacity-80 transition duration-300"
            onClick={prevTestimonial}
          >
            &lt;
          </button>
          <button
            className="bg-gold text-black p-2 rounded-full shadow-lg hover:bg-opacity-80 transition duration-300"
            onClick={nextTestimonial}
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
}
