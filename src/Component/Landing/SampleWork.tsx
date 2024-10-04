'use client'
import React, { Fragment , useState } from "react";
import Background from "@/assent/Img/Landing/FrameExample.svg";
import Image from "next/image";
import orginalWomanExmple from "@/assent/Img/Landing/orginalWomanExample.svg";
import LineExtra from "@/assent/Img/Landing/LineExample.svg";
import WomanExample1 from "@/assent/Img/Landing/WomanExample1.svg";
import WomanExample2 from "@/assent/Img/Landing/WomanExample2.svg";
import Flower from "@/assent/Img/Landing/flower.svg";

const SampleWork = () => {
    const [mainImage, setMainImage] = useState(orginalWomanExmple);
    const [mainImage2, setMainImage2] = useState(orginalWomanExmple);
    const [mainImage3, setMainImage3] = useState(orginalWomanExmple);
  return (
    <Fragment>
      <div className="mt-20 px-24 mb-20">
        <p className="font-medium  text-xl text-[#393939]">
          برخی از نمونه کار های کلینیک نورانید
        </p>
      </div>
      <div className=" mr-[68%] mt-24 absolute">
      <Image src={Flower} width={52} height={58} alt="" />
      </div>
      <div className="flex gap-20 mt-8 items-center">
        <div
          className="h-96 md:w-[383px] w-96 md:mr-11"
          style={{ backgroundImage: `url(${Background.src})` }}
        >
          <Image
            src={LineExtra}
            width={57}
            height={124}
            alt=""
            className=" absolute mt-36 mr-10"
          />

          <Image
            src={WomanExample1}
            width={50}
            height={50}
            alt=""
            onClick={() => setMainImage(WomanExample1)}
            className="absolute mt-[248px] mr-12 border border-[#BCBCBC] rounded-full cursor-pointer"
          />

          <Image
            src={WomanExample2}
            width={50}
            height={50}
            alt=""
            onClick={() => setMainImage(WomanExample2)}
            className="absolute mt-[180px] mr-5 border border-[#BCBCBC] rounded-full cursor-pointer"
          />

          <Image
            src={WomanExample2}
            width={50}
            height={50}
            alt=""
            onClick={() => setMainImage(WomanExample2)}
            className="absolute mt-[110px] mr-5 border border-[#BCBCBC] rounded-full cursor-pointer"
          />
          <Image
            src={mainImage}
            width={200}
            height={200}
            alt=""
            onClick={() => setMainImage(orginalWomanExmple)}
            className="mt-[89px] mr-[90px] md:mr-24 "
          />

          <p className="mr-36 mt-4 font-medium text-[#393939] text-base">
            لیزر مو های زائد
          </p>

          <p className="mr-36 mt-2 font-medium text-[#727272] text-sm">
            دکتر : دنیا رحیمی
          </p>
        </div>

        <div
          className="h-96 w-[383px] mr-11 hidden md:block"
          style={{ backgroundImage: `url(${Background.src})` }}
        >
          <Image
            src={LineExtra}
            width={57}
            height={124}
            alt=""
            className=" absolute mt-36 mr-10"
          />
           <Image
            src={WomanExample1}
            width={50}
            height={50}
            alt=""
            onClick={() => setMainImage2(WomanExample1)}
            className="absolute mt-[248px] mr-12 border border-[#BCBCBC] rounded-full cursor-pointer"
          />

          <Image
            src={WomanExample2}
            width={50}
            height={50}
            alt=""
            onClick={() => setMainImage2(WomanExample2)}
            className="absolute mt-[180px] mr-5 border border-[#BCBCBC] rounded-full cursor-pointer"
          />

          <Image
            src={WomanExample2}
            width={50}
            height={50}
            alt=""
            onClick={() => setMainImage2(WomanExample2)}
            className="absolute mt-[110px] mr-5 border border-[#BCBCBC] rounded-full cursor-pointer" 
          />
          <Image
            src={mainImage2}
            width={200}
            height={200}
            alt=""
            onClick={() => setMainImage2(orginalWomanExmple)}
            className="mt-[89px] mr-24 cursor-pointer"
          />
          <p className="mr-36 mt-4 font-medium text-[#393939] text-base">
            لیزر مو های زائد
          </p>

          <p className="mr-36 mt-2 font-medium text-[#727272] text-sm">
            دکتر : دنیا رحیمی
          </p>
        </div>

        <div
          className="h-96 w-[383px] mr-7 hidden md:block"
          style={{ backgroundImage: `url(${Background.src})` }}
        >
          <Image
            src={LineExtra}
            width={57}
            height={124}
            alt=""
            className=" absolute mt-36 duration-300 mr-10"
          />
           <Image
            src={WomanExample1}
            width={50}
            height={50}
            alt=""
            onClick={() => setMainImage3(WomanExample1)}
            className="absolute mt-[248px] mr-12 duration-300 border border-[#BCBCBC] rounded-full  cursor-pointer "
          />

          <Image
            src={WomanExample2}
            width={50}
            height={50}
            alt=""
            onClick={() => setMainImage3(WomanExample2)}
            className="absolute mt-[180px] mr-5 duration-300  border border-[#BCBCBC] rounded-full  cursor-pointer"
          />

          <Image
            src={WomanExample2}
            width={50}
            height={50}
            alt=""
            onClick={() => setMainImage3(WomanExample2)}
            className="absolute mt-[110px] mr-5 duration-300 border border-[#BCBCBC] rounded-full  cursor-pointer"
          />
          <Image
            src={mainImage3}
            width={200}
            height={200}
            alt=""
            onClick={() => setMainImage3(orginalWomanExmple)}
            className="mt-[89px] mr-24 duration-300 cursor-pointer"
          />
          <p className="mr-36 mt-4 font-medium text-[#393939] text-base">
            لیزر مو های زائد
          </p>

          <p className="mr-36 mt-2 font-medium text-[#727272] text-sm">
            دکتر : دنیا رحیمی
          </p>
        </div>
      </div>
      <div className=" mr-[33%] -mt-20 absolute">
      <Image src={Flower} width={52} height={58} alt="" />
      </div>
    </Fragment>
  );
};

export default SampleWork;


