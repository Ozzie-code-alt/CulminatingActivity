import Header from '@/components/Header';
import Discount from '@/components/Hero-Discounts';

import Section2Page from '@/components/Section2';

export default function Home() {
  return (
    <div className=''>
      <Header />

      <Discount />
      {/* <Section1Page /> */}
      <Section2Page />
    </div>
  );
}
