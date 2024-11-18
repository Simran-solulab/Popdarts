import Image from "next/image";
import React from "react";
import { APPLE_PLAY, GOGGLE_PLAY, MOBILE, PRODUCT1, PRODUCT2, PRODUCT3, PRODUCT7 } from "../../../public/images";

const FooterSection = () => {
  return (
    <div className="mt-[80px]">
      <div className="pt-[122px] pb-8  flex justify-center ">
        <div className="bg-[#2B99FF] relative max-w-[1376px]  p-6 w-full rounded-[20px]">
          <div className="flex flex-col gap-[104px]" >
          <div className="flex flex-col gap-2 ">
            <div className="font-denim font-[700] leading-[60px] text-white text-[60px] tracking-tighter ">
              POPDARTS: SCORE KEEPER
            </div>
            <div className="flex  max-w-[460px] text-[16px] w-full text-white">
              Josh and Jason Carman grew up in Pennsylvania, graduated college,
              and went on to establish their careers in finance.
            </div>
          </div>
          <div className="flex gap-2">
            <Image
              alt="apple play"
              className="h-[48px] w-[132px]"
              src={APPLE_PLAY}
            />
            <Image
              alt="goggle play"
              className="h-[48px] w-[132px]"
              src={GOGGLE_PLAY}
            />
          </div>
          </div>
          <Image alt="mobile"  className="absolute z-10 -top-[89px] right-[135px] "  src={MOBILE}/>
          <Image alt="mobile"  className="absolute top-[113px] -rotate-[25deg] right-8 h-[157px] w-[78px]  "  src={PRODUCT1}/>
          <Image alt="mobile"  className="absolute top-[123px] left-[663px] rotate-[58deg]  h-[157px] w-[78px]  "  src={PRODUCT2}/>
          <Image alt="mobile"  className="absolute top-[10px] left-[889px] -rotate-[108deg]  h-[157px] w-[78px]  "  src={PRODUCT3}/>

          <Image alt="mobile"  className="absolute bottom-0 left-[663px]    "  src={PRODUCT7}/>


        </div>
      </div>
    </div>
  );
};

export default FooterSection;
