import React from 'react';
import Laptop from '../assets/laptop.jpg';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#ffa500] font-bold'>LEARN FROM EXPERTS</p>
          <p>
          Are you ready to embark on a journey of knowledge and personal growth? 
          Look no further! Our course-selling website is here to help you unlock your full potential through a vast array of educational opportunities.
          Browse our courses now and take the first step toward a brighter future!
          </p>
          <button className='bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
