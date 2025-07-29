import React, { useState } from 'react';
import arrowDown from '../../../shared/arrowDown.png';
import GetData from '../../../entities/component/getData';
import { useGetBrandQuery, useSubCategoriesQuery } from '../../../futures/services/userApi';
import { Slider } from 'antd';

const futures = () => [
  'Metallic',
  'Plastic cover',
  '8GB Ram',
  'Super power',
  'Large Memory'
];

const Products = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [showBrands, setShowBrands] = useState(false);
  const [showFutures, setShowFutures] = useState(false);
  const [showRange, setShowRange] = useState(false);
  const [disabled, setDisabled] = useState(false);
   const [range, setRange] = useState([20, 50]);

  const { data } = useSubCategoriesQuery();
  const { data: data1 } = useGetBrandQuery();

  const toggleShowCategories = () => {
    setShowCategories(prev => !prev);
  };

  const toggleShowBrands = () => {
    setShowBrands(prev => !prev);
  };

  const toggleFutures = () => {
    setShowFutures(prev => !prev);
  };

  const toggleRange = () => {
    setShowRange(prev => !prev);
  };

  return (
    <div className="p-6 mt-[100px]">
      <p className="text-gray-500 mb-4">
        Home / <span className="text-black">Explore Our Products</span>
      </p>
      <hr className='w-[260px] text-gray-400' />

      <div className='flex gap-6'>
        <div className="mt-4 w-[250px]">
          <button
            onClick={toggleShowCategories}
            className="text-blue-600 hover:underline flex items-center justify-between w-[250px]"
          >
            <span className='text-black font-bold'>
              {showCategories ? 'Hide Categories' : 'Show Categories'}
            </span>
            <img
              src={arrowDown}
              alt="Toggle"
              className={`w-5 h-5 transition-transform duration-300 cursor-pointer ${showCategories ? 'rotate-180' : 'rotate-0'}`}
            />
          </button>

          {showCategories && (
            <div className="mt-3 p-4 rounded bg-white w-[260px]">
              {data?.data?.map((e) => (
                <div key={e.id}>
                  <p className="text-black mb-2 hover:text-red-500">
                    {e.categoryName}
                  </p>
                </div>
              ))}
              <p className='text-red-400'>See all</p>
            </div>
          )}

          <hr className='w-[260px] text-gray-400 mt-4' />

          <button
            onClick={toggleShowBrands}
            className="text-blue-600 hover:underline flex items-center justify-between w-[250px] mt-4"
          >
            <span className='text-black font-bold'>
              {showBrands ? 'Hide Brands' : 'Show Brands'}
            </span>
            <img
              src={arrowDown}
              alt="Toggle"
              className={`w-5 h-5 transition-transform duration-300 cursor-pointer ${showBrands ? 'rotate-180' : 'rotate-0'}`}
            />
          </button>

          {showBrands && (
            <div className="mt-3 p-4 rounded bg-white w-[260px]">
              {data1?.data?.map((e) => (
                <div key={e.id}>
                  <p className="text-black mb-2 hover:text-red-500">
                    {e.brandName}
                  </p>
                </div>
              ))}
              <p className='text-red-400'>See all</p>
            </div>
          )}

          <hr className='w-[260px] text-gray-400 mt-4' />

          <button
            onClick={toggleFutures}
            className="text-blue-600 hover:underline flex items-center justify-between w-[250px] mt-4"
          >
            <span className='text-black font-bold'>
              {showFutures ? 'Hide Features' : 'Show Features'}
            </span>
            <img
              src={arrowDown}
              alt="Toggle"
              className={`w-5 h-5 transition-transform duration-300 cursor-pointer ${showFutures ? 'rotate-180' : 'rotate-0'}`}
            />
          </button>

          {showFutures && (
            <div className="mt-3 p-4 rounded bg-white w-[260px]">
              {futures().map((item, index) => (
                <div key={index}>
                  <p className="text-black mb-2 hover:text-red-500">
                    {item}
                  </p>
                </div>
              ))}
              <p className='text-red-400'>See all</p>
            </div>
          )}

          <hr className='w-[260px] text-gray-400 mt-4' />

          <button
            onClick={toggleRange}
            className="text-blue-600 hover:underline flex items-center justify-between w-[250px] mt-4"
          >
            <span className='text-black font-bold'>
              {showRange ? 'Hide Range' : 'Show Range'}
            </span>
            <img
              src={arrowDown}
              alt="Toggle"
              className={`w-5 h-5 transition-transform duration-300 cursor-pointer ${showRange ? 'rotate-180' : 'rotate-0'}`}
            />
          </button>

          {showRange && (
            <div className='mt-3'>
              <Slider
                range
                value={range}
                onChange={setRange}
                disabled={disabled}
                min={0}     
                max={100}   
              />
              <div className="text-sm text-gray-700 mt-2">
                Min: <span className="font-medium">{range[0]}</span> | Max: <span className="font-medium">{range[1]}</span>
              </div>
            </div>
            )}
        <button className='w-[90%] text-orange-700 border border-orange-700 m-auto mt-[20px] p-[10px] rounded-md cursor-pointer hover:bg-orange-200'>Apply</button>
        </div>

        <GetData />
      </div>
    </div>
  );
};

export default Products;
