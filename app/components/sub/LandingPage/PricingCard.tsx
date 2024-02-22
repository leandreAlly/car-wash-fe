'use client';

import { overlock } from '@/app/utils/fonts';
import { carCard, carCard1, carCard2 } from '@/app/utils/images';
import { Card } from 'antd';
import Image from 'next/image';

const PricingCard = () => {
  return (
    <div className="padding">
      <h2 className={`${overlock.className} text-2xl leading-normal`}>
        Popular Daily
      </h2>
      <div className="flex justify-center items-center flex-1 padding-t gap-5 max-sm:flex-col">
        <Card
          className="flex-1"
          cover={
            <Image
              src={carCard}
              alt="car"
              width={300}
              height={200}
              className="rounded-lg"
            />
          }
        >
          <h3 className={`${overlock.className} text-xl`}>Basic</h3>
          <p className="text-lg">RWF 5000</p>
          <p className="text-lg">Wash and Dry</p>
        </Card>
        <Card
          className="flex-1"
          cover={
            <Image
              src={carCard1}
              alt="car"
              width={300}
              height={200}
              className="rounded-lg"
            />
          }
        >
          <h3 className={`${overlock.className} text-xl`}>Premium</h3>
          <p className="text-lg">RWF 1000</p>
          <p className="text-lg">Wash, Dry and Polish</p>
        </Card>
        <Card
          className="flex-1"
          cover={
            <Image
              src={carCard2}
              alt="car"
              width={300}
              height={200}
              className="rounded-lg"
            />
          }
        >
          <h3 className={`${overlock.className} text-xl`}>Ultimate</h3>
          <p className="text-lg">RWF 15000</p>
          <p className="text-lg">Wash, Dry, Polish and Wax</p>
        </Card>
      </div>
    </div>
  );
};

export default PricingCard;
