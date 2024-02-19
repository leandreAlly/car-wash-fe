'use client';

import Image from 'next/image';
import GlobalButton from '../../shareable/Button';
import { homeCar } from '@/app/utils/images';

const Hero = () => {
  return (
    <section id="profile">
      <div className="flex flex-1 justify-center items-center">
        <div>
          <div className="p-20 mx-auto">
            <GlobalButton
              type="primary"
              className="z-10 w-[21.5rem] left-1/2 transform -translate-x-1/2 top-[28rem] hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Shop Now
            </GlobalButton>
            <Image
              src={homeCar}
              alt="home-car"
              width={1000}
              height={1000}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
