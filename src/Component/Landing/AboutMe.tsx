import React, { Fragment } from "react";
import Image from "next/image";
import DoctorImage from "@/assent/Img/Landing/aboutme.svg";
import Flower from "@/assent/Img/Landing/flower.svg";
import EllipseServicePhoto from "@/assent/Img/Landing/EllipseServicePhoto.png";
import EllipseService from "@/assent/Img/Landing/EllipseService.svg";

function AboutMe() {
  return (
    <Fragment>
      <div className="bg-white   mt-6">
        <div className="absolute">
          <Image src={EllipseServicePhoto} width={300} height={300} alt="" />
        </div>
        <div className="absolute mr-[50%]">
          <Image src={EllipseService} width={490} height={500} alt="" />
        </div>

        <div className="flex px-20">
          <Image src={DoctorImage} width={308} height={343} alt="" />
          <div>
            <h3 className="font-medium text-xl text-[#393939] mr-8 mt-14">
              درباره نورانید
            </h3>

            <div className="mt-5 font-regular text-base mr-8 text-[#A5A5A5]">
              <p>
                گروه کلینیک‌ زیبایی نورانید با بیش از ۲۴ سال تجربه درخشان و
                مجهزترین کلینیک خاورمیانه در زمینه پوست و لیزر
              </p>
              <p className="mt-2">
                است. خدمات ارائه شده در کلینیک نورانید مطابق با استاندارهای روز
                جهان است و همه روزه در تلاش هستیم تا بهترین
              </p>
              <p className="mt-2">برای همراهان خود رقم بزنیم.</p>
            </div>

            <div className="mt-12 mr-7">
              <button className="bg-[#DC1E7A] whitespace-nowrap w-36 py-2 px-4 rounded-md text-white font-medium text-sm">
                خدمات ما
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" mr-[57%] mt-[20px]">
        <Image src={Flower} width={52} height={58} alt="" />
      </div>
    </Fragment>
  );
}

export default AboutMe;
