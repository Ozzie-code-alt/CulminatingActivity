import React from 'react';

const Header = () => {
  return (
    <div className='w-full relative mx-auto px-[150px] py-5 flex justify-between bg-white'>
      <img src='/images/sm-logo-1.png' alt='' className='h-[40px]' />
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        // stroke-width='1.5'
        stroke='#FF0000'
        className='size-6'
      >
        <path
          stroke-linecap='round'
          stroke-linejoin='round'
          d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
        />
      </svg>
      <audio controls autoPlay={true} loop className='absolute hidden z-10 h-full bottom-0'>
        <source src='/song.mp3' type='audio/mp3' />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default Header;
