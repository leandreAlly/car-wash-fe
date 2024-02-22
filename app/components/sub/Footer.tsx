import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className="max-container pt-10 max-sm:px-20">
      <div className="flex flex-1 justify-between max-sm:flex-col">
        <div className="leading-9">
          <h2 className="text-xl uppercase font-semibold mb-4">help</h2>
          <Link href="#" className="block">
            Help Center
          </Link>
          <Link href="#">How to Shop</Link>
        </div>
        <div className="leading-9">
          <h2 className="text-xl uppercase font-semibold mb-4 max-sm:my-5">
            About
          </h2>
          <Link href="#" className="block">
            About Car Wash
          </Link>
          <Link href="#" className="block">
            Terms & Conditions
          </Link>
          <Link href="#">Privacy Policy</Link>
        </div>
        <div className="leading-9">
          <h2 className="text-xl uppercase font-semibold mb-4 max-sm:my-5">
            Contact us
          </h2>
          <Link href="#" className="block">
            Phone: +94 11 23145678
          </Link>
          <Link href="#" className="block">
            Open Hour: Every day 8.00 am- 5.00pm
          </Link>
          <Link href="#">Email: info@example.com</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
