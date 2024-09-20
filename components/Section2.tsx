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
        <div className='wrapper'>
          <section className='text-white  h-screen  w-full  grid place-content-center sticky top-0'>
            <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>

            <h1 className='2xl:text-[150px] text-[#ff0000] text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]'>
              May Bargain, Araw-Araw
            </h1>
            <h1 className='2xl:text-[150px] text-[#ff0000] text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]'>
              Aton guid ini!
            </h1>
          </section>
        </div>

        <section className='text-white   w-full'>
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

        <footer className='group bg-slate-950 '>
          <h1 className='text-[16vw]  translate-y-20 leading-[100%] uppercase font-semibold text-center bg-gradient-to-r from-gray-400 to-gray-800 bg-clip-text text-transparent transition-all ease-linear'>
            ui-layout
          </h1>
          <div className='bg-black h-40 relative z-10 grid place-content-center text-2xl rounded-tr-full rounded-tl-full'></div>
        </footer>
      </main>
    </ReactLenis>
  );
}
