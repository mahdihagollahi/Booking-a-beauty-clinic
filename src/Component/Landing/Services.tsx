import React, { Fragment } from "react";
import Image from "next/image";
import ServicePhoto1 from "@/assent/Img/Landing/ServicePhoto1.svg";
import servicePhoto2 from "@/assent/Img/Landing/servicePhoto2.svg";
import ServicePhoto3 from "@/assent/Img/Landing/ServicePhoto3.svg";
import ServicePhoto4 from "@/assent/Img/Landing/ServicePhoto4.svg";
import Flower from "@/assent/Img/Landing/flower.svg";
import EllipseService from "@/assent/Img/Landing/EllipseService.svg";
import EllipseRevers from "@/assent/Img/Landing/EllipseRevers.svg";

function Services() {
  return (
    <Fragment>
      <div className="bg-white py-2">
        <div className="flex ">
          <div className="absolute mr-[26%] -mt-2">
            <Image src={EllipseService} width={490} height={530} alt="" />
          </div>
          <div className=" px-20 py-20">
            <h3 className="font-medium text-xl text-[#393939] mr-8 mt-14">
              خدمات نورانید
            </h3>

            <div className="mt-5 font-regular text-base mr-8 text-[#A5A5A5]">
              <p>
                کلینیک تخصصی پوست و مو نورانید ارائه دهنده خدمات ویژه جوانسازی
              </p>
              <p className="mt-2">
                پوست با لیزر، لاغری با دستگاه، لیزر موهای زائد، جراحی زیبایی و
                فیشیال
              </p>
              <p className="mt-2">صورت است.</p>
            </div>

            <div className="absolute mr-[30%] -m-[5.9%]">
              <Image src={EllipseRevers} width={490} height={530} alt="" />
            </div>
            <div className="mt-12 mr-7">
              <button className="bg-[#DC1E7A] whitespace-nowrap w-36 py-2 px-4 rounded-md text-white font-medium text-sm">
                مشاهده بیشتر
              </button>
            </div>
          </div>
          <div className="mr-[12%] mt-32 ">
            <Image src={servicePhoto2} width={226} height={226} alt="" />
          </div>
          <div className="absolute mr-[65%]">
            <Image src={ServicePhoto1} width={226} height={226} alt="" />
          </div>
          <div className="mt-24 mr-[76%] absolute">
            <Image src={ServicePhoto4} width={226} height={226} alt="" />
          </div>
          <div className="mt-[15.5%]  mr-[67.9%] absolute ">
            <Image src={ServicePhoto3} width={226} height={226} alt="" />
          </div>
        </div>
      </div>
      <div className=" mr-[33.9%] mt-[10px]">
        <Image src={Flower} width={52} height={58} alt="" />
      </div>
    </Fragment>
  );
}

export default Services;
