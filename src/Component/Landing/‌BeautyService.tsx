import React, { Fragment } from "react";
import Image from "next/image";
import GreenRservation from "@/assent/Img/Landing/GreenRservation.svg";
import Logo from "@/assent/Img/Landing/GreenLogo.svg";
import Flower from "@/assent/Img/Landing/flower.svg";

const BeautyService = () => {
  return (
    <Fragment>
      <div
        className="mt-20  py-4 relative z-10"
        style={{ backgroundImage: `url(${GreenRservation.src})` }}
      >
        <div className="px-28">
          <Image src={Logo} width={90} height={30} alt="" />
        </div>

        <div className="mt-10 mr-[7.5%]">
          <p className="font-medium text-[28px] leading-[47px] text-[#393939]">
            خدمات زیبایی نورانید
          </p>

          <p className="font-regular text-[20px] mt-3 text-[#727272]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است
          </p>
        </div>

        <div className="mt-[5.3%] mr-[55%]">
          <button className="bg-[#DC1E7A] whitespace-nowrap w-36 py-2 px-4 rounded-md text-white font-medium text-sm">
            رزرو نوبت
          </button>
        </div>
      </div>
      <div className=" absolute mr-[65.9%] -mt-3 bg-no-repeat ">
        <Image src={Flower} width={52} height={58} alt="" />
      </div>
    </Fragment>
  );
};

export default BeautyService;
