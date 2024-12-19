import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const sliderRef = React.useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
<div className="relative w-full h-screen bg-gray-100 pt-20 md:pt-24">
<div className="grid grid-cols-1 md:grid-cols-2 items-center h-full">
        {/* Colonne gauche : Carousel */}
      
        <div className="relative">
          <Slider ref={sliderRef} {...settings}>
            {[
              {
                img: "/images/photo-1.jpg",
                title: "Éveillez vos événements",
                description: "Transformez vos rêves en réalité avec notre expertise.",
              },
              {
                img: "/images/photo-2.jpg",
                title: "Mariage élégant en plein air",
                description: "Faites de chaque moment une célébration unique.",
              },
              {
                img: "/images/photo-3.jpg",
                title: "Cérémonies mémorables",
                description: "Nos experts transforment vos idées en réalité.",
              },
            ].map((slide, index) => (
              <div key={index} className="relative">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-[500px] object-cover rounded-lg"
                />
                <div className="absolute bottom-10 left-10 bg-white/80 p-4 rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold text-gray-800">{slide.title}</h2>
                  <p className="mt-2 text-gray-600">{slide.description}</p>
                </div>
              </div>
            ))}
          </Slider>

          {/* Custom Buttons */}
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="absolute top-1/2 -translate-y-1/2 left-4 bg-transparent p-2 rounded-full hover:scale-110 hover:bg-white/10 transition-transform duration-300 flex items-center justify-center shadow-lg"
          >
            <span className="text-gray-50 text-3xl">❮</span>
          </button>
          <button
            onClick={() => sliderRef.current.slickNext()}
            className="absolute top-1/2 -translate-y-1/2 right-4 bg-transparent p-2 rounded-full hover:scale-110 hover:bg-white/10 transition-transform duration-300 flex items-center justify-center shadow-lg"
          >
            <span className="text-gray-50 text-3xl">❯</span>
          </button>
        </div>
        {/* Colonne droite : Texte */}
        <div className="flex flex-col justify-center items-center px-4 sm:px-8 md:px-16 lg:px-24 space-y-6 text-center md:text-left">
  {/* Titre principal */}
  <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
    Bienvenue à{" "}
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-black to-gold">
      Dar Ghdira
    </span>
  </h1>

  {/* Description */}
  <p className="text-base sm:text-lg md:text-xl text-gray-600">
    Votre événement mérite un cadre exceptionnel. Avec une attention minutieuse
    portée à chaque détail, nous transformons vos rêves en réalité.
  </p>

  {/* Bouton dynamique avec animation 3D raffinée */}
  <button className="mt-6 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-gold via-black to-gold text-white text-base sm:text-lg font-semibold rounded-lg shadow-2xl transform transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:bg-gradient-to-r hover:from-black hover:via-gold hover:to-black">
    Planifiez votre événement
  </button>
</div>


      
      </div>
    </div>
  );
};

export default Hero;
