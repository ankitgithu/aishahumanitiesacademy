import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from '../assets/ImageGallery/image';

const Gallery = () => {
  const categories = ["All", "Director", "Students", "Celebration"];
  const [items] = useState(Image);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imgUrl) => {
    setSelectedImage(imgUrl);
  };

  const handleClosePopup = () => {
    setSelectedImage(null);
  };

  const filteredItems = selectedCategory === "All" ? items : items.filter(item => item.category === selectedCategory);

  return (
    <div className="relative">
      <div className="bg-transparent p-4 z-10">
        <div className="flex justify-center">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 mx-2 rounded ${selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
        {filteredItems.map((elem) => {
          const { id, imgUrl } = elem;
          return (
            <motion.div
              key={id}
              className="group cursor-pointer relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={imgUrl}
                alt={`Image ${id}`}
                className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
                onClick={() => handleImageClick(imgUrl)}
              />
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClosePopup}
          >
            <motion.div
              className="relative rounded-lg p-4 w-11/12 max-w-xs sm:max-w-sm md:max-w-md"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()} // Prevent click from closing popup
            >
              <button
                className="absolute top-2 right-2 bg-white text-black rounded-full p-2"
                onClick={handleClosePopup}
              >
                &times;
              </button>
              <img src={selectedImage} alt="Selected" className="w-full h-auto rounded-lg" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
