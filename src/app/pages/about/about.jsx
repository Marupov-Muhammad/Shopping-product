import React, { useState } from 'react';
import sideImg from '../../../shared/Side Image.png';
import services from '../../../shared/Services.png';
import services1 from '../../../shared/Services (1).png';
import services2 from '../../../shared/Services (2).png';
import services3 from '../../../shared/Services (3).png';
import frame874 from '../../../shared/Frame 874.png';
import frame875 from '../../../shared/Frame 875.png';
import frame876 from '../../../shared/Frame 876.png';
import img877 from '../../../shared/Frame 877.png';
import services4 from '../../../shared/Services (4).png';
import services5 from '../../../shared/Services (5).png';
import services6 from '../../../shared/Services (6).png';

const About = () => {
  const [activeId, setActiveId] = useState(null);

  const cards = [
    { img: services, id: 1, value: '10.5k', label: 'Sellers active on our site' },
    { img: services1, id: 2, value: '33k', label: 'Monthly Product Sale' },
    { img: services2, id: 3, value: '45.5k', label: 'Customer active in our site' },
    { img: services3, id: 4, value: '25k', label: 'Annual gross sale' },
  ];

  const person = [
    { img: frame874, id: 1, value: 'Tom Cruise', label: 'Founder & Chairman' },
    { img: frame875, id: 2, value: 'Emma Watson', label: 'Managing Director' },
    { img: frame876, id: 3, value: 'Will Smith', label: 'Product Designer' },
  ];

  return (
    <div className="w-[90%] mx-auto py-10 mt-[100px]">
      <p className="text-gray-600 text-sm sm:text-base">
        Home / <span className="text-black">About</span>
      </p>

      <div className="flex flex-col md:flex-row justify-between mt-12 items-center gap-8">
        <div className="max-w-xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">Our Story</h1>
          <p className="mt-6 text-gray-800 text-sm sm:text-base">
            Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. 
          </p>
          <p className="mt-4 text-gray-800 text-sm sm:text-base">
            Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
          </p>
        </div>
        <div className="shrink-0 w-full md:w-[40%]">
          <img src={sideImg} alt="Our Story" className="w-full rounded-lg shadow-lg" />
        </div>
      </div>

      <div className="w-full flex flex-wrap gap-4 sm:gap-6 justify-center mt-14">
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => setActiveId(card.id)}
            className={`w-[90%] sm:w-[250px] h-[180px] sm:h-[200px] flex flex-col items-center justify-center text-center cursor-pointer rounded-lg border transition-all duration-300 ease-in-out transform
              ${activeId === card.id
                ? 'bg-[#DB4444] text-white border-transparent scale-105 shadow-xl'
                : 'bg-white text-black border-gray-300 hover:border-black hover:shadow-md hover:scale-105'}`}
          >
            <img src={card.img} alt="Service Icon" className="w-10 h-10 mb-3" />
            <b className="text-xl sm:text-2xl">{card.value}</b>
            <p className="font-medium text-sm">{card.label}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-10 mt-20">
        {person.map((e) => (
          <div key={e.id} className="text-center w-full sm:w-auto">
            <img className="mb-4 w-full max-w-[250px] mx-auto" src={e.img} alt="" />
            <b className="text-xl md:text-2xl">{e.value}</b>
            <p className="mt-2 text-sm">{e.label}</p>
            <img className="mt-3 mx-auto" src={img877} alt="" />
          </div>
        ))}
      </div>

      <div className="mt-20 flex flex-col sm:flex-row justify-between gap-10 flex-wrap">
        {[services4, services5, services6].map((img, i) => (
          <div key={i} className="text-center w-full sm:w-[300px] mx-auto">
            <div className="flex justify-center mb-3">
              <img src={img} alt="" />
            </div>
            <b className="text-lg md:text-xl">
              {i === 0
                ? 'FREE AND FAST DELIVERY'
                : i === 1
                  ? '24/7 CUSTOMER SERVICE'
                  : 'MONEY BACK GUARANTEE'}
            </b>
            <p className="text-sm mt-2">
              {i === 0
                ? 'Free delivery for all orders over $140'
                : i === 1
                  ? 'Friendly 24/7 customer support'
                  : 'We return money within 30 days'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
