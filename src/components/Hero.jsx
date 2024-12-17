import React, { useState, useEffect } from "react";
import { useTransition, animated } from "@react-spring/web";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Hero() {
  const images = [
    // "logo.png",
    "/images/photo-1.jpg",
    "/images/photo-5.jpg",
    "/images/photo-2.jpg",
    "/images/photo-3.jpg",
    "/images/photo-4.jpg",
  ];

  const [current, setCurrent] = useState(0);

  // Précharger les images
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const transitions = useTransition(current, {
    key: current,
    from: { opacity: 0, transform: "scale(1.05)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0.95)" },
    config: { tension: 280, friction: 30 },
  });

  return (
    <div className="relative w-full h-screen flex flex-col md:flex-row bg-beige">
      {/* Section Carousel d'images */}
      <div className="relative w-full md:w-1/2 h-1/2 md:h-full overflow-hidden">
        {transitions((style, index) => (
          <animated.div
            key={index}
            style={{
              ...style,
              backgroundImage: `url(${images[index]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="absolute w-full h-full"
          />
        ))}

        {/* Boutons pour naviguer */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gold bg-opacity-80 p-3 rounded-full shadow-lg hover:bg-yellow transition duration-300"
        >
          <FaChevronLeft className="text-white text-xl" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gold bg-opacity-80 p-3 rounded-full shadow-lg hover:bg-yellow transition duration-300"
        >
          <FaChevronRight className="text-white text-xl" />
        </button>
      </div>

      {/* Section Texte */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 py-10 bg-beige">
        <h1 className="text-3xl md:text-5xl font-bold text-black mb-6">
          Éveillez vos événements avec <span className="text-gold">Dar Ghdira</span>
        </h1>
        <p className="text-lg text-charcoal leading-relaxed mb-4">
          Votre événement mérite un cadre exceptionnel. Avec une attention minutieuse
          portée à chaque détail, nous transformons vos rêves en réalité.
        </p>
        <p className="text-lg text-charcoal leading-relaxed mb-8">
          Prêts à commencer cette aventure ensemble ? Découvrez comment nous pouvons
          donner vie à vos idées.
        </p>
        <a
          href="#"
          className="inline-block w-fit px-6 py-3 bg-gold text-white font-semibold rounded-md shadow-md hover:bg-paleYellow hover:text-charcoal transition duration-300"
        >
          Planifiez Votre Événement
        </a>
      </div>
    </div>
  );
}
