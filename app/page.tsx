import Header from '@/components/Header';
import Discount from '@/components/Hero-Discounts';

import Section2Page from '@/components/Section2';

export default function Home() {
  return (
    <div className=''>
      <Header />

      <div className='wrapper'>
        <section className='bg-[url(/images/sm-bg.webp)] text-white  h-screen  w-full  grid place-content-center sticky top-0 bg-opacity-100 bg-black'>
          <div className='absolute inset-0 bg-black opacity-60'></div>
          <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>

          <h1 className='2xl:text-[100px] text-white z-10 text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]'>
            May Bargain, Araw-Araw
          </h1>
          <h1 className='2xl:text-[120px] text-[#ffffff] text-5xl px-8 font-semibold text-center tracking-tight leading-[120%] capitalize  z-20'>
            Aton guid ini!
          </h1>
        </section>
      </div>


      <Discount />
      {/* <Section1Page /> */}
      <Section2Page />
    </div>
  );
}
