import React, { Fragment } from "react";
import Image from "next/image";
import ImageUser1 from "@/assent/Img/AdminDashboard/UserImage.svg";
import ImageUser2 from "@/assent/Img/AdminDashboard/UserImage2.svg";
import ImageUser3 from "@/assent/Img/AdminDashboard/UserImage3.svg";
import ImageUser4 from "@/assent/Img/AdminDashboard/UserImage4.svg";
const NumberUserReviews = () => {
  return (
    <Fragment>
      <div className="w-52 h-64 mr-5  rounded-xl bg-white px-3 py-6">
        <h3 className="font-medium text-sm text-[#393939]">
          تعداد نظرات کاربران از خدمات
        </h3>
        <p className="font-regular text-xs mt-2  text-[#727272]">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است
        </p>
        <p className="font-medium text-sm text-[#393939] mr-[100px] mt-10">
          +2.598.221
        </p>
        <div className="relative  mr-[138px] mt-3">
          <Image
            src={ImageUser1}
            width={20}
            height={20}
            alt=""
            className="absolute mr-3"
            style={{ zIndex: 10 }}
          />

          <Image
            src={ImageUser2}
            width={20}
            height={20}
            alt=""
            className="absolute "
            style={{ zIndex: 9 }}
          />

          <Image
            src={ImageUser3}
            width={20}
            height={20}
            alt=""
            className="absolute -mr-4"
            style={{ zIndex: 8 }}
          />

          <Image
            src={ImageUser4}
            width={20}
            height={20}
            alt=""
            className="absolute -mr-8 "
            style={{ zIndex: 7 }}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default NumberUserReviews;
