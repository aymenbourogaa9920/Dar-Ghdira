import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPen } from "react-icons/fa";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implémenter la logique pour envoyer les données ici
    console.log(formData);
  };

  return (
    <section className="bg-beige text-white py-10">
      <h2 className="text-4xl text-gold text-center font-bold mb-8 mt-20">
        Contactez-nous
      </h2>

      <div className="max-w-lg mx-auto p-8 rounded-3xl shadow-xl bg-gray-500 border-2 border-gold">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nom */}
          <div className="relative">
            <label className="text-sm font-medium text-gray-400">Votre Nom</label>
            <div className="flex items-center bg-black border-2 border-gray-600 p-2 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
              <FaUser className="text-gold text-xl mr-2" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Entrez votre nom"
                className="bg-black text-white w-full focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold placeholder-gray-400"
              />
            </div>
          </div>

          {/* Email */}
          <div className="relative">
            <label className="text-sm font-medium text-gray-400">Votre Email</label>
            <div className="flex items-center bg-black border-2 border-gray-600 p-2 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
              <FaEnvelope className="text-gold text-xl mr-2" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Entrez votre email"
                className="bg-black text-white w-full focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold placeholder-gray-400"
              />
            </div>
          </div>

          {/* Sujet */}
          <div className="relative">
            <label className="text-sm font-medium text-gray-400">Sujet</label>
            <div className="flex items-center bg-black border-2 border-gray-600 p-2 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
              <FaPen className="text-gold text-xl mr-2" />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Entrez le sujet"
                className="bg-black text-white w-full focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold placeholder-gray-400"
              />
            </div>
          </div>

          {/* Message */}
          <div className="relative">
            <label className="text-sm font-medium text-gray-400">Votre Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Écrivez votre message"
              className="bg-black text-white w-full h-40 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold placeholder-gray-400 border-2 border-gray-600 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 resize-none"
            />
          </div>

          {/* Submit */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-gold text-black font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 hover:bg-white focus:outline-none shadow-xl hover:shadow-2xl"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
