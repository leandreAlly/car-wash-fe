'use client';

import Image from 'next/image';
import GlobalButton from '../../shareable/Button';
import { homeCar, rightSlider, leftSlider } from '@/app/utils/images';

const Hero = () => {
  return (
    <section id="profile" className="max-container">
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
          <div className="flex justify-between items-center mt-[-6.984rem] mx-4">
            <Image
              src={leftSlider}
              alt="right-slider"
              width={50}
              height={50}
              className="transform rotate-180"
            />
            <Image src={rightSlider} alt="left-slider" width={50} height={50} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
