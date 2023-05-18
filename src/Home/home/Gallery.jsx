
import React, { useState } from 'react';


const Gallery = () => {
  const images = [
    'https://i.ibb.co/NF35gnR/633aad0dcb0629168c563ca3-toy-cars-sian-fkp3-metal-model-car-with.jpg',
    'https://i.ibb.co/TcgTNBX/cool-toy-cars-for-kids-to-drive.jpg',
    'https://i.ibb.co/wdmTh9V/spraycarvideo-mp4.jpg',
    'https://i.ibb.co/TmyW7rD/Wholesale-Facoty-Supplier-Electric-Remote-Control-Toy-Car-Drift-RC-Car-Spray-Cars-Toy-with-Cool-LED.jpg',
    'https://i.ibb.co/jJSrJJS/2-In-1-Transformation-Car-Toy-Trnasformational-Robot-Model-ABS-Mini-Cool-Pull-Back-Toy-Car-jpg-Q90-j.webp',
    'https://i.ibb.co/VWSfmvq/Toy-Cars-Ultimate-Grid-4.jpg',
    'https://i.ibb.co/rv1ztVN/SPR-HOME-6-best-toy-cars-for-kids-4155717-01-b04a22807dd14b10a647f7d769a86224.jpg',
    'https://i.ibb.co/Qcbv9dk/images-q-tbn-ANd9-Gc-TGh-Wrw-Hk-V7sz-IVw-Ui-Rvdcz60-F8-Rs-Vro-L7-XXw-usqp-CAU.jpg',
    'https://i.ibb.co/JqmG31D/wolvolk-2be7f3f6a9134724900f1c703aaf3dd6.jpg'
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-4xl lg:text-6xl font-bold mb-4 text-pink-400 text-center">Toys Collections!!!! <span className='text-yellow-300'>Yaaahhhhh!</span></h2>
      <p className='text-xl font-semibold text-blue-400 text-center mt-0'>Let's explore.......</p>
      <div className="relative">
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-25 hover:bg-opacity-50 text-black rounded-full w-10 h-10 flex items-center justify-center"
          onClick={handlePrev}
        >
          &lt;
        </button>
        <img
          src={images[activeIndex]}
          alt={`Image ${activeIndex + 1}`}
          className="w-80 h-52 rounded-lg shadow-md lg:w-full lg:h-96 mx-auto sm:max-w-xs md:max-w-sm lg:max-w-md"
        />
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-25 hover:bg-opacity-50 text-black rounded-full w-10 h-10 flex items-center justify-center"
          onClick={handleNext}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Gallery;
