import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import { EXPLORE_CARD_ICON } from "../../../public/images";
import Button from "./Button";

const ExploreCard = ({className}) => {
  return (
    <div className=" max-w-[414px] z-10 min-h-[551px] rounded-[20px] overflow-hidden h-full w-full  bg-white flex flex-col ">
      <Marquee autoFill={true} speed={30} className="bg-[#9479FF]">
        <div>Fun & Cultish</div>
      </Marquee>
    <div className="flex flex-col p-2 items-center justify-between gap-[110px]  " >
      <Image className="pt-[48px] flex justify-center" alt="Explore card Icon" src={EXPLORE_CARD_ICON} />
      <div className="text-[#2B99FF]  max-w-[320px] text-center w-full mx-auto " >
      Josh and Jason Carman grew up in Pennsylvania, graduated college, and went on to establish their careers in finance and business.
      </div>
      <Button text='explore og line' className='uppercase' />
    </div>
    </div>
  );
};

export default ExploreCard;
