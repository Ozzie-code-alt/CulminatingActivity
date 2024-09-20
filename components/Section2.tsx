//
'use client';
import { ReactLenis } from 'lenis/react';
import Card2 from './Products';

const products = [
  {
    name: '7-Up Can',
    url: 'drink-1.png',
    price: '35',
  },
  {
    name: '7-Up 1.5',
    url: 'drink-2.png',
    price: '35',
  },
  ,
  {
    name: 'Coke 1.5',
    url: 'drink-3.jpg',
    price: '35',
  },
  {
    name: 'Coke Can',
    url: 'drink-4.png',
    price: '35',
  },
  {
    name: 'Mt. Dew Can',
    url: 'drink-5.jpg',
    price: '35',
  },
  {
    name: 'Mt. Dew 1.5',
    url: 'drink-6.png',
    price: '35',
  },
  {
    name: 'Pepsi 1.5',
    url: 'drink-7.jpg',
    price: '35',
  },
  {
    name: 'Pepsi Can',
    url: 'drink-8.jpg',
    price: '35',
  },
  {
    name: 'Sprite Can Lemon',
    url: 'drink-9.jpg',
    price: '35',
  },
  {
    name: 'Sprite Can',
    url: 'drink-10.png',
    price: '35',
  },
];

export default function index(): JSX.Element {
  return (
    <ReactLenis root>
      <main className=''>
        <div className='overflow-hidden whitespace-nowrap my-[40px]'>
          <div className='animate-marquee flex w-full items-center gap-x-6 flex-row'>
            <img src='/images/sm-logo-1.png' alt='' className='h-[70px]' />
            <text className='text-[#ff0000] font-bold text-5xl'>
              MAY BARGAIN ARAW-ARAW,ATON GUID INI
            </text>

            <img src='/images/sm-logo-1.png' alt='' className='h-[70px]' />
            <text className='text-[#ff0000] font-bold text-5xl'>
              MAY BARGAIN ARAW-ARAW,ATON GUID INI
            </text>
            <img src='/images/sm-logo-1.png' alt='' className='h-[70px]' />
            <text className='text-[#ff0000] font-bold text-5xl'>
              MAY BARGAIN ARAW-ARAW,ATON GUID INI
            </text>
            <img src='/images/sm-logo-1.png' alt='' className='h-[70px]' />
            <text className='text-[#ff0000] font-bold text-5xl'>
              MAY BARGAIN ARAW-ARAW,ATON GUID INI
            </text>
            <img src='/images/sm-logo-1.png' alt='' className='h-[70px]' />

            {/* <span className='text-red-600 font-bold text-5xl'>
              Shop now!
              <img src='/images/sm-logo-1.png' alt='' className='h-[40px]' />
            </span>

            <span className='text-red-600 font-bold text-5xl'>
              Shop now!
              <img src='/images/sm-logo-1.png' alt='' className='h-[40px]' />
            </span>

            <span className='text-red-600 font-bold text-5xl'>Shop now! </span> */}
          </div>
        </div>
        <section className='text-white mb-28  w-full'>
          <div className='grid grid-cols-12 gap-2'>
            {/* left part */}
            <div className='grid gap-2 col-span-4'>
              {products.slice(0, 5).map((product, i) => (
                <figure key={i} className='w-full'>
                  <Card2
                    name={product?.name}
                    price={product?.price}
                    url={`/images/${product?.url}`}
                  />
                </figure>
              ))}
            </div>
            {/* sticky part */}
            <div className='sticky top-0 h-screen w-full col-span-4 gap-2  grid grid-rows-3'>
              <figure className='w-full h-full mb-10 '>
                <img
                  src='/images/group-1.png'
                  alt=''
                  className='transition-all duration-300 h-full w-full  align-bottom object-cover rounded-md '
                />
              </figure>
              <figure className='w-full h-full mb-10 '>
                <img
                  src='/images/group-2.png'
                  alt=''
                  className='transition-all duration-300 h-full w-full align-bottom object-cover rounded-md '
                />
              </figure>
              <figure className='w-full h-full mb-10'>
                <img
                  src='/images/group-3.png'
                  alt=''
                  className='transition-all duration-300 h-full w-full  align-bottom object-cover rounded-md '
                />
              </figure>
            </div>
            {/* right part */}
            <div className='grid gap-2 col-span-4'>
              {products.slice(5, 9).map((product, i) => (
                <figure key={i} className='w-full'>
                  <Card2
                    name={product?.name}
                    price={product?.price}
                    url={`/images/${product?.url}`}
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <footer className='flex justify-between h-[200px] px-[150px] bg-[#ff0000] items-center py-[40px]'>
          <div className='flex-col justify-between items-center text-white'>
            <p>HOME</p>
            <p>ABOUT US</p>
            <p>CONTACT US</p>
          </div>
          <div className='py-2 text-white'>
            <div className='flex gap-x-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                // stroke-width='1.5'
                stroke='currentColor'
                className='size-6'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                />
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z'
                />
              </svg>

              <p>Iloilo Supermart - Mandurriao</p>
            </div>
            <div className='flex gap-x-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                // stroke-width='1.5'
                stroke='currentColor'
                className='size-6'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                />
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z'
                />
              </svg>

              <p>Iloilo Supermart - Jaro</p>
            </div>
          </div>
          <img src='/images/logo-white.png' alt='' className='h-[40px]' />
        </footer>
      </main>
    </ReactLenis>
  );
}
