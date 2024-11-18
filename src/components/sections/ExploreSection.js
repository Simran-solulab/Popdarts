"use client";
import React, { useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import Layout from "../subComponents/Layout";
import ExploreCard from "../subComponents/ExploreCard";
import Image from "next/image";
import {
  EXPLORE_HOVER_CONTAINER,
  PRODUCT5,
  PRODUCT6,
  RIGHT_ARROW,
} from "../../../public/images";
import { Swiper, SwiperSlide } from "swiper/react";
import Product from "../subComponents/Product";
import "swiper/css";
import "swiper/css/navigation";
import Button from "../subComponents/Button";

const productsData = [
  {
    item1: "11",
    product: PRODUCT5,
  },
  {
    item1: "12",
    product: PRODUCT6,
  },
  {
    item1: "13",
    product: PRODUCT5,
  },
  {
    item1: "14",
    product: PRODUCT6,
  },
  {
    item1: "15",
    product: PRODUCT5,
  },
];
export const ExploreSection = () => {
  const sliderRef = useRef(null);
  const sliderNext = () => {
    if (sliderRef.current) {
      sliderRef.current.swiper.slideNext();
    }
  };
  const [hover, setHover] = useState(false);
  return (
    <div className="pt-[96px] bg-[#2B99FF]">
      <Layout className="justify-center">
        <div className=" w-full max-w-[1100px] mx-auto flex flex-col  leading-[96px]  text-[96px] font-denim font-[700] text-center text-white">
          EXPLORE <span>POPDARTS PRODUCTS</span> LINES OF FUN
        </div>

        <div className="text-white flex justify-center mt-6 text-[16px] font-denim">
          The hottest game of the summer!
        </div>
        <div
          className="py-[48px] flex mx-auto  w-full rounded-[20px] max-w-[1376px]  overflow-hidden z-20 "
          onMouseLeave={() => setHover(false)}
        >
          <div
            className="z-20 rounded-[20px]  "
            onMouseEnter={() => setHover(true)}
          >
            <ExploreCard className="" />
          </div>
          <div className="relative rounded-r-[20px] overflow-hidden w-full -left-4 bg-hover-container    "

           >
        

            <div
              className={`h-[551px] absolute top-0 left-0  max-w-[978px] transition-transform duration-500  w-full  z-0 bg-[#F5F8FC]  overflow-hidden rounded-r-[20px] ${
                hover ? "-translate-x-0 " : "  -translate-x-full"
              }`}
            >
              <div className=" ml-4 relative">
                <div className=" absolute right-0 w-[248px] h-[551px] z-10 bg-slider-blur" />
                <div className="absolute z-10  right-6 top-[45%]  p-6 rounded-[24px] flex items-center justify-center bg-[#F5F8FC] "
                 onClick={sliderNext} >
                  <Image
                    alt="right arrow"
                    src={RIGHT_ARROW}
                   
                    className=" rounded-[24px] w-[20px] h-[20px] "
                  />
                </div>
                <Swiper
                  spaceBetween={10}
                  slidesPerView={2}
                  ref={sliderRef}
                  modules={Navigation}
                  className=" flex  py-6 h-[551px]  w-full "
                >
                  <div className="flex h-[551px] relative">
                    {productsData.map((item) => (
                      <SwiperSlide className="flex py-6" key={item.item1}>
                        <div className="flex justify-center items-center">
                          <Product src={item.product} />
                        </div>
                      </SwiperSlide>
                    ))}
                  </div>
                  ...
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        <div className="flex  pt-[48px] pb-[96px] mx-auto  justify-center" >
                    <Button text='shop all' className='bg-white !text-[#2B99FF] uppercase max-w-[1376px]'  />
        </div>
      </Layout>
    </div>
  );
};
