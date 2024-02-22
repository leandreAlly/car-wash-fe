import { Input } from 'antd';
import React from 'react';
import GlobalButton from '../../shareable/Button';
import { makondo } from '@/app/utils/fonts';

const Contact = () => {
  return (
    <div className="max-container px-40 p-5 max-sm:px-10">
      <div className="flex flex-1 gap-32 max-sm:flex-col max-sm:w-full max-sm:gap-10">
        <div className="w-[20%] max-sm:w-[100%]">
          <h3 className={`${makondo.className} text-2xl font-bold`}>
            Car Wash
          </h3>
        </div>
        <div className="w-full max-sm:w-[100%] pt-4">
          <p className="text-sm font-semibold">New to Car Wash? Join Us Now</p>
          <div className="flex flex-1 gap-16 mt-5 max-sm:flex-col max-sm:w-full">
            <Input
              placeholder="Enter your email"
              className="bg-white w-full max-sm:hidden"
              style={{ backgroundColor: 'white', color: 'black' }}
            />
            <div className="max-sm:-mt-10 max-sm:w-[100%]">
              <GlobalButton className="w-full">Register Now</GlobalButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
