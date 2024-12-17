import React, { useState } from 'react';
import Modal from 'react-modal';
import { FaPlay } from 'react-icons/fa';

// PortfolioPage
const PortfolioPage = () => {
  const [photoModalIsOpen, setPhotoModalIsOpen] = useState(false);
  const [videoModalIsOpen, setVideoModalIsOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState('');
  const [selectedVideoUrl, setSelectedVideoUrl] = useState('');

  // Photos Array
  const photos = [
    { id: 1, src: 'photo1.jpg', alt: 'Photo 1' },
    { id: 2, src: 'photo2.jpg', alt: 'Photo 2' },
    { id: 3, src: 'photo3.jpg', alt: 'Photo 3' },
    { id: 4, src: 'photo4.jpg', alt: 'Photo 4' },
  ];

  // Videos Array
  const videos = [
    { id: 1, thumbnail: 'video-thumbnail1.jpg', videoUrl: 'https://www.youtube.com/embed/video1' },
    { id: 2, thumbnail: 'video-thumbnail2.jpg', videoUrl: 'https://www.youtube.com/embed/video2' },
    { id: 3, thumbnail: 'video-thumbnail3.jpg', videoUrl: 'https://www.youtube.com/embed/video3' },
  ];

  // Open Photo Modal
  const openPhotoModal = (photoSrc) => {
    setSelectedPhoto(photoSrc);
    setPhotoModalIsOpen(true);
  };

  // Close Photo Modal
  const closePhotoModal = () => {
    setPhotoModalIsOpen(false);
    setSelectedPhoto('');
  };

  // Open Video Modal
  const openVideoModal = (videoUrl) => {
    setSelectedVideoUrl(videoUrl);
    setVideoModalIsOpen(true);
  };

  // Close Video Modal
  const closeVideoModal = () => {
    setVideoModalIsOpen(false);
    setSelectedVideoUrl('');
  };

  return (
    <div className="bg-black text-white">
      {/* Photo Gallery */}
      <section className="py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gold mb-12">Galerie Photo</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {photos.map(photo => (
            <div
              key={photo.id}
              className="relative group overflow-hidden rounded-lg shadow-xl"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 cursor-pointer"
                onClick={() => openPhotoModal(photo.src)}
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
                <span className="text-white text-4xl">+</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Gallery */}
      <section className="py-16 px-6 bg-gray-900">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gold mb-12">Galerie Vidéo</h2>
        <div className="flex justify-center gap-8">
          {videos.map(video => (
            <div key={video.id} className="relative group">
              <img
                src={video.thumbnail}
                alt={`Video ${video.id}`}
                className="w-48 h-48 object-cover rounded-lg cursor-pointer"
                onClick={() => openVideoModal(video.videoUrl)}
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
                <FaPlay className="text-white text-4xl" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal Photo */}
      <Modal
        isOpen={photoModalIsOpen}
        onRequestClose={closePhotoModal}
        contentLabel="Photo Modal"
        className="modal bg-black text-white w-full md:w-2/3 mx-auto p-4 rounded-lg"
        overlayClassName="overlay fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center"
      >
        <button onClick={closePhotoModal} className="absolute top-4 right-4 text-white text-3xl">X</button>
        <img src={selectedPhoto} alt="Selected Photo" className="w-full h-auto rounded-lg shadow-xl" />
      </Modal>

      {/* Modal Video */}
      <Modal
        isOpen={videoModalIsOpen}
        onRequestClose={closeVideoModal}
        contentLabel="Video Modal"
        className="modal bg-black text-white w-full md:w-2/3 mx-auto p-4 rounded-lg"
        overlayClassName="overlay fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center"
      >
        <button onClick={closeVideoModal} className="absolute top-4 right-4 text-white text-3xl">X</button>
        <iframe
          className="w-full h-96 rounded-lg shadow-xl"
          src={selectedVideoUrl}
          title="Video Modal"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Modal>
    </div>
  );
};

export default PortfolioPage;
