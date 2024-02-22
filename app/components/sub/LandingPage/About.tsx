import { aboutCar } from '@/app/utils/images';
import Image from 'next/image';
import GlobalButton from '../../shareable/Button';

const description = [
  {
    title: 'Seats washing',
  },
  {
    title: 'acuum cleaning',
  },
  {
    title: 'Interior wet cleaning',
  },
  {
    title: 'Window wiping',
  },
];

const OurServices = () => {
  return (
    <div className="max-container p-10 ">
      <div className="flex flex-1 flex-grow justify-center  gap-10 mx-auto max-sm:flex-col">
        <div className="">
          <Image src={aboutCar} alt="about-car" width={600} height={600} />
        </div>
        <div>
          <h2 className="text-xl font-bold mb-8">
            Thinking About what to get?
          </h2>

          {description.map((desc, index) => {
            return (
              <p key={index} className="pl-5 text-secondary">
                <span className="inline-block h-2 w-2 bg-secondary rounded-full mr-2"></span>
                {desc.title}
              </p>
            );
          })}

          <GlobalButton className="rounded-xl mt-10 mx-5">
            Explore More
          </GlobalButton>
        </div>
      </div>
      <div className="border-b-2 border-b-[#6C6C6C] mt-10"></div>
    </div>
  );
};

export default OurServices;
