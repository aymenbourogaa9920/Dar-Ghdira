import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaRegSmileBeam } from "react-icons/fa"; // Icône pour un thème joyeux
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Hero = () => {
  const sliderRef = React.useRef(null);

  const settings = {
    infinite: true, // Boucle infinie
    speed: 500, // Vitesse de transition
    slidesToShow: 1, // Nombre d'éléments affichés à la fois
    slidesToScroll: 1, // Nombre d'éléments défilés à chaque transition
    autoplay: true, // Active le défilement automatique
    autoplaySpeed: 3000, // Temps entre chaque défilement
    arrows: false, // Désactive les flèches par défaut de react-slick
  };

  return (
    <div className="relative w-full h-screen bg-gray-100">
      {/* Carousel */}
      <div className="relative max-w-6xl mx-auto mt-32">
        <Slider ref={sliderRef} {...settings}>
          <div className="relative">
            <img
              src="/images/photo-1.jpg"
              alt="Slide 1"
              className="w-full h-[500px] object-cover rounded-lg"
            />
            <div className="absolute bottom-10 left-10 bg-white/80 p-4 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800">Éveillez vos événements</h2>
              <p className="mt-2 text-gray-600">
                Transformez vos rêves en réalité avec notre expertise.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="/images/photo-2.jpg"
              alt="Slide 2"
              className="w-full h-[500px] object-cover rounded-lg"
            />
            <div className="absolute bottom-10 left-10 bg-white/80 p-4 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800">Mariage élégant en plein air</h2>
              <p className="mt-2 text-gray-600">
                Faites de chaque moment une célébration unique.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="/images/photo-3.jpg"
              alt="Slide 3"
              className="w-full h-[500px] object-cover rounded-lg"
            />
            <div className="absolute bottom-10 left-10 bg-white/80 p-4 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800">Cérémonies mémorables</h2>
              <p className="mt-2 text-gray-600">
                Nos experts transforment vos idées en réalité.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="/images/photo-4.jpg"
              alt="Mariage élégant"
              className="w-full h-[500px] object-cover rounded-lg"
            />
            <div className="absolute bottom-10 left-10 bg-white/80 p-4 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800">Un mariage au style unique</h2>
              <p className="mt-2 text-gray-600">
                Faites de votre grand jour une célébration exceptionnelle avec nos solutions sur mesure et notre expertise en organisation.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="/images/photo-5.jpg"
              alt="Cérémonie en plein air"
              className="w-full h-[500px] object-cover rounded-lg"
            />
            <div className="absolute bottom-10 left-10 bg-white/80 p-4 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800">Célébrations en plein air</h2>
              <p className="mt-2 text-gray-600">
                Offrez à vos invités une expérience mémorable dans un cadre naturel enchanteur, idéal pour chaque occasion spéciale.
              </p>
            </div>
          </div>

        </Slider>

       {/* Custom Buttons */}
       <button
          onClick={() => sliderRef.current.slickPrev()}
          className="absolute top-1/2 -translate-y-1/2 left-4 bg-transparent p-2 rounded-t-full rounded-b-none hover:scale-110 hover:bg-white/10 transition-transform duration-300 flex items-center justify-center shadow-lg"
          style={{
            width: "70px",
            height: "140px",
            transformOrigin: "center bottom",
          }}
        >
          <FaChevronLeft className="text-gray-50 text-3xl hover:scale-125 transition-transform duration-200" />
        </button>
        <button
          onClick={() => sliderRef.current.slickNext()}
          className="absolute top-1/2 -translate-y-1/2 right-4 bg-transparent p-2 rounded-t-none rounded-b-full hover:scale-110 hover:bg-white/10 transition-transform duration-300 flex items-center justify-center shadow-lg"
          style={{
            width: "70px",
            height: "140px",
            transformOrigin: "center top",
          }}
        >
          <FaChevronRight className="text-gray-50 text-3xl hover:scale-125 transition-transform duration-200" />
        </button>
      </div>

      {/* Contenu déplacé sous le carousel */}
      <div className="absolute bottom-15 left-1/2 transform -translate-x-1/2 text-center">
        <h1 className="text-4xl font-bold text-gray-800">
          Bienvenue à <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-black to-gold">Dar Ghdira</span>
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Votre événement mérite un cadre exceptionnel. Avec une attention
          minutieuse portée à chaque détail, nous transformons vos rêves en
          réalité.
        </p>
        <button className="mt-6 px-6 py-3 bg-gradient-to-r from-gold via-black to-gold text-white rounded-md">
          Planifiez votre événement
        </button>

      </div>
    </div>
  );
};

export default Hero;
