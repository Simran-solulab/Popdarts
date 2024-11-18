import Image from "next/image";
import React from "react";

const Product = ({src}) => {
  return (
    <div className="w-[448px] h-[504px] flex  bg-white flex-col gap-6 p-6 rounded-[20px]">
      <div className="flex justify-between text-[#2B99FF]">
        <div className="flex flex-col gap-1">
          <div className="flex gap-2">
            <div className="bg-[#2B99FF] font-[700] text-white py-1 px-2 rounded-[4px]">
              New
            </div>
            <div>Silver & Gold</div>
          </div>
          <div className="text-[10px]">PRO TARGET</div>
        </div>
        <div className="flex flex-col">
          <div className="text-[#2B99FF] font-[700]">34.99$</div>
          <div className="text-[#2B99FF3D] font-[700]">58.00$</div>
        </div>
      </div>
      <div className="flex justify-center items-center pt-9" >
        <Image alt="product " src={src} height={400} width={392} className="w-[179px]  h-[320px]"/>
      </div>
    </div>
  );
};

export default Product;
