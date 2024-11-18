import Image from "next/image";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import { ACCOUNT, CART, CLOSE_ICON, LOGO, NAVBAR_MARQUEE, SEARCH_ICON } from "../../../public/images";
import Layout from "./Layout";

const Navbar = () => {
  const [showBanner, setShowBanner] = useState(true);
  return (
    <div className="sticky top-0  z-50 bg-white  ">
      {showBanner && (
        <div className="bg-[#2B99FF] flex justify-center px-8 items-center  w-full">
          <Marquee autoFill={true} speed={20} className="py-2 w-full ">
            <div className="text-white text-[10px] overflow-hidden gap-2 uppercase flex font-semibold">
              &nbsp;{" "}
              <Image
                alt="popdart icon"
                src={NAVBAR_MARQUEE}
                height={10}
                width={13}
                className="h-[10px] w-[13px]"
              />{" "}
              Fast & Free Shipping (USA) On all orders over $50* excluding Board
              Edition &nbsp; -
            </div>
          </Marquee>
          <div className="w-[440px] h-[32px] bg-blur-gradient z-10 relative -left-10" />
          <Image
            alt="close Icon"
            width={16}
            height={16}
            className="w-4 h-4 cursor-pointer"
            src={CLOSE_ICON}
            onClick={() => setShowBanner(false)}
          />
        </div>
      )}
      <Layout className="flex justify-between p-6 pl-8 items-center">
        <Image alt="popdart Icon" src={LOGO} />
        <div className="flex font-denim font-bold text-[16px] text-[#2B99FF] gap-6">
          <div>SHOP</div>
          <div>PLAY</div>
          <div>CONNECT</div>
        </div>
        <div className="flex gap-5">
          <Image alt="search" src={SEARCH_ICON} />
          <Image alt="Account" src={ACCOUNT} />
          <Image alt="cart" src={CART} />
        </div>
      </Layout>
    </div>
  );
};


export default Navbar;
