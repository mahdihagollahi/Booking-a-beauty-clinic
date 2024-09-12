import React from "react";
import Background from "@/assent/Img/Landing/background.svg";
import Image from "next/image";
import Flower from "@/assent/Img/Landing/flower.svg";
// import WomanImage from "@/assent/Img/Landing/WomanReservation.svg";
function ReservationServicePart() {
  return (
    <div>
      <div
        className="absolute -z-1 inset-0 w-[100%] h-[60%] py-10 mt-1 rounded-3xl"
        style={{ backgroundImage: `url(${Background.src})` }}
      >
        <div className=" mr-[80.9%] mt-2">
          <Image src={Flower} width={52} height={58} alt="" />
        </div>

        <div className=" mr-[63.8%] mt-[110px]">
          <Image src={Flower} width={52} height={58} alt="" />
        </div>
        {/* <div className="mr-[65%] -mt-60">
          <Image
                
                src={WomanImage}
                width={550}
                height={554}
                alt=''
                />
        </div> */}

        <div>
          <h1 className="font-demiBold text-[48px] -mt-[6%] mr-[5%] leading-6">
            خدمات ما راز {""}
            <span className="text-[#DC1E7A]">زیبایی</span>
            {""} شماست
          </h1>
        </div>

        <div className="mt-16 mr-[5%] text-[#A5A5A5] font-regular text-xl">
            <p>
            کلینیک تخصصی پوست و مو نورانید ارائه دهنده خدمات ویژه جوانسازی پوست با لیزر، 
            </p>
            <p className="mt-4">
            لاغری با دستگاه، لیزر موهای زائد، جراحی زیبایی و فیشیال صورت است.
            </p>
        </div>

        <div className=" mr-[40.8%] -mt-[2.2%] ">
          <Image src={Flower} width={52} height={58} alt="" />
        </div>

        <div className="flex gap-8 mr-[5%]">
            <button className="bg-[#DC1E7A] whitespace-nowrap w-36 py-2 px-4 rounded-md text-white font-medium text-sm">
                رزرو نوبت
            </button>

            <button className="border border-[#DC1E7A] whitespace-nowrap w-36 py-2 px-4 rounded-md text-[#DC1E7A] font-medium text-sm">
              مشاوره تلفنی
            </button>
        </div>
      </div>
    </div>
  );
}

export default ReservationServicePart;
