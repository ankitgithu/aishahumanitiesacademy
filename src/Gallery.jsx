import React, { useState } from 'react';
import Image from '../assets/ImageGallery/image';

const Gallery = () => {
  const [Items, setItems] = useState(Image);

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
      {Items.map((elem) => {
       
        const { id, imgUrl } = elem;
        return (
          <div key={id} className="group cursor-pointer relative">
            <img
              src={imgUrl}
              alt={`Image ${id}`}
              className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
