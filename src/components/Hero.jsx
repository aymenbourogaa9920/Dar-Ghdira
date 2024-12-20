import React from "react";
import { FiArrowRight } from "react-icons/fi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const Hero = () => {
  const sliderRef = React.useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  const slides = [
    {
      type: "video",
      video: "/cover/logo.mp4",
      title: "Mariage en plein air",
      description: "Un moment unique capturé en vidéo.",
    },
    {
      type: "image",
      img: "/images/photo-1.jpg",
      title: "Éveillez vos événements",
      description: "Transformez vos rêves en réalité avec notre expertise.",
    },
    {
      type: "image",
      img: "/images/photo-3.jpg",
      title: "Cérémonies mémorables",
      description: "Nos experts transforment vos idées en réalité.",
    },
  ];

  return (
    <div
      className="relative w-full h-screen text-white flex items-center"
      style={{
        // background: "linear-gradient(to bottom, #FFE998, #57370D)",
        backgroundColor: "black"
      }}
    >
   {/* Section principale avec image de fond */}
<div
  className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center"
  style={{
    backgroundImage: "url('/cover/cover-4.jpeg')", // Chemin vers votre image
  }}
>
  {/* Section gauche : Texte et bouton */}
  <div className="w-full md:w-1/2 px-8 md:px-26 bg-black bg-opacity-50 rounded-lg p-6">
    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FFE998] to-[#57370D]">
      Vivez des moments inoubliables
    </h1>
    <p className="mt-4 text-gray-100 text-lg">
      Nous transformons vos idées en réalité avec un savoir-faire unique.
      Faites confiance à notre expertise pour des événements mémorables.
    </p>
    <button className="relative mt-6 px-6 py-3 rounded-lg bg-black text-transparent bg-clip-text bg-gradient-to-r from-[#FFE998] to-[#57370D] border-2 border-dashed border-transparent text-xl font-semibold shadow-md transition-all duration-300 hover:scale-105">
        {/* Bordure en dégradé */}
        <span className="absolute inset-0 rounded-lg border-2 border-dashed border-colors-gold-gradient-from  bg-black animate-gradient-move pointer-events-none text-transparent bg-clip-text bg-gradient-to-r from-[#FFE998] to-[#57370D]"></span>
        
        {/* Contenu du bouton */}
        <span className="relative z-10 flex items-center justify-center space-x-2 text-transparent bg-clip-text bg-gradient-to-r from-[#FFE998] to-[#57370D]">
          <span>Découvrez nos services</span>
          {/* Flèche animée */}
          <FiArrowRight className="text-[#FFE998] text-2xl transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </button>


  </div>
</div>

      {/* Right Section: Carousel */}
      <div className="w-full md:w-1/2 h-full">
        <Slider ref={sliderRef} {...settings} className="h-full">
          {slides.map((slide, index) => (
            <div key={index} className="relative w-full h-screen">
              {slide.type === "image" ? (
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <video
                  src={slide.video}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                />
              )}
              {/* <div className="absolute bottom-10 left-10 bg-black/60 p-4 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-yellow-500">
                  {slide.title}
                </h2>
                <p className="mt-2 text-gray-300">{slide.description}</p>
              </div> */}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
