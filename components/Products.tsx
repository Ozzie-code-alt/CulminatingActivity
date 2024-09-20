'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';

type CardProps = {
  name?: string;
  price?: string;
  url?: string;
};

const Card2 = ({ name, price, url }: CardProps) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <div className='w-[300px] h-[400px]  mx-auto relative border border-slate-500 rounded-md '>
      <div className='dark:bg-white justify-center bg-gray-50  dark:border-none  rounded-2xl'>
        <div className='w-full h-56 relative'>
          <motion.button
            className='absolute top-2 right-3 z-20 text-2xl text-white'
            onClick={handleClick}
            animate={{ scale: isActive ? 1.2 : 1 }}
            transition={{ type: 'spring', stiffness: 1000, damping: 10 }}
          >
            {isActive ? (
              <>
                <Heart className=' fill-white' />
              </>
            ) : (
              <>
                <Heart />
              </>
            )}
          </motion.button>
          <Image
            src={url ?? ""}
            alt='shoes'
            width={1000}
            height={1000}
            className={`w-full rounded-2xl object-cover `}
          />
        </div>
        <article className='text-black space-y-2 p-2 pb-3 absolute pt-4 bottom-0 w-full'>
          <div className='flex justify-between'>
            <h1 className='font-semibold text-xl text-base-dark'>{name}</h1>
            <span className='font-medium text-xl text-base-dark'>{`${price}PHP`}</span>
          </div>
          <p className='text-xs  text-black'>Lorem ipsum, dolor sit amet consectetur adipisicing</p>

          <button className='w-full hover:text-white flex justify-center items-center gap-2 p-3 rounded-md border-black border-2 text-black hover:bg-[#ff0000]'>
            Add to cart
          </button>
        </article>
      </div>
    </div>
  );
};

export default Card2;
