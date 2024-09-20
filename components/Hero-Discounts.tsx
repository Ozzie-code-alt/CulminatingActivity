// https://cruip.com/create-an-image-accordion-with-tailwind/
// import Image from 'next/image';
import React from 'react';
const items = [
  {
    id: '1',
    url: '/images/sm-1.jpg',
    title: 'September 13',
    description: 'Anniversary Sale',
    tags: ['Floral', 'Highlands', 'Wildflowers', 'Colorful', 'Resilience'],
  },

  {
    id: '2',
    url: '/images/sm-2.jpg',
    title: 'September 13',
    description: 'Anniversary Sale',
    tags: ['Twilight', 'Peaks', 'Silhouette', 'Evening Sky', 'Peaceful'],
  },
  {
    id: '3',
    url: '/images/sm-3.jpg',
    title: 'May 31 - October 29',
    description: 'Avanza Bonanza',
    tags: ['Rocky', 'Ridges', 'Contrast', 'Adventure', 'Clouds'],
  },
];
function Discount() {
  return (
    <>
      <div className='group h-full flex max-md:flex-col justify-center gap-2 w-[80%] mx-auto mb-10 mt-3'>
        {items.map((item, i: number) => {
          return (
            <article
              key={i}
              className='group/article relative w-[500px] rounded-xl overflow-hidden md:group-hover:[&:not(:hover)]:w-[20%] md:group-focus-within:[&:not(:focus-within):not(:hover)]:w-[20%] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.15)] before:absolute before:inset-x-0 before:bottom-0 before:h-1/3  before:transition-opacity md:before:opacity-0 md:hover:before:opacity-100 focus-within:before:opacity-100 after:opacity-0 md:group-hover:[&:not(:hover)]:after:opacity-100 md:group-focus-within:[&:not(:focus-within):not(:hover)]:after:opacity-100 after:absolute after:inset-0 after:bg-white/30 after:backdrop-blur after:rounded-lg after:transition-all focus-within:ring focus-within:ring-indigo-300 bg-transparent'
              
            >
              <a
                className='absolute bottom-0 text-[#ff0000] w-full  z-10  p-3 flex flex-col h-[100px] justify-end group-hover:bg-white group-hover:bg-opacity-70'
                href='#0'
              >
                <h1 className=' text-xl font-medium   md:whitespace-nowrap md:truncate md:opacity-0 group-hover/article:opacity-100 group-focus-within/article:opacity-100 md:translate-y-2 group-hover/article:translate-y-0 group-focus-within/article:translate-y-0 transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] group-hover/article:delay-300 group-focus-within/article:delay-300'>
                  {item?.title}
                </h1>
                <span className=' text-3xl font-medium  md:whitespace-nowrap md:truncate md:opacity-0 group-hover/article:opacity-100 group-focus-within/article:opacity-100 md:translate-y-2 group-hover/article:translate-y-0 group-focus-within/article:translate-y-0 transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] group-hover/article:delay-500 group-focus-within/article:delay-500'>
                  {item?.description}
                </span>
              </a>
              <img
                className='object-cover  h-72 md:h-auto  w-full group-hover:h-full'
                src={item?.url}
                
              />
            </article>
          );
        })}
      </div>
    </>
  );
}

export default Discount;
