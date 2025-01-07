import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { FaRegCalendarAlt, FaPaintBrush, FaHandshake } from "react-icons/fa";
import styles from './specialSection.module.css' // Import du fichier CSS module

export default function SpecialSection() {
  // Animation pour chaque carte
  const fadeInAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 800 },
  });

  return (
    <div className='bg-charcoal-gradient  text-white relative overflow-hidden'>
    <section className="py-16 bg-charcoal-gradient text-white">
      {/* Titre de la section */}
      
      <div className="text-center mb-12 ">
        <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold-medium to-gold-deep mb-4">
          Nos Services
        </h2>
        <p className="text-charcoal max-w-2xl mx-auto">
          Découvrez nos services spécialisés pour vous offrir une expérience
          événementielle inoubliable.
        </p>
      </div>

      {/* Contenu des services */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12">
        {/* Carte 1 */}
        <animated.div
      style={fadeInAnimation}
      className={styles.eventSection}
    >
      <FaRegCalendarAlt className={styles.icon} />
      <h3 className={styles.title}>Organisation d'Événements</h3>
      <p className={styles.description}>
        Planification complète pour tous vos événements : mariages, fêtes,
        conférences, etc.
      </p>
    </animated.div>

        {/* Carte 2 */}
        <animated.div
          style={fadeInAnimation}
          className="bg-gradient-to-r from-gold-light via-gold-medium to-gold-deep p-6 rounded-lg text-center shadow-lg hover:scale-110 transform hover:rotate-3d hover:shadow-2xl transition duration-500"
        >
          <FaPaintBrush className="text-gold text-5xl mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Décoration</h3>
          <p className="text-charcoal">
            Création de décors uniques pour sublimer vos événements et leur donner un charme exceptionnel.
          </p>
        </animated.div>

        {/* Carte 3 */}
        <animated.div
          style={fadeInAnimation}
          className={styles.eventSection}    >
          <FaHandshake className={styles.icon} />
          <h3 className={styles.title} >Services Personnalisés</h3>
          <p className={styles.description}>
            Des solutions adaptées à vos besoins, conçues spécialement pour vous satisfaire.
          </p>
        </animated.div>
      </div>
    
    </section>
    {/* Gold Animation */}
    <div
        className='absolute top-0 left-0 opacity-60'
        style={{
          width: '200px',
          height: '200px',
          backgroundImage: "url('/animated-hearts.svg')"
        }}
      ></div>
    </div>
  );
}
