import React, { Fragment } from "react";
import Image from "next/image";
import ServicePhoto1 from "@/assent/Img/Landing/ServicePhoto1.svg";
import servicePhoto2 from "@/assent/Img/Landing/servicePhoto2.svg";
import ServiceFrame from "@/assent/Img/Service/ServiceFrame.svg";
import ServicePhoto3 from "@/assent/Img/Landing/ServicePhoto3.svg";
import ServicePhoto4 from "@/assent/Img/Landing/ServicePhoto4.svg";
import Flower from "@/assent/Img/Landing/flower.svg";
import EllipseService from "@/assent/Img/Landing/EllipseService.svg";
import EllipseRevers from "@/assent/Img/Landing/EllipseRevers.svg";
import Link from "next/link";
function Services() {
  return (
    <Fragment>
      <div className="bg-white relative z-10 py-2 mt-4">
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
              <div className=" mr-[31.6%] -mt-9 absolute">
                <Image src={Flower} width={52} height={58} alt="" />
              </div>
              <p className="mt-2">صورت است.</p>
            </div>

            <div className="absolute mr-[30%] -m-[5.9%]">
              <Image src={EllipseRevers} width={490} height={530} alt="" />
            </div>
            <div className="mt-12 mr-7">
            <Link href='/Service'>
              <button className="bg-[#DC1E7A] whitespace-nowrap w-36 py-2 px-4 rounded-md text-white font-medium text-sm">
                مشاهده بیشتر
              </button>
              </Link>
            </div>
          </div>
          <div className="mr-[12%] mt-32 ">
            <Image src={ServiceFrame} width={226} height={226} alt="" />
          </div>

          <div className="relative -mr-[14.9%] mt-[10%]">
            <Image
              src={servicePhoto2}
              width={199}
              height={199}
              alt="service"
              className="rounded-xl  object-cover"
            />
            <p className="absolute -mt-16 mr-[63px] opacity-0 hover:opacity-100 font-medium  text-sm hover:">
              خدمات لیزر
              <div
                className="absolute inset-0 w-[135px] h-[132px] -mt-[101.9px] -mr-[29.6px] rounded-xl object-cover opacity-0 rotate-45  hover:bg-[#5DD9C1] hover:opacity-20 "
                style={{
                  zIndex: "10",
                  background:
                    "linear-gradient(180.99deg, rgba(255, 255, 255, 0) 25.13%, #5DD9C1 104.3%)",
                }}
              ></div>
            </p>
          </div>

          <div className="-mr-[6.5%]  ">
            <Image src={ServiceFrame} width={226} height={226} alt="" />
          </div>

          <div className="relative -mr-[14.7%] mt-[1%]">
            <Image
              src={ServicePhoto1}
              width={199}
              height={199}
              alt="service"
              className="rounded-xl  object-cover"
            />
            <p className="absolute -mt-16 mr-[63px] opacity-0 hover:opacity-100 font-medium  text-sm hover:">
              تزریقات زیبایی
              <div
                className="absolute inset-0 w-[135px] h-[132px] -mt-[101.9px] -mr-[29.6px] rounded-xl object-cover opacity-0 rotate-45  hover:bg-[#5DD9C1] hover:opacity-20 "
                style={{
                  zIndex: "10",
                  background:
                    "linear-gradient(180.99deg, rgba(255, 255, 255, 0) 25.13%, #5DD9C1 104.3%)",
                }}
              ></div>
            </p>
          </div>

          <div className="-mr-[4.5%] mt-24  ">
            <Image src={ServiceFrame} width={226} height={226} alt="" />
          </div>

          <div className="relative -mr-[14.7%] mt-[7.5%]">
            <Image
              src={ServicePhoto4}
              width={199}
              height={199}
              alt="service"
              className="rounded-xl  object-cover"
            />
            <p className="absolute -mt-16 mr-[63px] opacity-0 hover:opacity-100 font-medium  text-sm hover:">
              فیشیال صورت
              <div
                className="absolute inset-0 w-[135px] h-[132px] -mt-[101.9px] -mr-[29.6px] rounded-xl object-cover opacity-0 rotate-45  hover:bg-[#5DD9C1] hover:opacity-20 "
                style={{
                  zIndex: "10",
                  background:
                    "linear-gradient(180.99deg, rgba(255, 255, 255, 0) 25.13%, #5DD9C1 104.3%)",
                }}
              ></div>
            </p>
          </div>

          <div className="-mr-[22.9%] mt-[15%]  ">
            <Image src={ServiceFrame} width={226} height={226} alt="" />
          </div>

          <div className="relative -mr-[14.7%] mt-[16%]">
            <Image
              src={ServicePhoto3}
              width={199}
              height={199}
              alt="service"
              className="rounded-xl  object-cover"
            />
            <p className="absolute -mt-16 mr-[63px] opacity-0 hover:opacity-100 font-medium  text-sm hover:">
              خدمات کاشت
              <div
                className="absolute inset-0 w-[135px] h-[132px] -mt-[101.9px] -mr-[29.6px] rounded-xl object-cover opacity-0 rotate-45  hover:bg-[#5DD9C1] hover:opacity-20 "
                style={{
                  zIndex: "10",
                  background:
                    "linear-gradient(180.99deg, rgba(255, 255, 255, 0) 25.13%, #5DD9C1 104.3%)",
                }}
              ></div>
            </p>
          </div>
        </div>
      </div>
      <div className=" absolute mr-[33.9%] -mt-6">
        <Image src={Flower} width={52} height={58} alt="" />
      </div>
    </Fragment>
  );
}

export default Services;
