'use client'
import React, { Fragment, useEffect, useState } from "react";
import Background from "@/assent/Img/Landing/background.svg";
import Image from "next/image";
import Flower from "@/assent/Img/Landing/flower.svg";
import FlowerP from "@/assent/Img/Landing/flower.png";
import Link from "next/link";
import WomanImage from "@/assent/Img/Landing/WomanPointLanding.svg";

function ReservationServicePart() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Fragment>
      <div
        className="absolute -z-1 inset-0 w-[100%] h-[65%] md:h-[56%] py-10 mt-1 bg-white "
        style={{ backgroundImage: `url(${Background.src})` }}
      >
        {!isMobile && (
          <>
            <div className="mr-[79.9%] mt-2">
              <Image src={Flower} width={52} height={58} alt="" />
            </div>

            <div className="mr-[63.8%] mt-[40px] absolute">
              <Image src={Flower} width={52} height={58} alt="" />
            </div>
            <div className="mr-[69%] -mt-[4%] absolute">
              <Image src={WomanImage} width={549} height={554} alt="" />
            </div>
          </>
        )}

        <div>
          <h1 className="font-demiBold text-[29px] md:text-[48px] mt-20 mr-[6.5%] leading-[1.5]">
            خدمات ما راز {""}
            <span className="text-[#DC1E7A]">زیبایی</span>
            {""} شماست
          </h1>

          <div className="space-y-4 mr-9 md:mr-24 mt-4">
            <p className="text-xl text-[#A5A5A5] font-regular">
              کلینیک تخصصی پوست و مو نورانید ارائه دهنده خدمات ویژه جوانسازی
              پوست با لیزر،
            </p>
            <p className="text-xl text-[#A5A5A5] font-regular">
              لاغری با دستگاه، لیزر موهای زائد، جراحی زیبایی و فیشیال صورت است.
            </p>
          </div>
        </div>

        {!isMobile && (
          <div className="mr-[55.8%] -mt-[1%] absolute">
            <Image src={Flower} width={52} height={58} alt="" />
          </div>
        )}
        <div className="flex gap-8 mr-[6.5%] mt-12">
          <Link href="/Resevaion">
            <button className="bg-[#DC1E7A] whitespace-nowrap w-36 py-2 px-4 rounded-md text-white font-medium text-sm">
              رزرو نوبت
            </button>
          </Link>
          <button className="border border-[#DC1E7A] whitespace-nowrap w-36 py-2 px-4 rounded-md text-[#DC1E7A] font-medium text-sm">
            مشاوره تلفنی
          </button>
        </div>
      </div>
      {!isMobile && (
        <>
          <div className="mr-[32.5%] mt-[395px]">
            <Image src={Flower} width={52} height={58} alt="" />
          </div>

          <div className="absolute mr-[59.5%] -z-1 ">
            <Image src={FlowerP} width={52} height={58} alt="" />
          </div>
        </>
      )}
    </Fragment>
  );
}

export default ReservationServicePart;
