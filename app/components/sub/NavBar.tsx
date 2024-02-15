'use client';

import { makondo } from '@/app/utils/fonts';
import { hamburger } from '@/app/utils/images';
import { Divider } from 'antd';
import Image from 'next/image';
import Link from 'next/link';

export const navLinks = [
  { href: '#profile', label: 'Profile' },
  { href: '#booking', label: 'Booking' },
  { href: '#offers', label: 'Offers' },
  { href: '#save', label: 'Save' },
  { href: '#about-us', label: 'About Us' },
];

const NavBar = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <Link href="#profile">
          <p
            className={`${makondo.className} leading-normal text-3xl text-black`}
          >
            Car Wash
          </p>
        </Link>
        <ul className="flex-1 flex justify-end items-center gap-5 max-lg:hidden">
          {navLinks.map((link, index) => {
            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="leading-normal text-lg text-normal font-semibold hover:text-primary transition-all duration-300 ease-in-out"
                >
                  {link.label}
                </Link>
                {index !== navLinks.length - 1 && (
                  <Divider
                    type="vertical"
                    orientation="center"
                    orientationMargin="100"
                    className=" h-5 bg-[#000]"
                  />
                )}
              </li>
            );
          })}
        </ul>
        <div className="hidden max-lg:block">
          <Image src={hamburger} alt="hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
