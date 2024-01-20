import React from 'react';
import one from '../images/1.jpg';
import two from '../images/2.jpg';
import three from '../images/3.jpg';
import four from '../images/4.jpg';
import five from '../images/5.jpg';
import six from '../images/6.jpg';
import seven from '../images/7.jpg';
import eight from '../images/8.jpg';
import nine from '../images/9.jpg';

import React, { useState, useEffect } from 'react';

const Gallery = () => {
  const [imageGalleryOpened, setImageGalleryOpened] = useState(false);
  const [imageGalleryActiveUrl, setImageGalleryActiveUrl] = useState(null);
  const [imageGalleryImageIndex, setImageGalleryImageIndex] = useState(null);
  const [imageGalleryPhotos, setImageGalleryPhotos] = useState([]);

  useEffect(() => {
    const galleryPhotos = document.querySelectorAll('#gallery img');
    setImageGalleryPhotos(galleryPhotos);

    for (let i = 0; i < galleryPhotos.length; i++) {
      galleryPhotos[i].setAttribute('data-index', i + 1);
    }
  }, []);

  const imageGalleryOpen = (event) => {
    setImageGalleryImageIndex(event.target.dataset.index);
    setImageGalleryActiveUrl(event.target.src);
    setImageGalleryOpened(true);
  };

  const imageGalleryClose = () => {
    setImageGalleryOpened(false);
    setTimeout(() => setImageGalleryActiveUrl(null), 300);
  };

  const imageGalleryNext = () => {
    let newIndex = parseInt(imageGalleryImageIndex) + 1;

    if (newIndex > imageGalleryPhotos.length) {
      newIndex = 1;
    }

    setImageGalleryImageIndex(newIndex);
    setImageGalleryActiveUrl(
      imageGalleryPhotos[newIndex - 1].getAttribute('src')
    );
  };

  const imageGalleryPrev = () => {
    let newIndex = parseInt(imageGalleryImageIndex) - 1;

    if (newIndex < 1) {
      newIndex = imageGalleryPhotos.length;
    }

    setImageGalleryImageIndex(newIndex);
    setImageGalleryActiveUrl(
      imageGalleryPhotos[newIndex - 1].getAttribute('src')
    );
  };

  return (
    <div className="w-full h-full select-none mt-10">
      <div className="max-w-6xl mx-auto duration-1000 delay-300 select-none ease animate-fade-in-view">
        <ul id="gallery" className="grid grid-cols-2 gap-5 lg:grid-cols-5">
          <li>
            <img
              onClick={imageGalleryOpen}
              src={two}
              className="object-cover select-none w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
              alt="photo gallery image 01"
            />
          </li>
          <li>
            <img
              onClick={imageGalleryOpen}
              src={one}
              className="object-cover select-none w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
              alt="photo gallery image 02"
            />
          </li>
          {/* Add more images as needed */}
          <li>
            <img
              onClick={imageGalleryOpen}
              src={three}
              className="object-cover select-none w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
              alt="photo gallery image 02"
            />
          </li>
          <li>
            <img
              onClick={imageGalleryOpen}
              src={four}
              className="object-cover select-none w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
              alt="photo gallery image 02"
            />
          </li>
          <li>
            <img
              onClick={imageGalleryOpen}
              src={five}
              className="object-cover select-none w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
              alt="photo gallery image 02"
            />
          </li>
          <li>
            <img
              onClick={imageGalleryOpen}
              src={six}
              className="object-cover select-none w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
              alt="photo gallery image 02"
            />
          </li>
          <li>
            <img
              onClick={imageGalleryOpen}
              src={seven}
              className="object-cover select-none w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
              alt="photo gallery image 02"
            />
          </li>
          <li>
            <img
              onClick={imageGalleryOpen}
              src={eight}
              className="object-cover select-none w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
              alt="photo gallery image 02"
            />
          </li>
          <li>
            <img
              onClick={imageGalleryOpen}
              src={nine}
              className="object-cover select-none w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
              alt="photo gallery image 02"
            />
          </li>
        </ul>
      </div>
      <div
        onClick={imageGalleryClose}
        onKeyDown={imageGalleryClose}
        className={`fixed inset-0 z-99 flex items-center justify-center bg-black bg-opacity-50 select-none cursor-zoom-out ${
          imageGalleryOpened ? 'block' : 'hidden'
        }`}
      >
       {/* Image gallery modal content goes here */}
{imageGalleryOpened && (
  <img
    src={imageGalleryActiveUrl}
    alt={`photo gallery image ${imageGalleryImageIndex}`}
    className="object-contain max-w-full max-h-full"
  />
)}

      </div>
    </div>
  );
};

export default Gallery;



