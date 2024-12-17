import React, { useState } from "react";

const videos = [
  { id: 1, title: "Vidéo 1", url: "/videos/portfolio-1.mp4" },
  { id: 2, title: "Vidéo 2", url: "/videos/portfolio-2.mp4" },
  { id: 3, title: "Vidéo 3", url: "/videos/portfolio-3.mp4" },
];

export default function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section className="bg-beige text-white py-10">
      <h2 className="text-3xl text-gold text-center font-bold mb-8">Galerie Vidéo</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {videos.map((video) => (
          <div
            key={video.id}
            className="relative group overflow-hidden rounded-lg cursor-pointer bg-black border border-gold"
            onClick={() => setSelectedVideo(video.url)}
          >
            <div className="flex items-center justify-center h-48 bg-gray-800">
              <p className="text-gold text-2xl">{video.title}</p>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-gold font-bold text-xl">Lire</p>
            </div>
          </div>
        ))}
      </div>

      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedVideo(null)}
        >
          <iframe
            src={selectedVideo}
            title="Video Player"
            className="w-4/5 h-4/5"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
          <button className="absolute top-4 right-4 text-gold text-3xl" onClick={() => setSelectedVideo(null)}>
            ✖
          </button>
        </div>
      )}
    </section>
  );
}
