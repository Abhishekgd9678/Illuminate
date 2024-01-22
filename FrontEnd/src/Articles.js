import a1 from '../images/a1.jpg'
import a2 from '../images/a2.jpg';
import a3 from '../images/a3.jpg';
import a4 from '../images/a4.jpg';
import a5 from '../images/a5.jpg';
import a6 from '../images/a6.jpg';
import a7 from '../images/a7.jpg';
import a8 from '../images/a8.jpg';
import a9 from '../images/a9.jpg';
import a10 from '../images/a10.jpg';
import a11 from '../images/a11.jpg';
import a12 from '../images/a12.jpg';
const title="Article"
const description="Article"
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const NewsArticle = () => {
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
      <div className="w-full h-full select-none mt-10 bg-slate-500 p-5">
        <h1 className='text-2xl text-center text-white mb-4 font-bold'>In The News!</h1>
        <div className="max-w-6xl mx-auto duration-1000 delay-300 select-none ease animate-fade-in-view">
          <ul id="gallery" className="grid grid-cols-2 gap-5 lg:grid-cols-5 ">
            <li >
              <img
                onClick={imageGalleryOpen}
                src={a1}
                className="object-cover rounded-lg select-none w-full h-auto bg-gray-200  cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
                alt="photo gallery image 01"
              />
            </li>
            <li>
              <img
                onClick={imageGalleryOpen}
                src={a2}
                className="object-cover select-none w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
                alt="photo gallery image 02"
              />
            </li>
            {/* Add more images as needed */}
            <li>
              <img
                onClick={imageGalleryOpen}
                src={a3}
                className="object-cover select-none w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
                alt="photo gallery image 02"
              />
            </li>
            <li>
              <img
                onClick={imageGalleryOpen}
                src={a4}
                className="object-cover select-none w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
                alt="photo gallery image 02"
              />
            </li>
            <li>
              <img
                onClick={imageGalleryOpen}
                src={a5}
                className="object-cover select-none w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
                alt="photo gallery image 02"
              />
            </li>
            <li>
              <img
                onClick={imageGalleryOpen}
                src={a6}
                className="object-cover select-none w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
                alt="photo gallery image 02"
              />
            </li>
            <li>
              <img
                onClick={imageGalleryOpen}
                src={a7}
                className="object-cover select-none w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
                alt="photo gallery image 02"
              />
            </li>
            <li>
              <img
                onClick={imageGalleryOpen}
                src={a8}
                className="object-cover select-none w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
                alt="photo gallery image 02"
              />
            </li>
            <li>
              <img
                onClick={imageGalleryOpen}
                src={a9}
                className="object-cover select-none w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
                alt="photo gallery image 02"
              />
            </li>
            <li>
              <img
                onClick={imageGalleryOpen}
                src={a10}
                className="object-cover select-none w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
                alt="photo gallery image 02"
              />
            </li>
            <li>
              <img
                onClick={imageGalleryOpen}
                src={a11}
                className="object-cover select-none w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
                alt="photo gallery image 02"
              />
            </li>
            <li>
              <img
                onClick={imageGalleryOpen}
                src={a12}
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
<div className='flex justify-center items-center h-[150px] text-white *:p-4  '>
<h4> Further Readings </h4>
        <a href='https://timesofindia.indiatimes.com/city/mysuru/annadurai-mani-inspire-students-at-illuminate/articleshow/97833730.cms' target='_blank' className=''>The Times of India </a>
        <a href='https://www.google.com/url?sa=D&q=https://www.mysoorunews.com/illuminate-by-lt-technology-services-and-the-nie-underscores-digital-engineering-excellence-with-indias-moon-man-and-vande-bharat-innovator/&ust=1705833900000000&usg=AOvVaw3DrKW44jdTLzFljDtVRMFr&hl=en&source=gmail' target='_blank'>Mysooru News</a >
</div>
        
      </div>
      
    );
  };

export default NewsArticle;
