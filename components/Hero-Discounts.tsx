// https://cruip.com/create-an-image-accordion-with-tailwind/
import Image from 'next/image';
import React from 'react';
const items = [
  {
    id: '1',
    url: 'https://res.cloudinary.com/dzl9yxixg/image/upload/adrian_ibdgmu.png',
    title: 'Adrian Paul',
    description: 'COO & Co-Founder',
    tags: ['Floral', 'Highlands', 'Wildflowers', 'Colorful', 'Resilience']
  },

  {
    id: '2',
    url: 'https://res.cloudinary.com/dzl9yxixg/image/upload/person-portrait_pwxyyj.jpg',
    title: 'Flualy Cual',
    description: 'Founder & CEO',
    tags: ['Twilight', 'Peaks', 'Silhouette', 'Evening Sky', 'Peaceful']
  },
  {
    id: '3',
    url: 'https://res.cloudinary.com/dzl9yxixg/image/upload/naymr_bmv5ac.png',
    title: 'Naymur Rahman',
    description: 'CTO & Co-Founder',
    tags: ['Rocky', 'Ridges', 'Contrast', 'Adventure', 'Clouds']
  }
];
function Discount() {
  return (
    <>
      <div className='group h-full flex max-md:flex-col justify-center gap-2 w-[80%] mx-auto mb-10 mt-3'>
        {items.map((item, i: number) => {
          return (
            <article className='group/article relative w-full rounded-xl overflow-hidden md:group-hover:[&:not(:hover)]:w-[20%] md:group-focus-within:[&:not(:focus-within):not(:hover)]:w-[20%] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.15)] before:absolute before:inset-x-0 before:bottom-0 before:h-1/3 before:bg-gradient-to-t before:from-black/50 before:transition-opacity md:before:opacity-0 md:hover:before:opacity-100 focus-within:before:opacity-100 after:opacity-0 md:group-hover:[&:not(:hover)]:after:opacity-100 md:group-focus-within:[&:not(:focus-within):not(:hover)]:after:opacity-100 after:absolute after:inset-0 after:bg-white/30 after:backdrop-blur after:rounded-lg after:transition-all focus-within:ring focus-within:ring-indigo-300'>
              <a
                className='absolute inset-0 text-white z-10  p-3 flex flex-col justify-end'
                href='#0'
              >
                <h1 className=' text-xl font-medium   md:whitespace-nowrap md:truncate md:opacity-0 group-hover/article:opacity-100 group-focus-within/article:opacity-100 md:translate-y-2 group-hover/article:translate-y-0 group-focus-within/article:translate-y-0 transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] group-hover/article:delay-300 group-focus-within/article:delay-300'>
                  {item?.title}
                </h1>
                <span className=' text-3xl font-medium  md:whitespace-nowrap md:truncate md:opacity-0 group-hover/article:opacity-100 group-focus-within/article:opacity-100 md:translate-y-2 group-hover/article:translate-y-0 group-focus-within/article:translate-y-0 transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] group-hover/article:delay-500 group-focus-within/article:delay-500'>
                  {item?.description}
                </span>
              </a>
              <Image
                className='object-cover h-72 md:h-[70%]  w-full'
                src={item?.url}
                width='960'
                height='480'
                alt='Image 01'
              />
            </article>
          );
        })}
      </div>
    </>
  );
}

export default Discount;
