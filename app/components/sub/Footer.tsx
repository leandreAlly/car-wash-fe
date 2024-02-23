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
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75126.51463154932!2d30.00997893994196!3d-1.9303718997165407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca4258ed8e797%3A0xf32b36a5411d0bc8!2sKigali%2C%20Rwanda!5e0!3m2!1sen!2sin!4v1708704125115!5m2!1sen!2sin"
            width="600"
            height="450"
            className="w-full h-40 max-sm:h-30 pt-5"
            style={{ border: 0 }}
            // allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Footer;
