import React, { useState } from "react";

const photos = [
  "/images/photo-1.jpg",
  "/images/photo-2.jpg",
  "/images/photo-3.jpg",
  "/images/photo-4.jpg",
  "/images/photo-5.jpg",
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="bg-beige text-white py-10">
      <h2 className="text-3xl text-gold text-center font-bold mb-20 mt-20">
        Galerie de Photos
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg cursor-pointer"
            onClick={() => setSelectedImage(photo)}
          >
            <img
              src={photo}
              alt={`Gallery ${index}`}
              className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-gold font-bold">Voir</p>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img src={selectedImage} alt="Preview" className="max-w-3xl max-h-3xl" />
          <button className="absolute top-4 right-4 text-gold text-3xl" onClick={() => setSelectedImage(null)}>
            ✖
          </button>
        </div>
      )}
    </section>
  );
}
