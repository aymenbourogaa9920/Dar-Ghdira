import React, { useState, useEffect } from 'react';
import { FaCalendarAlt, FaCamera, FaPalette, FaConciergeBell } from 'react-icons/fa';
import { useSpring, animated } from '@react-spring/web';

// Événements avec icônes et couleurs modifiées
const events = [
  {
    name: "Mariage de Sophie et Maxime",
    date: "2024-12-30T18:00:00",
    icon: <FaCalendarAlt size={50} className="text-gold" />
  },
  {
    name: "Conférence Tech",
    date: "2025-01-15T09:00:00",
    icon: <FaCamera size={50} className="text-gold" />
  },
  {
    name: "Anniversaire de Jean",
    date: "2025-02-10T20:00:00",
    icon: <FaPalette size={50} className="text-gold" />
  },
];

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const distance = new Date(targetDate) - now;

      if (distance <= 0) {
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex gap-4 text-center text-white">
      <div className="flex flex-col items-center">
        <div className="text-3xl font-semibold">{timeLeft.days || 0}</div>
        <div className="text-sm">Jours</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-3xl font-semibold">{timeLeft.hours || 0}</div>
        <div className="text-sm">Heures</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-3xl font-semibold">{timeLeft.minutes || 0}</div>
        <div className="text-sm">Minutes</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-3xl font-semibold">{timeLeft.seconds || 0}</div>
        <div className="text-sm">Secondes</div>
      </div>
    </div>
  );
};

export default function UpcomingEvents() {
  // Animation au survol (scale et ombre légère)
  const eventHoverAnimation = useSpring({
    transform: 'scale(1.05)',
    boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.2)',
    config: { friction: 15, tension: 200 },
  });

  return (
    <section className="py-16 bg-black text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
        Prochains Événements
      </h2>
      <p className="text-gray-400 mb-8">Ne manquez pas nos événements à venir, préparez-vous à vivre des moments mémorables !</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12">
        {events.map((event, index) => (
          <animated.div
            key={index}
            style={eventHoverAnimation}
            className="relative bg-black text-white rounded-lg shadow-lg p-8 flex flex-col justify-center items-center transform transition duration-300 hover:scale-110 hover:shadow-2xl"
          >
            <div className="mb-4">
              {event.icon}
            </div>
            <h3 className="text-2xl font-semibold mb-2">{event.name}</h3>
            <p className="text-sm mb-4">{new Date(event.date).toLocaleString()}</p>
            <Countdown targetDate={event.date} />
          </animated.div>
        ))}
      </div>
    </section>
  );
}
