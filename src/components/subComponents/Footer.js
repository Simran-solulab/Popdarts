import React from "react";
import Layout from "./Layout";
import Image from "next/image";
import { FACEBOOK, INSTA, TIKTOK, YOUTUBE } from "../../../public/images";
import Button from "./Button";

const Footer = () => {
  return (
    <Layout className="!max-w-[1376px] mb-[126px]">
      <div className="bg-[#F5F8FC] rounded-[20px] flex p-6">
        <div className="w-full flex flex-col gap-[184px]">
          <div className="text-[#2B99FF] font-denim font-[700]">
            Connect community
          </div>
          <div className="flex gap-[13px]">
            <div className="bg-white rounded-[8px] p-3">
              <Image alt="social icon" src={INSTA} />
            </div>
            <div className="bg-white rounded-[8px] p-3">
              <Image alt="social icon" src={TIKTOK} />
            </div>
            <div className="bg-white rounded-[8px] p-3">
              <Image alt="social icon" src={FACEBOOK} />
            </div>
            <div className="bg-white rounded-[8px] p-3">
              <Image alt="social icon" src={YOUTUBE} />
            </div>
          </div>
        </div>
        <div className="max-w-[846px]  flex flex-col justify-between w-full">
          <div className="text-[#2B99FF] font-denim font-[400] max-w-[400px] w-full">
            Get 10% off your first order, exclusive early access to new product
            launches, and the opportunity to suggest new products. Plus, enter
            our weekly draw to win free sets. Don&apos;t miss out—join now!
          </div>
          <div className="flex " >
            <input className="max-w-[622px]  border-b-[#2B99FF] w-full focus-none border-none outline-none bg-[#F5F8FC] placeholder-[#2B99FF]/20 font-[700] text-[32px] tracking-tight" placeholder="ENTER YOU EMAIL" /> <Button text='subscribe' className='!w-[200px] uppercase text-[16px]' />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Footer;
